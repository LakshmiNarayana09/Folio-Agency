import React from "react";
import Navbar from "../navbar/Navbar";

import hero from "../../assets/hero.png";
import path from "../../assets/Path.svg";
import downArrow from "../../assets/down-arrow.png";

function HeroHeader() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto">

        {/* Background Shape */}
        <img
          src={path}
          alt=""
          className="
            hidden
            lg:block
            absolute
            top-0
            right-0
            w-[38%]
            xl:w-[42%]
            2xl:w-[45%]
            pointer-events-none
            select-none
            z-0
          "
        />

        <Navbar />

        <div
          className="
            relative
            z-10

            grid
            lg:grid-cols-2

            items-center

            gap-16
            lg:gap-8

            px-5
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-[72px]

            pt-10
            sm:pt-16
            lg:pt-20

            pb-16
            lg:pb-24
          "
        >

          {/* Left Content */}

          <div
            className="
              order-2
              lg:order-1

              text-center
              lg:text-left

              max-w-[620px]
              mx-auto
              lg:mx-0
            "
          >

            <h1
              className="
                font-bold
                text-[#232340]
                tracking-tight
                leading-[1.05]

                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[84px]
                xl:leading-[84px]
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

                max-w-[520px]

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

                h-14

                w-full
                sm:w-[220px]

                rounded-xl

                bg-[#5468E7]

                hover:bg-[#4457d6]

                text-white

                font-bold

                transition-all
                duration-300
              "
            >
              Recent Work
            </button>

            <div
              className="
                hidden
                lg:flex

                items-center

                gap-4

                mt-20
              "
            >
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

          {/* Right Image */}

          <div
            className="
              order-1
              lg:order-2

              relative

              flex

              justify-center
              items-center
            "
          >

            {/* Purple Card */}

            <div
              className="
                absolute

                w-[75%]
                h-[82%]

                rounded-[30px]

                bg-[#C897E4]

                sm:w-[70%]

                lg:w-[70%]
                lg:h-[82%]

                xl:w-[560px]
                xl:h-[710px]

                xl:rounded-[40px]

                right-auto
                lg:right-4
              "
            />

            {/* Hero */}

            <img
              src={hero}
              alt="Hero Illustration"
              className="
                relative

                z-10

                w-full

                max-w-[320px]
                sm:max-w-[450px]
                md:max-w-[560px]
                lg:max-w-[650px]
                xl:max-w-[850px]

                h-auto

                object-contain

                select-none
                pointer-events-none
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHeader;