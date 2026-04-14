import { Schema, model } from "mongoose";

const generatedDocumentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      default: null,
      index: true,
    },
    kind: {
      type: String,
      enum: ["resume", "coverLetter"],
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: "",
    },
    fileUrl: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["draft", "generating", "ready", "failed"],
      default: "ready",
      index: true,
    },
  },
  { timestamps: true },
);

generatedDocumentSchema.index({ userId: 1, kind: 1, createdAt: -1 });

export const GeneratedDocument = model(
  "GeneratedDocument",
  generatedDocumentSchema,
);
