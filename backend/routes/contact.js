const router = require("express").Router();
// const ContactPage = require("../models/Contact");
const nodemailer = require("nodemailer");

//CREATE Blog
router.post("/",async (req, res) => {
    // const newBlogpage = new Blogpage(req.body);
    const { name, email, message, phone, countryCode, countryName } = req.body;

    if (!name || !email || !message || !phone || !countryCode || !countryName) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }

    try {
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
            subject: name,
            text: "Hello...",
            html: `<h1>Welcome ${name}</h1><p>${email} is Contacting you.${message}</p>`,
          });
      
          console.log("email sent sucessfully");

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, error: "Failed to send the message." });
    }
});


module.exports = router;