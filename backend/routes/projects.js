import express from "express";
import Projectpage from "../models/Project.js"

const router = express.Router();

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


export default router;