import React from "react";
import OverviewContent from "./OverviewContent";
import hero from "../../assets/overview/hero.png";
import dots from "../../assets/overview/dots.png";

function Overview() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1296px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div
            className="
              relative
              w-[240px]
              h-[240px]
              sm:w-[320px]
              sm:h-[320px]
              md:w-[400px]
              md:h-[400px]
              lg:w-[468px]
              lg:h-[468px]
            "
          >
            
            <div className="absolute inset-0 rounded-full bg-[#C897E4]" />

            
            <img
              src={hero}
              alt="Overview Hero"
              className="
                absolute
                left-0
                top-4
                sm:top-6
                lg:top-[35px]
                w-[260px]
                sm:w-[360px]
                md:w-[450px]
                lg:w-[520px]
                h-auto
                object-contain
                z-10
              "
            />
          </div>

          
          <img
            src={dots}
            alt="Dots"
            className="
              mt-8
              sm:mt-10
              w-24
              sm:w-32
              lg:w-auto
              lg:ml-[170px]
              self-center
              lg:self-start
            "
          />
        </div>

        
        <div className="w-full lg:w-1/2">
          <OverviewContent />
        </div>
      </div>
    </section>
  );
}

export default Overview;