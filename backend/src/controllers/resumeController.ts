import { Request, Response } from "express";
import { Resume } from "../models/Resume";
import { asyncHandler } from "../utils/asyncHandler";

export const uploadResume = asyncHandler(
  async (req: Request, res: Response) => {
    const { fileName, fileUrl, originalText, parsedText, summary, skills } =
      req.body;

    const resume = await Resume.create({
      userId: req.user!.id,
      fileName,
      fileUrl,
      originalText,
      parsedText,
      summary,
      skills,
    });

    res.status(201).json({
      message: "Resume uploaded successfully",
      data: resume,
    });
  },
);

export const getMyResume = asyncHandler(async (req: Request, res: Response) => {
  const resume = await Resume.findOne({ userId: req.user!.id }).sort({
    createdAt: -1,
  });

  res.json({
    message: "Resume fetched successfully",
    data: resume,
  });
});
