import React from "react";

function FeatureCard({ image, title }) {
  return (
    <div
      className="
        w-full
        max-w-[266px]
        mx-auto
        min-h-[260px]
        sm:min-h-[300px]
        lg:h-[360px]
        border
        border-[#D8D8D8]
        rounded-2xl
        lg:rounded-[32px]
        bg-white
        flex
        flex-col
        justify-center
        items-center
        px-6
        py-8
        transition-all
        duration-300
        hover:shadow-lg
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-20
          h-20
          sm:w-24
          sm:h-24
          lg:w-[128px]
          lg:h-[128px]
          object-contain
        "
      />

      <h3
        className="
          mt-6
          lg:mt-10
          text-xl
          sm:text-2xl
          font-bold
          text-[#5468E7]
          leading-7
          sm:leading-8
          text-center
        "
      >
        {title}
      </h3>
    </div>
  );
}

export default FeatureCard;