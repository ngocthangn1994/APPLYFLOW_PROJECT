import { Schema, model } from "mongoose";

const chatMessageSchema = new Schema(
  {
    threadId: {
      type: Schema.Types.ObjectId,
      ref: "ChatThread",
      required: true,
      index: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    body: {
      type: String,
      trim: true,
      default: "",
    },
    messageType: {
      type: String,
      enum: ["text", "system"],
      default: "text",
    },
    attachments: [
      {
        type: String,
      },
    ],
    readBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

chatMessageSchema.index({ threadId: 1, createdAt: 1 });

export const ChatMessage = model("ChatMessage", chatMessageSchema);
