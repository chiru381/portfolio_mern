import express from "express";
import ContactPage from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message, phone, countryCode, countryName } = req.body;

  // 1️⃣ Validation
  if (!name || !email || !message || !phone || !countryCode || !countryName) {
    return res.status(400).json({
      success: false,
      error: "All fields are required.",
    });
  }

  try {
    // 2️⃣ Check Duplicate User (email + phone)
    const existingUser = await ContactPage.findOne({
      email,
      phone,
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already submitted contact form.",
      });
    }

    // 3️⃣ Save to DB
    const newContact = new ContactPage({
      name,
      email,
      message,
      phone,
      countryCode,
      countryName,
    });
    await newContact.save();
    console.log("Contact form data saved successfully.");

    // 4️⃣ Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter
    await transporter.verify();

    // 5️⃣ Send Email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p><strong>Country:</strong> ${countryName}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email sent successfully");

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully.",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: "Server error. Please try again.",
    });
  }
});


export default router;