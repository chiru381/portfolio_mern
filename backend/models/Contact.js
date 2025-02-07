const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type:String,
      required:true,
      unique:true
    },
    email: {
      type:String,
      required:true,
      unique:true
    },
    message: {
      type: String
    },
    phone: {
      type: String, 
      required: true
    },
    countryCode: {
      type: String
    },
    countryName: {
      type: String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact",ContactSchema,"Contact");