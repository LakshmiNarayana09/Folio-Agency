import React from "react";
import downloadArrow from "../../assets/numbers/download.png";

function StatsCard({
  number,
  title,
  description,
}) {
  return (
    <div className="w-full max-w-[295px] mx-auto lg:mx-0">
      
      <h1
        className="
          text-white
          font-semibold
          leading-none
          text-7xl
          sm:text-8xl
          md:text-9xl
          lg:text-[200px]
        "
      >
        {number}
      </h1>

      
      <h3
        className="
          mt-3
          text-white
          font-bold
          leading-tight
          tracking-tight
          text-xl
          sm:text-2xl
          lg:text-[24px]
        "
      >
        {title}
      </h3>

      
      <div className="mt-6 lg:mt-10 w-full h-px bg-[#606060]" />

      
      <p
        className="
          mt-6
          lg:mt-10
          text-[#8B8B8B]
          text-base
          sm:text-lg
          leading-7
          sm:leading-8
        "
      >
        {description}
      </p>

      
      <button
        className="
          mt-8
          lg:mt-12
          flex
          items-center
          gap-3
          sm:gap-4
          group
        "
      >
        <div
          className="
            w-10
            h-10
            sm:w-12
            sm:h-12
            rounded-full
            bg-[#5468E7]
            flex
            items-center
            justify-center
            transition-transform
            duration-300
            group-hover:scale-105
          "
        >
          <img
            src={downloadArrow}
            alt="Download"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </div>

        <span
          className="
            text-white
            text-base
            sm:text-lg
            font-semibold
          "
        >
          Download
        </span>
      </button>
    </div>
  );
}

export default StatsCard;