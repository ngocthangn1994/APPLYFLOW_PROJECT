import { Schema, model } from "mongoose";

const taskSchema = new Schema(
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
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["open", "in_progress", "done"],
      default: "open",
      index: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
      index: true,
    },
    dueAt: {
      type: Date,
      default: null,
      index: true,
    },
    comments: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { timestamps: true },
);

taskSchema.index({ assistantId: 1, status: 1, dueAt: 1 });
taskSchema.index({ clientId: 1, status: 1 });

export const Task = model("Task", taskSchema);
