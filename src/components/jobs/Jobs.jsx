import React from "react";
import JobsHeader from "./JobsHeader";
import JobCard from "./JobCard";
import jobsData from "./jobsData";

function Jobs() {
  return (
    <section className="relative w-full bg-[#F5F5F7] overflow-hidden py-16 md:py-20 lg:py-32">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[34px] items-start">
          
          <div className="w-full">
            <JobsHeader />
          </div>

          
          <div className="w-full">
            <div className="flex flex-col gap-6 sm:gap-8">
              {jobsData.map((job) => (
                <JobCard
                  key={job.id}
                  {...job}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobs;