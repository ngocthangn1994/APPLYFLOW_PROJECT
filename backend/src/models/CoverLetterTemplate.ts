import { Schema, model } from "mongoose";

const coverLetterTemplateSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
    archived: {
      type: Boolean,
      default: false,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

coverLetterTemplateSchema.index({ userId: 1, archived: 1 });

export const CoverLetterTemplate = model(
  "CoverLetterTemplate",
  coverLetterTemplateSchema,
);
