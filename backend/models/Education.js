import mongoose from "mongoose"

const EducationSchema = new mongoose.Schema(
  {
    education: {
      type:String,
      required:true,
      unique:true
    },
    institute: {
      type:String,
      required:true,
      unique:true
    },
    location: {
      type: String
    },
    university: {
      type:String
    },
    coverImage:{
      type:String
    },
    category:{
      type:Array
    }
  },
  { timestamps: true }
);

export default mongoose.model("Education",EducationSchema,"Education");