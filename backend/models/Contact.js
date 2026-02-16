import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    countryCode: {
      type: String,
      required: true
    },
    countryName: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

// Prevent exact duplicate (email + phone combination)
ContactSchema.index({ email: 1, phone: 1 }, { unique: true });

export default mongoose.model("Contact", ContactSchema);
