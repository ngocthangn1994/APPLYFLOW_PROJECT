import { Schema, model } from "mongoose";

const delegatedJobSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    assistantId: {
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
      enum: ["new", "in_progress", "applied", "blocked", "needs_client_input"],
      default: "new",
      index: true,
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
    proofFiles: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

delegatedJobSchema.index({ assistantId: 1, status: 1, createdAt: -1 });
delegatedJobSchema.index({ clientId: 1, status: 1, createdAt: -1 });

export const DelegatedJob = model("DelegatedJob", delegatedJobSchema);
