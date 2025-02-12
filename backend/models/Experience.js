import mongoose from "mongoose"

const ExperienceSchema = new mongoose.Schema(
  {
    jobTitle: {
      type:String,
      required:true,
      unique:true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type:String,
      required:true,
      unique:true
    },
    location: {
      type: String
    },
    employmentType: {
      type:String
    },
    startDate:{
      type:String
    },
    endDate:{
      type:String
    },
    isCurrent:{
      type:Boolean,
      default: false
    },
    technologies:{
      type: [String]
    }
  },
  { timestamps: true }
);

export default mongoose.model("Experience",ExperienceSchema,"Experience");