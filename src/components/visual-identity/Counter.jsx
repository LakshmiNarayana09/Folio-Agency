import React from "react";

function Counter() {
  return (
    <div className="mt-8 lg:mt-10">
      
      <div className="flex items-start">
        <span
          className="
            text-[#5468E7]
            font-semibold
            leading-none
            text-7xl
            sm:text-8xl
            md:text-9xl
            lg:text-[200px]
          "
        >
          80
        </span>

        <span
          className="
            ml-1
            sm:ml-2
            mt-1
            sm:mt-2
            text-[#5468E7]
            font-semibold
            leading-none
            text-3xl
            sm:text-5xl
            lg:text-[64px]
          "
        >
          +
        </span>
      </div>

      
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 -mt-1 lg:-mt-2">
        <h3
          className="
            text-[#232340]
            font-bold
            leading-tight
            text-xl
            sm:text-2xl
            lg:text-[24px]
          "
        >
          UI Elements
        </h3>

        <span
          className="
            text-[#5468E7]
            leading-none
            text-2xl
            sm:text-3xl
            lg:text-[40px]
          "
        >
          —
        </span>
      </div>
    </div>
  );
}

export default Counter;