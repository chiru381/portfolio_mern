const router = require("express").Router();
const Projectpage = require("../models/Project");

//CREATE Projects
router.post("/",async (req, res) => {
  const newProjectpage = new Projectpage(req.body);
  try{
    const saveProjectPage = await newProjectpage.save();
    res.status(200).json(saveProjectPage);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Projects
router.put("/:title", async (req, res) => {
  try{
    const projectpage = await Projectpage.findById(req.params.title);
    try{
      const updatedProjectpage = await projectpage.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedProjectpage);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like a Project
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedProjectpage = await Projectpage.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedProjectpage);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Project BY ID
router.get("/:id", async (req, res) => {
  try {
    // Fetch project based on ObjectId
    const projectpage = await Projectpage.findById(req.params.id);
    
    if (!projectpage) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(projectpage);
  } catch (err) {
    console.error("Error fetching project:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//GET ALL Projects
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let projectpages;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(idTitle){
      query.idTitle = req.query.idTitle;
    }

    if(limit){
      projectpages = await Projectpage.find(query).sort({buildDate:-1}).limit(req.query.limit);
    }
    else{
      projectpages = await Projectpage.find(query).sort({buildDate:-1});
    }

    res.status(200).json(projectpages);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;