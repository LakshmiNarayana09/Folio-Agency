import React from "react";
import logo from "../../assets/whoareyou/logo symbol.png";
import WhatWeDo from "./WhatWeDo";
import Achievement from "./Achievement";
import { Element } from "react-scroll";

function Services() {
  return (
    <Element name="services">
        <section id="services" className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24 scroll-mt-24">
          <div className="relative z-10 max-w-[1170px] mx-auto px-5 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
              
              <div className="flex gap-4 sm:gap-6 lg:gap-10">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-5 h-5 sm:w-6 sm:h-6 mt-2 sm:mt-3 flex-shrink-0"
                />

                <div>
                  <p className="text-xs sm:text-sm font-semibold mb-4 sm:mb-5 tracking-[3px]">
                    <span className="text-[#5468E7]">02.</span>
                    <span className="ml-3 text-[#5468E7]">Who We Are</span>
                  </p>

                  <h2
                    className="
                      text-black
                      font-bold
                      text-3xl
                      sm:text-4xl
                      md:text-5xl
                      lg:text-[64px]
                      leading-tight
                      lg:leading-[72px]
                      tracking-tight
                      max-w-[670px]
                    "
                  >
                    We Make Designs that Lead and Inspire.
                  </h2>
                </div>
              </div>

              
              <div className="flex gap-3 sm:gap-5 lg:justify-end">
                <button
                  className="
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-full
                    border
                    border-black/20
                    text-black
                    transition-all
                    duration-300
                    hover:bg-gray-100
                    hover:scale-105
                  "
                >
                  ←
                </button>

                <button
                  className="
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-full
                    bg-[#556BFF]
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#4055d9]
                  "
                >
                  →
                </button>
              </div>
            </div>

            
            <div className="mt-12 md:mt-16 lg:mt-20">
              <WhatWeDo />
            </div>

            <div className="mt-12 md:mt-16">
              <Achievement />
            </div>
          </div>
        </section>
    </Element>
  );
}

export default Services;