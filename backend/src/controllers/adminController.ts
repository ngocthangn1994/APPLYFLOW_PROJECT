import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";
import { Application } from "../models/Application";
import { asyncHandler } from "../utils/asyncHandler";

export const getClients = asyncHandler(async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const [clients, total] = await Promise.all([
    User.find({ role: "client" })
      .populate("assignedAssistantId subscriptionPlanId")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    User.countDocuments({ role: "client" }),
  ]);

  res.json({
    data: clients,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

export const getClientById = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid client id" });
    }

    const client = await User.findById(id).populate(
      "assignedAssistantId subscriptionPlanId",
    );

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.json(client);
  },
);

export const assignAssistant = asyncHandler(
  async (req: Request, res: Response) => {
    const { assistantId } = req.body;
    const clientId = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      return res.status(400).json({ message: "Invalid client id" });
    }

    if (!mongoose.Types.ObjectId.isValid(assistantId)) {
      return res.status(400).json({ message: "Invalid assistant id" });
    }

    const client = await User.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    const assistant = await User.findById(assistantId);
    if (!assistant) {
      return res.status(404).json({ message: "Assistant not found" });
    }

    if (assistant.role !== "assistant") {
      return res
        .status(400)
        .json({ message: "Selected user is not an assistant" });
    }

    client.assignedAssistantId = assistant._id;
    await client.save();

    const updatedClient = await User.findById(clientId).populate(
      "assignedAssistantId subscriptionPlanId",
    );

    res.json({
      message: "Assistant assigned successfully",
      data: updatedClient,
    });
  },
);

export const getAllApplications = asyncHandler(
  async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const [apps, total] = await Promise.all([
      Application.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Application.countDocuments(),
    ]);

    res.json({
      data: apps,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  },
);

export const updateApplication = asyncHandler(
  async (req: Request, res: Response) => {
    const { status, notes, proofUrl } = req.body;
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid application id" });
    }

    const allowedUpdates: Record<string, unknown> = {};

    if (status !== undefined) allowedUpdates.status = status;
    if (notes !== undefined) allowedUpdates.notes = notes;
    if (proofUrl !== undefined) allowedUpdates.proofUrl = proofUrl;

    const app = await Application.findByIdAndUpdate(id, allowedUpdates, {
      new: true,
      runValidators: true,
    });

    if (!app) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json({
      message: "Application updated successfully",
      data: app,
    });
  },
);
