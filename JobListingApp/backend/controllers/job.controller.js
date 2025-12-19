import Job from "../models/job.model.js";

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedDateTime: -1 });
    res.status(200).json({
      message: "Data Fetched Successfully!!!",
      jobs: jobs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobsByLocations = async (req, res) => {
  try {
    const { location } = req.query;
    if (!location)
      return res.status(400).json({
        message: "Location parameter is required!!!",
      });
    // Case-insensitive search for location
    const jobs = await Job.find({
      $or: [
        { location: { $regex: location, $options: "i" } },
        { country: { $regex: location, $options: "i" } },
      ],
    }).sort({ postedDateTime: -1 });

    res.status(200).json({
      message: "Jobs by Location fetched!!!",
      jobs: jobs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found!!" });
    res.status(200).json({
      message: "Job By Id fetched!!",
      job: job,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
