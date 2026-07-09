import React from "react";
import Navbar from "../components/navbar/Navbar";
import ContactCTA from '../components/footer/ContactCTA'
import Footer from '../components/footer/Footer'

import arrow from "../assets/caseStudy/arrow.png";
import hero from "../assets/caseStudy/hero.png";
import globe from "../assets/caseStudy/globe.png";
import briefcase from "../assets/caseStudy/briefcase.png";
import path from '../assets/Path.svg'
import Overview from "../components/overview/Overview";
import Numbers from "../components/numbers/Numbers";
import VisualIdentity from "../components/visual-identity/VisualIdentity";
import CTAAction from "../components/cta-action/CTAAction";
import RecentWorks from "../components/recent-works/RecentWorks";

function CaseStudy() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative max-w-[1497px] mx-auto">

          
          <img
            src={path}
            alt=""
            className="
              hidden lg:block
              absolute
              top-0
              left-1/2
              -translate-x-1/2

              w-[380px]
              xl:w-[520px]
              2xl:w-[642px]

              h-auto

              pointer-events-none
              select-none

              z-0
            "
          />

          <Navbar />

          <div
            className="
              relative
              z-20

              grid
              lg:grid-cols-2

              items-center

              gap-16
              lg:gap-8

              px-5
              sm:px-8
              md:px-12
              lg:px-16
              xl:px-20

              pt-12
              sm:pt-16
              lg:pt-24

              pb-16
              lg:pb-24
            "
          >

            

            <div
              className="
                order-2
                lg:order-1

                max-w-[520px]

                mx-auto
                lg:mx-0

                text-center
                lg:text-left
              "
            >

              

              <button
                className="
                  w-12
                  h-12

                  sm:w-14
                  sm:h-14

                  lg:w-16
                  lg:h-16

                  rounded-full

                  bg-[#5468E7]

                  flex
                  items-center
                  justify-center

                  mx-auto
                  lg:mx-0

                  transition-all
                  duration-300

                  hover:scale-105
                "
              >
                <img
                  src={arrow}
                  alt="Arrow"
                  className="w-5 lg:w-6"
                />
              </button>

              

              <div className="mt-10 lg:mt-24">

                <div
                  className="
                    inline-flex

                    px-5
                    py-2

                    rounded-full

                    bg-[#FFBA79]
                  "
                >
                  <span
                    className="
                      text-white

                      text-xs
                      sm:text-sm

                      font-semibold
                    "
                  >
                    Featured Product
                  </span>
                </div>

                <h1
                  className="
                    mt-6

                    font-bold

                    leading-none

                    text-[#232340]

                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-8xl
                    xl:text-[110px]
                  "
                >
                  Bento
                  <span className="text-[#5468E7]">.</span>
                </h1>

                <p
                  className="
                    mt-6

                    max-w-[280px]

                    mx-auto
                    lg:mx-0

                    text-lg
                    sm:text-xl
                    lg:text-2xl

                    font-bold

                    leading-8

                    text-[#232340]
                  "
                >
                  Drag & Drop 3D Visual Design System.
                </p>

              </div>

              

              <div
                className="
                  mt-12
                  lg:mt-24

                  grid
                  sm:grid-cols-2

                  gap-8
                  lg:gap-12
                "
              >

                <div className="flex gap-4 justify-center lg:justify-start">
                  <img
                    src={globe}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />

                  <p
                    className="
                      max-w-[170px]

                      text-base
                      lg:text-lg

                      font-semibold

                      text-[#5468E7]
                    "
                  >
                    Global Digital Agency of Record
                  </p>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <img
                    src={briefcase}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />

                  <p
                    className="
                      max-w-[210px]

                      text-base
                      lg:text-lg

                      font-semibold

                      text-[#5468E7]
                    "
                  >
                    5 Years of Digital Marketing Excellence
                  </p>
                </div>

              </div>

            </div>

            

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

              
              <div
                className="
                  absolute

                  w-[72%]
                  h-[82%]

                  rounded-[28px]

                  bg-[#5468E7]

                  left-1/2
                  -translate-x-1/2

                  lg:left-auto
                  lg:translate-x-0
                  lg:right-6

                  xl:w-[620px]
                  xl:h-[760px]

                  xl:rounded-[40px]
                "
              />

              

              <img
                src={hero}
                alt="Bento Hero"
                className="
                  relative

                  z-10

                  w-full

                  max-w-[320px]
                  sm:max-w-[450px]
                  md:max-w-[580px]
                  lg:max-w-[700px]
                  xl:max-w-[900px]
                  2xl:max-w-[1174px]

                  h-auto

                  object-contain

                  pointer-events-none
                  select-none
                "
              />

            </div>

          </div>

        </div>
      </section>


      <Overview />

      <Numbers />

      <div
        className="
          relative
          z-20

          -mt-16
          sm:-mt-20
          md:-mt-28
          lg:-mt-40
          xl:-mt-[220px]

          pt-28
          sm:pt-36
          md:pt-48
          lg:pt-64
          xl:pt-[500px]
        "
      >
        <VisualIdentity />

      </div>
      
      <CTAAction />

      <RecentWorks />

      <ContactCTA />
      
      <Footer />

    </>
  );
}

export default CaseStudy;