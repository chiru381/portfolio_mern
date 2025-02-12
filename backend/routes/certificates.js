import express from "express";
import Certificatepage from "../models/Certificate.js"

const router = express.Router();

router.post("/",async (req, res) => {
  const newCertificatepage = new Certificatepage(req.body);
  try{
    const saveCertificatePage = await newCertificatepage.save();
    res.status(200).json(saveCertificatePage);
  }
  catch(error){
    res.status(500).json(error);
  }
});

router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let certificatepages;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(idTitle){
      query.idTitle = req.query.idTitle;
    }

    if(limit){
        certificatepages = await Certificatepage.find(query).sort({buildDate:-1}).limit(req.query.limit);
    }
    else{
        certificatepages = await Certificatepage.find(query).sort({buildDate:-1});
    }

    res.status(200).json(certificatepages);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


export default router;
