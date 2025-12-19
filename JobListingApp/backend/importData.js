// backend/importData.js
import fs from "fs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Job from "./models/job.model.js";

dotenv.config();

// 1️⃣ Read raw JSON
const rawJobs = JSON.parse(fs.readFileSync("./data/jobs.json", "utf-8"));

// 2️⃣ Transform JSON → Schema format
const transformJobs = (jobs) => {
  return jobs.map((job) => ({
    jobId: job["Job ID (Numeric)"],
    title: job.title,
    company: job.company,
    location: job.location,
    jobLink: job.job_link,
    seniorityLevel: job.seniority_level,
    employmentType: job.employment_type,
    source: job.source,
    experience: job.experience,
    companyUrl: job.company_url,
    companyImageUrl: job.companyImageUrl,
    postedDateTime: job.postedDateTime?.$date
      ? new Date(job.postedDateTime.$date)
      : new Date(),
    minExp: job.min_exp,
    maxExp: job.max_exp,
    country: job.country,
    companyType: job.companytype,
  }));
};

// 3️⃣ Import to DB
const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    const transformedJobs = transformJobs(rawJobs);

    await Job.deleteMany();
    await Job.insertMany(transformedJobs);

    console.log(`✅ ${transformedJobs.length} jobs imported successfully`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Import failed:", error);
    process.exit(1);
  }
};

importData();
