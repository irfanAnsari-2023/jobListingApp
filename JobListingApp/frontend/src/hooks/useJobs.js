import { useEffect, useState } from "react";
import { fetchJobs, searchJobsByLocation } from "../services/api";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const data = await fetchJobs();
      setJobs(data.data?.jobs || data);
      setSelectedJob(data.data?.jobs?.[0] || data[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const searchJobs = async (location) => {
    try {
      setLoading(true);

      setError(null); // ⭐ RESET error

      // ⭐ IMPORTANT CHANGE
      if (!location || location.trim() === "") {
        // Empty input → load all jobs
        await loadJobs();
        return;
      }

      const data = await searchJobsByLocation(location);
      setJobs(data.data?.jobs || data);
      setSelectedJob(data.data?.jobs?.[0] || data[0] || null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return {
    jobs,
    selectedJob,
    setSelectedJob,
    loading,
    error,
    searchJobs,
  };
};
