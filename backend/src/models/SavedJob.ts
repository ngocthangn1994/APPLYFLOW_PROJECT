import { Schema, model } from "mongoose";

const savedJobSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["saved", "dismissed", "archived"],
      default: "saved",
      index: true,
    },
  },
  { timestamps: true },
);

savedJobSchema.index({ clientId: 1, jobId: 1 }, { unique: true });

export const SavedJob = model("SavedJob", savedJobSchema);
