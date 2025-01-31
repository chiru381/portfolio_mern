const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type:String,
    //   required:true,
    //   unique:true
    },
    email: {
      type:String,
    //   required:true,
    //   unique:true
    },
    message: {
      type: String
    },
    phone: {
      type: String, // Store the phone number with country code (e.g., +1234567890)
      // required: true
    },
    countryCode: {
      type: String, // Store the country code (e.g., +1)
      // required: true
    },
    countryName: {
      type: String, // Store the full country name (e.g., United States)
      // required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact",ContactSchema,"Contact");