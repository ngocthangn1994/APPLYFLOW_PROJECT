import { Schema, model } from "mongoose";

const jobMatchSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    title: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    location: {
      type: String,
      trim: true,
      default: "",
    },
    source: {
      type: String,
      trim: true,
      default: "",
    },
    jobUrl: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    matchScore: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
      index: true,
    },
    matchedSkills: [
      {
        type: String,
        trim: true,
      },
    ],
    missingSkills: [
      {
        type: String,
        trim: true,
      },
    ],
    aiReason: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["suggested", "saved", "delegated", "applied", "dismissed"],
      default: "suggested",
      index: true,
    },
  },
  { timestamps: true },
);

jobMatchSchema.index({ userId: 1, status: 1, matchScore: -1 });

export const JobMatch = model("JobMatch", jobMatchSchema);
