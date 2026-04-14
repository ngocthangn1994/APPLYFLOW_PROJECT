import { Schema, model } from "mongoose";

const searchFilterSchema = new Schema(
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
    roleTitles: [
      {
        type: String,
        trim: true,
      },
    ],
    altTitles: [
      {
        type: String,
        trim: true,
      },
    ],
    locations: [
      {
        type: String,
        trim: true,
      },
    ],
    keywords: [
      {
        type: String,
        trim: true,
      },
    ],
    notes: {
      type: String,
      trim: true,
      default: "",
    },
    isPrimary: {
      type: Boolean,
      default: false,
      index: true,
    },
    archived: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  { timestamps: true },
);

searchFilterSchema.index({ userId: 1, archived: 1, isPrimary: 1 });
searchFilterSchema.index({ userId: 1, createdAt: -1 });

export const SearchFilter = model("SearchFilter", searchFilterSchema);
