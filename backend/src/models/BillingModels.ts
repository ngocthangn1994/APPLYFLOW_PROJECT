import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    planId: {
      type: Schema.Types.ObjectId,
      ref: "SubscriptionPlan",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "trialing", "past_due", "canceled", "expired"],
      default: "active",
      index: true,
    },
    currentPeriodStart: Date,
    currentPeriodEnd: Date,
    provider: {
      type: String,
      enum: ["mock", "stripe"],
      default: "mock",
    },
    externalId: {
      type: String,
      default: "",
      index: true,
    },
  },
  { timestamps: true },
);

const invoiceSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "USD",
      uppercase: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["draft", "open", "paid", "void", "uncollectible"],
      default: "open",
      index: true,
    },
    providerInvoiceId: {
      type: String,
      default: "",
      index: true,
    },
    dueAt: Date,
  },
  { timestamps: true },
);

const paymentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    invoiceId: {
      type: Schema.Types.ObjectId,
      ref: "Invoice",
      required: true,
      index: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
      index: true,
    },
    method: {
      type: String,
      enum: ["card", "bank_transfer", "paypal", "mock"],
      default: "mock",
    },
    providerPaymentId: {
      type: String,
      default: "",
      index: true,
    },
  },
  { timestamps: true },
);

export const Subscription = model("Subscription", subscriptionSchema);
export const Invoice = model("Invoice", invoiceSchema);
export const Payment = model("Payment", paymentSchema);
