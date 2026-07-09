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
      <section className="relative w-full bg-white overflow-hidden">
        <div className="relative max-w-[1497px] mx-auto min-h-screen px-5 sm:px-6 lg:px-8">
          
          <img
            src={path}
            alt=""
            className="
              hidden lg:block
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[642px]
              h-auto
              pointer-events-none
              z-0
            "
          />

          
          <Navbar />

          
          <div
            className="
              relative
              z-20
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-12
              pt-16
              sm:pt-20
              lg:pt-28
            "
          >
            
            <div className="w-full max-w-[467px] order-2 lg:order-1">
              
              <button className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#5468E7] flex items-center justify-center">
                <img src={arrow} alt="Arrow" className="w-5 lg:w-6" />
              </button>

              
              <div className="mt-10 lg:mt-24">
                <div className="inline-flex px-5 py-2 rounded-full bg-[#FFBA79]">
                  <span className="text-white text-xs sm:text-sm font-semibold">
                    Featured Product
                  </span>
                </div>

                <h1
                  className="
                    mt-6
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[110px]
                    font-bold
                    leading-none
                    text-[#232340]
                  "
                >
                  Bento<span className="text-[#5468E7]">.</span>
                </h1>

                <p
                  className="
                    mt-6
                    max-w-[266px]
                    text-lg
                    sm:text-xl
                    lg:text-[24px]
                    font-bold
                    leading-8
                    text-[#232340]
                  "
                >
                  Drag &amp; Drop 3D Visual Design System.
                </p>
              </div>

              
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-14 mt-12 lg:mt-32">
                <div className="flex gap-4">
                  <img
                    src={globe}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                  <p className="max-w-[166px] text-base lg:text-lg font-semibold text-[#5468E7]">
                    Global Digital Agency of Record
                  </p>
                </div>

                <div className="flex gap-4">
                  <img
                    src={briefcase}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                  <p className="max-w-[201px] text-base lg:text-lg font-semibold text-[#5468E7]">
                    5 Years of Digital Marketing Excellence
                  </p>
                </div>
              </div>
            </div>

            
            <div
              className="
                relative
                w-full
                max-w-[900px]
                lg:max-w-[1174px]
                order-1
                lg:order-2
                flex
                justify-center
              "
            >
              
              <div
                className="
                  absolute
                  right-0
                  top-[10%]
                  w-[55%]
                  h-[80%]
                  rounded-3xl
                  lg:rounded-[40px]
                  bg-[#5468E7]
                "
              />

              
              <img
                src={hero}
                alt="Bento Hero"
                className="
                  relative
                  z-10
                  w-full
                  h-auto
                  object-contain
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