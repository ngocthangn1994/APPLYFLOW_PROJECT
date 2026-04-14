import { Schema, model } from "mongoose";

const emailAccountSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    provider: {
      type: String,
      enum: ["mock", "gmail", "imap"],
      default: "mock",
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    connected: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const emailThreadSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    subject: {
      type: String,
      trim: true,
      default: "",
    },
    labels: [
      {
        type: String,
        trim: true,
      },
    ],
    unread: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true },
);

const emailMessageSchema = new Schema(
  {
    threadId: {
      type: Schema.Types.ObjectId,
      ref: "EmailThread",
      required: true,
      index: true,
    },
    sender: {
      type: String,
      trim: true,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
    statusTag: {
      type: String,
      enum: [
        "interview_invite",
        "rejection",
        "assessment",
        "offer",
        "follow_up",
        "general",
      ],
      default: "general",
    },
    read: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  { timestamps: true },
);

const emailAttachmentSchema = new Schema(
  {
    messageId: {
      type: Schema.Types.ObjectId,
      ref: "EmailMessage",
      required: true,
      index: true,
    },
    fileName: {
      type: String,
      trim: true,
      default: "",
    },
    fileUrl: {
      type: String,
      trim: true,
      default: "",
    },
    mimeType: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true },
);

export const EmailAccount = model("EmailAccount", emailAccountSchema);
export const EmailThread = model("EmailThread", emailThreadSchema);
export const EmailMessage = model("EmailMessage", emailMessageSchema);
export const EmailAttachment = model("EmailAttachment", emailAttachmentSchema);
