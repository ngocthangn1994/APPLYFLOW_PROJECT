import { Request, Response } from "express";
import mongoose from "mongoose";
import { Application } from "../models/Application";
import { ApplicationEvidence } from "../models/ApplicationEvidence";
import { asyncHandler } from "../utils/asyncHandler";

export const getMyApplications = asyncHandler(
  async (req: Request, res: Response) => {
    const apps = await Application.find({ userId: req.user!.id }).sort({
      createdAt: -1,
    });

    res.json({
      message: "Applications fetched successfully",
      data: apps,
    });
  },
);

export const createApplication = asyncHandler(
  async (req: Request, res: Response) => {
    const { jobTitle, company, location, status, sourceUrl, notes, appliedAt } =
      req.body;

    const app = await Application.create({
      userId: req.user!.id,
      jobTitle,
      company,
      location,
      status: status || "saved",
      sourceUrl,
      notes,
      appliedAt,
    });

    res.status(201).json({
      message: "Application created successfully",
      data: app,
    });
  },
);

export const updateApplicationStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid application id" });
    }

    const { status, notes } = req.body;

    const app = await Application.findOneAndUpdate(
      { _id: id, userId: req.user!.id },
      { status, notes },
      { new: true, runValidators: true },
    );

    if (!app) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json({
      message: "Application updated successfully",
      data: app,
    });
  },
);

export const addEvidence = asyncHandler(async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid application id" });
  }

  const application = await Application.findOne({
    _id: id,
    userId: req.user!.id,
  });

  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }

  const { label, fileUrl, fileType, notes } = req.body;

  const evidence = await ApplicationEvidence.create({
    applicationId: id,
    uploadedBy: req.user!.id,
    label,
    fileUrl,
    fileType,
    notes,
  });

  res.status(201).json({
    message: "Evidence added successfully",
    data: evidence,
  });
});
