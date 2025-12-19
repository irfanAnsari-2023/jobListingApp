import express from "express";
import {
  getAllJobs,
  getJobById,
  getJobsByLocations,
} from "../controllers/job.controller.js";

const router = express.Router();
router.get("/", getAllJobs);

router.get("/search", getJobsByLocations);

router.get("/:id", getJobById);

export default router;
