import React from "react";

function FeatureItem({ image, title }) {
  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        items-center
        sm:items-center
        gap-5
        sm:gap-8
        lg:gap-10
        text-center
        sm:text-left
      "
    >
      
      <img
        src={image}
        alt={title}
        className="
          w-16
          h-16
          sm:w-20
          sm:h-20
          lg:w-24
          lg:h-24
          object-contain
          flex-shrink-0
        "
      />

      
      <h3
        className="
          w-full
          max-w-[266px]
          text-[#232340]
          font-bold
          tracking-tight
          leading-7
          sm:leading-8
          text-xl
          sm:text-2xl
          lg:text-[24px]
        "
      >
        {title}
      </h3>
    </div>
  );
}

export default FeatureItem;