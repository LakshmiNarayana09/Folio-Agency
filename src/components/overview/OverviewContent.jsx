import React from "react";
import FeatureCard from "./FeatureCard";
import featureData from "./featureData";

function OverviewContent() {
  return (
    <div className="w-full max-w-[568px] mx-auto lg:mx-0">
      

      <div className="flex items-center gap-3 sm:gap-6">
        <span className="text-[#8B8B8B] text-sm sm:text-base lg:text-lg font-semibold">
          01.
        </span>

        <span className="text-[#5468E7] text-sm sm:text-base lg:text-lg font-semibold">
          Overview
        </span>
      </div>

      

      <h2
        className="
          mt-5
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
        The First Fully Editable,
        <br />
        3D Visual
        <br />
        Design System.
      </h2>

      

      <p
        className="
          mt-8
          lg:mt-12
          text-[#8B8B8B]
          text-base
          sm:text-lg
          leading-7
          sm:leading-8
        "
      >
        Effortlessly combine different elements to create compelling
        compositions that will surely help you tell a better story for your
        landing pages, websites, portfolios, presentations, and more in just a
        matter of minutes.
      </p>

      

      <p
        className="
          mt-8
          lg:mt-10
          text-xl
          sm:text-2xl
          leading-8
          font-bold
          text-[#232340]
        "
      >
        🔥 The number of applications and use cases is nearly endless.
      </p>

      

      <div
        className="
          mt-12
          lg:mt-20
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-5
          sm:gap-6
        "
      >
        {featureData.map((item) => (
          <FeatureCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default OverviewContent;