import { Router } from "express";
import {
  analyzeResumeController,
  generateCoverLetterController,
  jobMatchesController,
} from "../controllers/aiController";

const router = Router();

/**
 * This router is already protected by requireAuth in server.ts:
 * app.use('/api/v1/ai', requireAuth, aiRoutes);
 */

router.post("/analyze-resume", analyzeResumeController);
router.get("/job-matches", jobMatchesController);
router.post("/generate-cover-letter", generateCoverLetterController);

export default router;
