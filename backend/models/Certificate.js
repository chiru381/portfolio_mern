const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema(
  {
    title: {
      type:String,
      required:true,
      unique:true
    },
    idTitle: {
      type:String,
      required:true,
      unique:true
    },
    description: {
      type: String
    },
    content: {
      type:String
    },
    coverImage:{
      type:String
    },
    imageCaption:{
      type:String
    },
    imageAlt:{
      type:String
    },
    category:{
      type:Array
    },
    buildDate:{
      type:Date
    },
    // 1 - easy, 2 - medium, 3 - hard
    difficultyType:{
      type:Number
    },
    likes_count:{
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certificate",CertificateSchema,"Certificates");