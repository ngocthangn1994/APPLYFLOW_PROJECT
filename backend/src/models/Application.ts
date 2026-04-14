import { Schema, model } from "mongoose";

const applicationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    assistantId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },
    jobMatchId: {
      type: Schema.Types.ObjectId,
      ref: "JobMatch",
      default: null,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    jobUrl: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["saved", "delegated", "applied", "interview", "rejected", "offer"],
      default: "saved",
      index: true,
    },
    dateApplied: {
      type: Date,
      default: null,
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true },
);

applicationSchema.index({ userId: 1, createdAt: -1 });
applicationSchema.index({ userId: 1, status: 1 });
applicationSchema.index({ assistantId: 1, status: 1 });

export const Application = model("Application", applicationSchema);
