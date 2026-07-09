import React from "react";
import logo from "../../assets/whoareyou/logo symbol.png";
import arrow from "../../assets/job/purple-arrow.png";

function JobsHeader() {
  return (
    <div className="relative w-full max-w-[468px] mx-auto lg:mx-0">
      
      <div className="hidden lg:block absolute -top-16 left-16 w-24 h-24 border border-[#C7C4F5] rounded-full opacity-70"></div>

      <div className="hidden lg:block absolute top-10 left-60 w-32 h-32 border border-[#C7C4F5] rounded-full opacity-60"></div>

      
      <svg
        className="hidden lg:block absolute -top-10 left-24 w-[420px] h-[520px] pointer-events-none"
        viewBox="0 0 420 520"
        fill="none"
      >
        <path
          d="M110 0C260 30 260 150 160 220C50 300 130 400 320 520"
          stroke="#D7D2FF"
          strokeWidth="1.5"
        />
      </svg>

      
      <div className="flex items-center gap-3 sm:gap-5">
        <img
          src={logo}
          alt="logo"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />

        <span className="text-[#5468E7] text-sm sm:text-base lg:text-lg font-semibold">
          05.
        </span>

        <span className="text-[#5468E7] text-sm sm:text-base lg:text-lg font-semibold">
          We are hiring
        </span>
      </div>

      
      <h2
        className="
          mt-5
          text-[#232340]
          font-bold
          tracking-tight
          leading-none
          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-[110px]
        "
      >
        Jobs
      </h2>

      
      <p
        className="
          mt-6
          lg:mt-10
          max-w-[367px]
          text-[#606060]
          text-base
          sm:text-lg
          leading-7
          sm:leading-8
        "
      >
        Agency is a full-service agency, busy designing and
        building beautiful digital products, brands, and
        experiences.
      </p>

      
      <div className="flex items-center gap-4 mt-8 lg:mt-14">
        <div
          className="
            w-10
            h-10
            sm:w-12
            sm:h-12
            rounded-full
            bg-[#C897F4]
            flex
            items-center
            justify-center
          "
        >
          <img
            src={arrow}
            alt="arrow"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </div>

        <div>
          <p className="text-[#8B8B8B] text-base sm:text-lg font-semibold leading-6">
            Available
          </p>

          <p className="text-[#8B8B8B] text-base sm:text-lg font-semibold leading-6">
            jobs
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobsHeader;