import express from "express";
import {
  applyToJob,
  createManyJobs,
  getAllJobs,
  getJobById,
} from "../controllers/jobs.js";

const router = express.Router();

router.get("/", getAllJobs);
router.get("/job/:id", getJobById);
router.post("/", createManyJobs);
router.post("/job/:id/apply", applyToJob);

export default router;
