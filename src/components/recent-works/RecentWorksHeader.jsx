import React from "react";
import logo from "../../assets/whoareyou/logo symbol.png";
import arrow from "../../assets/recent-works/right-arrow.png";

function RecentWorksHeader() {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        justify-between
        items-start
        gap-8
        lg:gap-12
      "
    >
      
      <div className="w-full max-w-[600px]">
        
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-6">
          <img
            src={logo}
            alt="Logo"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />

          <span className="text-sm sm:text-base lg:text-[18px] font-semibold text-[#5468E7]">
            04.
          </span>

          <span className="text-sm sm:text-base lg:text-[18px] font-semibold text-[#5468E7]">
            You may also like
          </span>
        </div>

        
        <h2
          className="
            mt-5
            lg:mt-6
            text-[#232340]
            font-bold
            tracking-tight
            leading-tight

            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[64px]
            lg:leading-[72px]
          "
        >
          Recent Works
        </h2>

        
        <p
          className="
            mt-6
            lg:mt-8
            max-w-[370px]
            text-[#8B8B8B]
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
      </div>

      
      <button
        className="
          w-12
          h-12
          sm:w-14
          sm:h-14
          lg:w-16
          lg:h-16

          rounded-full
          bg-[#5468E7]

          flex
          items-center
          justify-center

          hover:bg-[#4457D6]
          transition
          duration-300
          hover:scale-105
        "
      >
        <img
          src={arrow}
          alt="Arrow"
          className="w-5 h-5 lg:w-6 lg:h-6"
        />
      </button>
    </div>
  );
}

export default RecentWorksHeader;