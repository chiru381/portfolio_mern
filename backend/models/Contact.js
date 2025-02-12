import mongoose from "mongoose"

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

export default mongoose.model("Contact",ContactSchema,"Contact");