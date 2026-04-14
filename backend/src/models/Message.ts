import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    userId: {
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
    senderRole: {
      type: String,
      enum: ["client", "assistant", "admin", "system"],
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

messageSchema.index({ userId: 1, assistantId: 1, createdAt: 1 });

export const Message = model("Message", messageSchema);
