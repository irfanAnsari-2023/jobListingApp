import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobLink: {
      type: String,
      trim: true,
    },
    seniorityLevel: {
      type: String,
      trim: true,
    },
    employmentType: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
      trim: true,
    },
    companyUrl: {
      type: String,
      trim: true,
    },
    companyImageUrl: {
      type: String,
      trim: true,
    },
    postedDateTime: {
      type: Date,
      default: Date.now,
    },
    minExp: {
      type: Number,
      min: 0,
    },
    maxExp: {
      type: Number,
      min: 0,
    },
    country: {
      type: String,
      trim: true,
    },
    companyType: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const Job = mongoose.model("job", jobSchema);
export default Job;
