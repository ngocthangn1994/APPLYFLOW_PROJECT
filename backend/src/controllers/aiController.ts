import { Request, Response } from "express";
import { analyzeResume, generateCoverLetter } from "../services/aiService";
import { asyncHandler } from "../utils/asyncHandler";

export const analyzeResumeController = asyncHandler(
  async (req: Request, res: Response) => {
    const { resumeText, profile } = req.body;

    if (!resumeText || typeof resumeText !== "string") {
      return res.status(400).json({
        message: "resumeText is required",
      });
    }

    const analysis = await analyzeResume(resumeText, profile ?? {});

    res.json({
      message: "Resume analyzed successfully",
      data: analysis,
    });
  },
);

export const jobMatchesController = asyncHandler(
  async (_req: Request, res: Response) => {
    res.json({
      message: "Job matches fetched successfully",
      data: {
        matches: [],
        note: "Use analysis + job source integrations to populate.",
      },
    });
  },
);

export const generateCoverLetterController = asyncHandler(
  async (req: Request, res: Response) => {
    const { jobTitle, company, resumeSummary } = req.body;

    if (!jobTitle || !company || !resumeSummary) {
      return res.status(400).json({
        message: "jobTitle, company, and resumeSummary are required",
      });
    }

    const text = await generateCoverLetter({ jobTitle, company, resumeSummary });

    res.json({
      message: "Cover letter generated successfully",
      data: {
        coverLetter: text,
      },
    });
  },
);
