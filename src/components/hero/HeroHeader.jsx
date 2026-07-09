import React from "react";
import Navbar from "../navbar/Navbar";

import hero from "../../assets/hero.svg";
import path from "../../assets/Path.svg";
import downArrow from "../../assets/down-arrow.png";

function HeroHeader() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto min-h-screen">
        
        <img
          src={path}
          alt=""
          className="hidden lg:block absolute top-0 right-0 w-[45%] max-w-[650px] pointer-events-none z-0"
        />

        <Navbar />

        
        <div
          className="
            relative z-10
            flex flex-col
            lg:flex-row
            items-center
            justify-center
            lg:justify-between
            gap-12 lg:gap-0
            px-5
            sm:px-8
            md:px-12
            lg:px-[72px]
            pt-10
            md:pt-16
            lg:pt-24
            pb-16
          "
        >
          
          <div
            className="
              w-full
              md:w-[80%]
              lg:w-[42%]
              text-center
              lg:text-left
              mx-auto
            "
          >
            <h1
              className="
                font-bold
                text-[#232340]
                tracking-[-1px]
                leading-tight
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[84px]
                lg:leading-[84px]
              "
            >
              Stand Out
              <br />
              from The
              <br />
              Crowd.
            </h1>

            <p
              className="
                mt-6
                text-[#606060]
                text-base
                sm:text-lg
                leading-7
                max-w-lg
                mx-auto
                lg:mx-0
              "
            >
              Agency is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
            </p>

            <button
              className="
                mt-8
                bg-[#5468E7]
                hover:bg-[#4457d6]
                text-white
                font-bold
                rounded-xl
                w-full
                sm:w-[220px]
                h-14
                transition
              "
            >
              Recent Work
            </button>

            
            <div className="hidden lg:flex items-center gap-4 mt-20">
              <img
                src={downArrow}
                alt="Scroll Down"
                className="w-12 h-12"
              />

              <p className="text-[#8B8B8B] text-lg">
                Scroll down
              </p>
            </div>
          </div>

          
            <div
                className="
                    relative
                    w-full
                    md:w-[80%]
                    lg:w-[58%]
                    flex
                    justify-center
                    items-center
                    mx-auto
                    mt-10
                    lg:mt-0
                "
            >
            
                <div
                    className="
                    absolute
                    inset-0
                    m-auto
                    w-[70%]
                    h-[85%]
                    bg-[#C897E4]
                    rounded-[30px]
                    lg:w-[570px]
                    lg:h-[722px]
                    lg:rounded-[40px]
                    lg:right-6
                    lg:top-0
                    lg:left-auto
                    lg:m-0
                    "
                ></div>

            
                <img
                    src={hero}
                    alt="Hero Illustration"
                    className="
                    relative
                    z-10
                    w-full
                    max-w-[750px]
                    lg:max-w-[924px]
                    h-auto
                    mx-auto
                    "
                />
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHeader;