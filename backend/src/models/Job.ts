import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    source: {
      type: String,
      trim: true,
      default: "seed",
      index: true,
    },
    sourceUrl: {
      type: String,
      trim: true,
      default: "",
    },
    externalId: {
      type: String,
      trim: true,
      index: true,
      default: "",
    },
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    location: {
      type: String,
      trim: true,
      default: "",
      index: true,
    },
    remoteType: {
      type: String,
      enum: ["remote", "hybrid", "onsite"],
      default: "onsite",
      index: true,
    },
    salaryMin: {
      type: Number,
      min: 0,
      default: null,
    },
    salaryMax: {
      type: Number,
      min: 0,
      default: null,
    },
    description: {
      type: String,
      default: "",
    },
    requirements: [
      {
        type: String,
        trim: true,
      },
    ],
    skills: [
      {
        type: String,
        trim: true,
      },
    ],
    postedAt: {
      type: Date,
      default: null,
      index: true,
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true },
);

jobSchema.index({ title: 1, company: 1 });
jobSchema.index({ company: 1, postedAt: -1 });
jobSchema.index({ remoteType: 1, location: 1 });

export const Job = model("Job", jobSchema);
