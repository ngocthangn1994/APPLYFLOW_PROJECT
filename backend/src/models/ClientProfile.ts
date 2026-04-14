import { Schema, model } from "mongoose";

const clientProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    location: {
      type: String,
      trim: true,
      default: "",
    },
    linkedinUrl: {
      type: String,
      trim: true,
      default: "",
    },
    portfolioUrl: {
      type: String,
      trim: true,
      default: "",
    },
    visaStatus: {
      type: String,
      trim: true,
      default: "",
    },
    yearsOfExperience: {
      type: Number,
      min: 0,
      default: 0,
    },
    desiredJobTitles: [
      {
        type: String,
        trim: true,
      },
    ],
    desiredLocations: [
      {
        type: String,
        trim: true,
      },
    ],
    employmentTypes: [
      {
        type: String,
        trim: true,
      },
    ],
    workMode: [
      {
        type: String,
        trim: true,
      },
    ],
    salaryExpectation: {
      type: String,
      trim: true,
      default: "",
    },
    summary: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true },
);

export const ClientProfile = model("ClientProfile", clientProfileSchema);
