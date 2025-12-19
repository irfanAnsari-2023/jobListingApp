import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/job.routes.js";
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
