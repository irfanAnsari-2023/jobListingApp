import { MapPin, Clock } from "lucide-react";
import { formatDate } from "../../utils/dateFormatter";

const JobCard = ({ job, selected, onClick }) => (
  <div
    onClick={onClick}
    className={`p-4 border rounded-lg cursor-pointer ${
      selected
        ? "border-blue-500 bg-blue-50 shadow-md"
        : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
    }`}
  >
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-gray-900 truncate">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.company}</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
        <MapPin className="w-4 h-4 " />{" "}
        <span className="truncate">{job.location}</span>
      </div>
      <div className="flex items-center text-xs gap-1 text-gray-400 mt-2">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {formatDate(job.postedDateTime)}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded">{job.experience}</span>
      </div>
    </div>
  </div>
);

export default JobCard;
