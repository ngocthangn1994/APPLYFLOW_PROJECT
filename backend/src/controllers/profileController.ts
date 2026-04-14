import { Request, Response } from "express";
import { ClientProfile } from "../models/ClientProfile";
import { asyncHandler } from "../utils/asyncHandler";

export const getMyProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const profile = await ClientProfile.findOne({ userId: req.user!.id });

    res.json({
      message: "Profile fetched successfully",
      data: profile,
    });
  },
);

export const upsertMyProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      phone,
      locationPreferences,
      relocationOpen,
      workPreferences,
      salaryRange,
      targetJobTitles,
      seniorityLevel,
      industries,
      earliestStartDate,
      contractOpen,
      travelOpen,
      veteranStatus,
      visaSupportNeeded,
      summary,
    } = req.body;

    const updates = {
      userId: req.user!.id,
      phone,
      locationPreferences,
      relocationOpen,
      workPreferences,
      salaryRange,
      targetJobTitles,
      seniorityLevel,
      industries,
      earliestStartDate,
      contractOpen,
      travelOpen,
      veteranStatus,
      visaSupportNeeded,
      summary,
    };

    const profile = await ClientProfile.findOneAndUpdate(
      { userId: req.user!.id },
      updates,
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      },
    );

    res.json({
      message: "Profile saved successfully",
      data: profile,
    });
  },
);
