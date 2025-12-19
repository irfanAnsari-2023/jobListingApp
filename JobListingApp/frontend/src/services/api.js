const API_URL = import.meta.env.VITE_API_URL;

export const fetchJobs = async () => {
  const res = await fetch(`${API_URL}jobs`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  const data = await res.json();
  return data.jobs;
};

export const searchJobsByLocation = async (location) => {
  const res = await fetch(
    `${API_URL}/jobs/search?location=${encodeURIComponent(location)}`
  );
  if (!res.ok) throw new Error("Failed to search jobs");
  const data = await res.json();
  return data.jobs;
};



