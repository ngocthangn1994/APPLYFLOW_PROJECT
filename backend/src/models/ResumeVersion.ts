import { Schema, model } from "mongoose";

const resumeVersionSchema = new Schema(
  {
    resumeId: {
      type: Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
      index: true,
    },
    label: {
      type: String,
      required: true,
      trim: true,
    },
    fileUrl: {
      type: String,
      required: true,
      trim: true,
    },
    parsed: {
      type: Schema.Types.Mixed,
      default: {},
    },
    isDefault: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  { timestamps: true },
);

resumeVersionSchema.index({ resumeId: 1, createdAt: -1 });
resumeVersionSchema.index({ resumeId: 1, isDefault: 1 });

export const ResumeVersion = model("ResumeVersion", resumeVersionSchema);
