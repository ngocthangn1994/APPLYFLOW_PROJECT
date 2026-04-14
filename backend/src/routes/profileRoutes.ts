import { Router } from "express";
import {
  getMyProfile,
  upsertMyProfile,
} from "../controllers/profileController";
import { requireAuth } from "../middleware/authMiddleware";

const router = Router();

router.use(requireAuth);

router.get("/me", getMyProfile);
router.put("/me", upsertMyProfile);

export default router;
