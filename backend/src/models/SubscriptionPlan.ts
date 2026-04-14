import { Schema, model } from "mongoose";

export type AssistantSupportLevel =
  | "none"
  | "shared"
  | "dedicated"
  | "concierge";

const subscriptionPlanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    priceMonthly: {
      type: Number,
      required: true,
      min: 0,
    },
    applicationLimit: {
      type: Number,
      default: 0,
      min: 0,
    },
    assistantSupportLevel: {
      type: String,
      enum: ["none", "shared", "dedicated", "concierge"],
      default: "none",
    },
    chatAvailability: {
      type: String,
      enum: ["none", "business-hours", "priority"],
      default: "business-hours",
    },
    turnaround: {
      type: String,
      trim: true,
      default: "48h",
    },
    documentGenerationLimit: {
      type: Number,
      default: 10,
      min: 0,
    },
    features: [
      {
        type: String,
        trim: true,
      },
    ],
    badge: {
      type: String,
      trim: true,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true },
);

export const SubscriptionPlan = model(
  "SubscriptionPlan",
  subscriptionPlanSchema,
);
