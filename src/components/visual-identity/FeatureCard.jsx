import React from "react";

import FeatureItem from "./FeatureItem";
import featureData from "./featureData";

function FeatureCard() {
  return (
    <div
      className="
        w-full
        max-w-[568px]
        bg-white
        rounded-2xl
        lg:rounded-[40px]
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        lg:shadow-[0_40px_100px_rgba(0,0,0,0.08)]
        px-6
        py-8
        sm:px-10
        sm:py-10
        lg:px-20
        lg:py-20
      "
    >
      
      <div className="space-y-8 sm:space-y-10 lg:space-y-14">
        {featureData.map((item) => (
          <FeatureItem
            key={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>

      
      <button
        className="
          mt-10
          sm:mt-12
          lg:mt-16
          w-full
          lg:max-w-[408px]
          h-14
          lg:h-16
          rounded-xl
          bg-[#5468E7]
          text-white
          text-base
          lg:text-[18px]
          font-bold
          hover:bg-[#4457D6]
          transition-all
          duration-300
        "
      >
        Contact Us
      </button>
    </div>
  );
}

export default FeatureCard;