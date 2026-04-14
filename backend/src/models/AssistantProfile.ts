import { Schema, model } from "mongoose";

const assistantProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    specialties: [
      {
        type: String,
        trim: true,
      },
    ],
    capacity: {
      type: Number,
      default: 8,
      min: 0,
    },
    activeClientCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    timezone: {
      type: String,
      trim: true,
      default: "",
    },
    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true },
);

export const AssistantProfile = model(
  "AssistantProfile",
  assistantProfileSchema,
);
