import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch(location)}
            placeholder="Search by location"
            className="w-full pl-9 py-2 border border-gray-300  rounded-lg focus:outline-none foucs:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => onSearch(location)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
      {/* <div className="mt-2 text-sm text-gray-600">
            {filteredJobs.length} jobs found
          </div> */}
    </div>
  );
};

export default SearchBar;
