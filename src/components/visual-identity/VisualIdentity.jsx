import React from "react";
import VisualHeader from "./VisualHeader";
import Counter from "./Counter";
import FeatureCard from "./FeatureCard";

function VisualIdentity() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[128px] overflow-hidden">
      <div
        className="
          max-w-[1170px]
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          lg:items-start
          gap-12
          lg:gap-20
        "
      >
        
        <div className="w-full max-w-[467px]">
          <VisualHeader />

          <div className="mt-10 lg:mt-16">
            <Counter />
          </div>
        </div>

        
        <div className="w-full flex justify-center lg:justify-end">
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}

export default VisualIdentity;