import { Router } from "express";
import { getMyResume, uploadResume } from "../controllers/resumeController";
import { requireAuth } from "../middleware/authMiddleware";
import { upload } from "../middleware/uploadMiddleware";

const router = Router();

router.use(requireAuth);

router.post("/upload", upload.single("resume"), uploadResume);
router.get("/me", getMyResume);

export default router;
