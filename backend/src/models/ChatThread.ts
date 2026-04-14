import { Schema, model } from "mongoose";

const chatThreadSchema = new Schema(
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
      default: null,
      index: true,
    },
    participantIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isPremiumUnlocked: {
      type: Boolean,
      default: false,
    },
    lastMessageAt: {
      type: Date,
      default: null,
      index: true,
    },
  },
  { timestamps: true },
);

chatThreadSchema.index({ clientId: 1, assistantId: 1 });

export const ChatThread = model("ChatThread", chatThreadSchema);
