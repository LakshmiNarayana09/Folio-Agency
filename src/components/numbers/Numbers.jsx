import React from "react";

import NumbersHeader from "./NumbersHeader";
import StatsCard from "./StatsCard";
import Tabs from "./Tabs";
import GallerySlider from "./GallerySlider";
import statsData from "./statsData";
import gradient from "../../assets/numbers/shape.png";

function Numbers() {
  return (
    <section
      className="
        relative
        bg-[#232340]
        overflow-visible
        pt-16
        sm:pt-20
        lg:pt-[168px]
        pb-48
        lg:pb-[420px]
      "
    >
      
      <img
        src={gradient}
        alt=""
        className="
          absolute
          top-0
          right-0
          w-[350px]
          sm:w-[500px]
          lg:w-[802px]
          h-auto
          pointer-events-none
          select-none
        "
      />

      
      <div className="relative z-10 max-w-[1170px] mx-auto px-5 sm:px-6 lg:px-8">
        
        <NumbersHeader />

        
        <div
          className="
            mt-12
            lg:mt-24
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            lg:gap-10
          "
        >
          <StatsCard {...statsData[0]} />

          <StatsCard {...statsData[1]} />
        </div>

        
        <div className="mt-12 lg:mt-20">
          <Tabs />
        </div>
      </div>

      
      <div
        className="
          relative
          z-20
          max-w-[1170px]
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          mt-16
          lg:absolute
          lg:left-1/2
          lg:-translate-x-1/2
          lg:bottom-[-200px]
          lg:mt-0
          w-full
        "
      >
        <GallerySlider />
      </div>
    </section>
  );
}

export default Numbers;