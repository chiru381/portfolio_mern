import express from "express";
import Skill from "../models/Skill.js"

const router = express.Router();

router.post("/",async (req, res) => {
  const newSkill = new Skill(req.body);
  try{
    const saveSkill = await newSkill.save();
    res.status(200).json(saveSkill);
  }
  catch(error){
    res.status(500).json(error);
  }
});

router.get("/", async (req,res) => {
  try{
    let skills;

    let query = {};

    if(req.query.category){
      query.category = req.query.category;
    }

    if(req.query.limit){
      skills = await Skill.find(query).sort({importance:-1}).limit(req.query.limit);
    }
    else{
      skills = await Skill.find(query).sort({importance:-1});
    }

    res.status(200).json(skills);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


export default router;