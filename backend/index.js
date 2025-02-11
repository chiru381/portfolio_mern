const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const experienceRoute = require("./routes/experience");
const projectRoute = require("./routes/projects");
const certificateRoute = require("./routes/certificates");
const skillsRoute = require("./routes/skills");
const educationRoute = require("./routes/education");
const contactRoute = require("./routes/contact");
dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());

// Serve frontend build files
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 8000;
const DB = process.env.CLOUD_URI

mongoose.connect(DB).
then(() => console.log('Mongo DB - Connected Successfully')).catch(err => console.log(err));

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, 
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api/experience",experienceRoute);
app.use("/api/projects",projectRoute);
app.use("/api/certificates",certificateRoute);
app.use("/api/skills", skillsRoute);
app.use("/api/education", educationRoute);  
app.use("/api/contact", contactRoute);

app.listen(PORT,() => {
    console.log(`Backend is running: ${PORT}`);
});