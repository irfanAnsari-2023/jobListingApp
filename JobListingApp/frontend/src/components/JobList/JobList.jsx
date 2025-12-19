import JobCard from "./JobCard";

const JobList = ({ jobs, selectedJob, onSelect }) => (
  <div className="space-y-3">
    {jobs.map((job) => (
      <JobCard
        key={job._id}
        job={job}
        selected={selectedJob?._id === job._id}
        onClick={() => onSelect(job)}
      />
    ))}
  </div>
);

export default JobList;
