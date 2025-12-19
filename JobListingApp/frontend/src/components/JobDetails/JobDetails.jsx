import { MapPin, Briefcase, Calendar, Building2, Clock } from "lucide-react";
import { formatDate } from "../../utils/dateFormatter";

const JobDetails = ({ job }) => {
  //   if (!job) return <p>Select a job</p>;

  return (
    <div className="flex-1  bg-white">
      {job ? (
        <div className="p-6">
          <div className="flex items-start gap-4 pb-6 border-b border-gray-200 ">
            <div className="flex-1 ">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {job.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Building2 className="w-5 h-5" />
                <span className="text-lg">{job.company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{job.location}</span>
              </div>
              {/* <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p>
                  <MapPin className="inline w-4 h-4 mr-1" /> {job.location}
                </p>
                <p>
                  <Briefcase className="inline w-4 h-4 mr-1" />{" "}
                  {job.employmentType}
                </p>
                <p>
                  <Calendar className="inline w-4 h-4 mr-1" />{" "}
                  {formatDate(job.postedDateTime)}
                </p>
                <p>
                  <strong>Experience:</strong> {job.experience}
                </p>
                <p>
                  <strong>Source:</strong> {job.source}
                </p>
              </div> */}
            </div>
            {job.jobLink && (
              <a
                href={job.jobLink}
                target="_blank"
                className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Quick Apply
              </a>
            )}
          </div>

          {/* Job Details */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Job Details
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-medium">Employment Type</span>
                </div>
                <p className="ml-7 text-gray-900">{job.employmentType}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Posted</span>
                </div>
                <p className="ml-7 text-gray-900">
                  {formatDate(job.postedDateTime)}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Experience</span>
                </div>
                <p className="ml-7 text-gray-900">{job.experience}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium">Seniority Level</span>
                </div>
                <p className="ml-7 text-gray-900">{job.seniorityLevel}</p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Qualifications
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                {job.seniorityLevel}
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                {job.experience}
              </span>
              {job.companyType && (
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 capitalize">
                  {job.companyType} Company
                </span>
              )}
              <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 capitalize">
                {job.source}
              </span>
            </div>
          </div>

          {/* Full Job Description */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Full Job Description
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Role Description
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is a full-time role for a {job.title} at {job.company}{" "}
                located in {job.location}. We are seeking a reliable and skilled
                professional to join our team.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                • {job.minExp}-{job.maxExp} years of relevant experience
                <br />• {job.seniorityLevel} position
                <br />
                • Strong technical and communication skills
                <br />• Ability to work in a {job.employmentType.toLowerCase()}{" "}
                capacity
              </p>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Source:</strong> {job.source} •{" "}
                  <strong>Country:</strong> {job.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>Select a job to view details</p>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
