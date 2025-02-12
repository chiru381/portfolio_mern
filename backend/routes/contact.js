import express from "express";
import ContactPage from "../models/Contact.js"
import nodemailer from "nodemailer"

const router = express.Router();

router.post("/",async (req, res) => {
    const { name, email, message, phone, countryCode, countryName } = req.body;

    if (!name || !email || !message || !phone || !countryCode || !countryName) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }

    try {
        const newContact = new ContactPage({ name, email, message, phone, countryCode, countryName });
        await newContact.save();
        console.log("Contact form data saved successfully.");

        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "chirukosanam123@gmail.com",
                pass: "xxhrvvaakgwryfzi",
              },
        });

        await transporter.sendMail({
            from: "chirukosanam123@gmail.com",
            to: "chirukosanam123@gmail.com",
            subject: `New Contact Form Submission from ${name}`,
            html: `<h1>New Contact Message</h1>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
             <p><strong>Country:</strong> ${countryName}</p>
             <p><strong>Message:</strong> ${message}</p>`,
          });
      
          console.log("email sent sucessfully");

        res.status(200).json({ success: true, message: "Contact form submitted successfully." });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, error: "Failed to send the message." });
    }
});


export default router;