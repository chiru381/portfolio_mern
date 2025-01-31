const router = require("express").Router();
const Education = require("../models/Education");

//CREATE Education
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

// UPDATE Education
router.put("/:title", async (req, res) => {
  try{
    const education = await Education.findById(req.params.title);
    try{
      const updatedEducation = await education.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedEducation);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like a Education
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedEducation = await Education.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedEducation);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Education BY IDTITLE
router.get("/:idTitle", async (req,res) => {
  try{
    const education = await Education.find({"idTitle": req.params.idTitle});
    res.status(200).json(education);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Education
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let educations;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(idTitle){
      query.idTitle = req.query.idTitle;
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


module.exports = router;