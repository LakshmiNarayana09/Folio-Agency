import React from "react";
import logo from "../../assets/whoareyou/logo symbol.png";

function VisualHeader() {
  return (
    <div className="w-full">
      
      <div className="flex items-center gap-3 sm:gap-5 lg:gap-6">
        <img
          src={logo}
          alt="Logo"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />

        <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#8B8B8B]">
          03.
        </span>

        <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#5468E7]">
          Visual Identity
        </span>
      </div>

      
      <h2
        className="
          mt-5
          sm:mt-6
          max-w-[367px]
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
        Evolving the look & feel.
      </h2>

      
      <p
        className="
          mt-8
          lg:mt-12
          max-w-[367px]
          text-[#8B8B8B]
          text-base
          sm:text-lg
          leading-7
          sm:leading-8
        "
      >
        Agency is a full-service agency, busy designing and
        building beautiful digital products, brands,
        and experiences.
      </p>
    </div>
  );
}

export default VisualHeader;