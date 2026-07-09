import React from "react";
import RecentWorksHeader from "./RecentWorksHeader";
import WorkCard from "./WorkCard";
import workData from "./WorkData";

function RecentWorks() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-[128px] overflow-hidden">
      

      <div className="max-w-[1170px] mx-auto px-5 sm:px-6 lg:px-8">
        
        <RecentWorksHeader />

        
        <div
          className="
            mt-12
            sm:mt-16
            lg:mt-[96px]

            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-8
            lg:gap-10
            xl:gap-[52px]

            justify-items-center
          "
        >
          {workData.map((item) => (
            <WorkCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;