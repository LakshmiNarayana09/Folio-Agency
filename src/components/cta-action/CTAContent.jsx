import React from "react";

function CTAContent() {
  return (
    <div
      className="
        w-full
        max-w-[380px]

        text-center
        lg:text-left

        flex
        flex-col
        justify-center

        py-8
        lg:py-0
      "
    >
      
      <div>
        <div
          className="
            flex
            items-center

            justify-center
            lg:justify-start

            gap-4
            mb-6
          "
        >
          <span className="text-white font-semibold text-sm sm:text-base">
            04
          </span>

          <span className="text-white font-semibold text-sm sm:text-base">
            Call to action
          </span>
        </div>

        <h2
          className="
            text-white
            font-bold
            leading-tight

            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[60px]
            xl:text-[64px]

            lg:leading-[68px]
            xl:leading-[72px]
          "
        >
          Auto-Updatable
          <br />
          Global
          <br />
          Styleguide
        </h2>
      </div>

      
      <button
        className="
          mt-10

          w-full
          sm:w-[220px]

          h-14
          lg:h-16

          mx-auto
          lg:mx-0

          rounded-xl
          bg-white

          text-[#5468E7]
          font-bold
          text-base
          lg:text-lg

          transition-all
          duration-300

          hover:bg-[#EEF1FF]
          hover:scale-105
        "
      >
        Download Now
      </button>
    </div>
  );
}

export default CTAContent;