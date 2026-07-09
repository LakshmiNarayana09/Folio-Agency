import React from "react";

function CTAContent() {
  return (
    <div
      className="
        relative
        lg:absolute
        z-40

        w-full
        max-w-[367px]

        px-6
        py-10
        sm:px-10
        sm:py-12
        lg:px-0
        lg:py-0

        lg:top-[134px]
        lg:right-[90px]

        flex
        flex-col
        justify-center
        lg:justify-between

        h-auto
        lg:h-[360px]
      "
    >
      
      <div>
        <div className="flex items-center gap-4 lg:gap-6">
          <span className="text-white text-sm sm:text-base lg:text-[18px] font-semibold">
            04
          </span>

          <span className="text-white text-sm sm:text-base lg:text-[18px] font-semibold">
            Call to action
          </span>
        </div>

        <h2
          className="
            mt-5
            lg:mt-6
            text-white
            font-bold
            leading-tight
            tracking-tight

            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[64px]
            lg:leading-[72px]
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
          mt-8
          lg:mt-12

          w-full
          sm:w-[220px]
          lg:w-[201px]

          h-12
          sm:h-14
          lg:h-16

          rounded-xl
          bg-white
          text-[#5468E7]
          text-base
          lg:text-[18px]
          font-bold

          hover:bg-[#F4F5FB]
          transition-all
          duration-300
        "
      >
        Download Now
      </button>
    </div>
  );
}

export default CTAContent;