const router = require("express").Router();
const Experience = require("../models/Experience");

router.post("/",async (req, res) => {
  const newExperience = new Experience(req.body);
  try{
    const saveExperience = await newExperience.save();
    res.status(200).json(saveExperience);
  }
  catch(error){
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id); 
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json(experience);
  } catch (err) {
    console.error("Error fetching experience:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const jobTitle = req.query.jobTitle;
    const limit = req.query.limit;
    let experiences;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(jobTitle){
      query.jobTitle = req.query.jobTitle;
    }

    if(limit){
      experiences = await Experience.find(query).sort({_id:-1}).limit(req.query.limit);
    }
    else{
      experiences = await Experience.find(query).sort({_id:-1});
    }

    res.status(200).json(experiences);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;