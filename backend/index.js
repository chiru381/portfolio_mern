import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import path from "path"

import experienceRoute from "./routes/experience.js"
import projectRoute from "./routes/projects.js"
import certificateRoute from "./routes/certificates.js"
import skillsRoute from "./routes/skills.js"
import educationRoute from "./routes/education.js"
import contactRoute from "./routes/contact.js"
import { fileURLToPath } from "url"

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Enable CORS
app.use(cors());

// Connect to MongoDB
const PORT = process.env.PORT || 8000;
const DB = process.env.CLOUD_URI

mongoose.connect(DB)
  .then(() => console.log('MongoDB - Connected Successfully'))
  .catch(err => console.log(err));

// Define API routes
app.use("/api/experience", experienceRoute);
app.use("/api/projects", projectRoute);
app.use("/api/certificates", certificateRoute);
app.use("/api/skills", skillsRoute);
app.use("/api/education", educationRoute);
app.use("/api/contact", contactRoute);

// Serve frontend build files
app.use(express.static(path.join(__dirname, "/frontend/build")));

// Catch-all route (Move this BELOW the API routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Backend is running on port: ${PORT}`);
});
