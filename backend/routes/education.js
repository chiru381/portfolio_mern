import express from "express";
import Education from "../models/Education.js"

const router = express.Router();

router.post("/",async (req, res) => {
  const newEducation = new Education(req.body);
  try{
    const saveEducation = await newEducation.save();
    res.status(200).json(saveEducation);
  }
  catch(error){
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const education = await Education.findById(req.params.id); 
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.status(200).json(education);
  } catch (err) {
    console.error("Error fetching education:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const education = req.query.education;
    const limit = req.query.limit;
    let educations;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(education){
      query.education = req.query.education;
    }

    if(limit){
      educations = await Education.find(query).sort({buildDate:-1}).limit(req.query.limit);
    }
    else{
      educations = await Education.find(query).sort({buildDate:-1});
    }

    res.status(200).json(educations);
  }
  catch(err){
    res.status(500).json(err); 
  }
});

export default router;