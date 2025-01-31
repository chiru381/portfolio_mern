const router = require("express").Router();
const Experience = require("../models/Experience");

//CREATE Experience
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

// UPDATE Experience
router.put("/:title", async (req, res) => {
  try{
    const experience = await Experience.findById(req.params.title);
    try{
      const updatedExperience = await experience.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedExperience);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like an article
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedExperience = await Experience.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedExperience);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Article BY IDTITLE
router.get("/:idTitle", async (req,res) => {
  try{
    const experience = await Experience.find({"idTitle": req.params.idTitle});
    res.status(200).json(experience);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Articles
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let experiences;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(idTitle){
      query.idTitle = req.query.idTitle;
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