import { useJobs } from "./hooks/useJobs";
import JobList from "./components/JobList/JobList";
import JobDetails from "./components/JobDetails/JobDetails";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "./components/common/Loading";
import ErrorMessage from "./components/common/ErrorMessage";

const App = () => {
  const { jobs, selectedJob, setSelectedJob, loading, error, searchJobs } =
    useJobs();

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-2/5 bg-white border-r border-gray-200 overflow-y-auto px-4">
        <SearchBar onSearch={searchJobs} />
        <div className="mt-4">
          {loading && <Loading />}
          {error && <ErrorMessage message={error} />}
          {!loading && (
            <JobList
              jobs={jobs}
              selectedJob={selectedJob}
              onSelect={setSelectedJob}
            />
          )}
        </div>
      </div>

      <div className="flex-1">
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
};

export default App;
