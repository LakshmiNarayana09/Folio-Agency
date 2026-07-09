import React from "react";
import bgShape from "../../assets/whoareyou/background-shape.svg";
import logo from "../../assets/whoareyou/logo symbol.png";
import hero from "../../assets/whoareyou/who-logo.png";

function WhoWeAre() {
  const years = ["2017", "2018", "2019", "2020", "2021"];

  return (
    <section className="relative overflow-hidden bg-[#232345] py-16 md:py-20 lg:py-24">
      
      <img
        src={bgShape}
        alt=""
        className="absolute top-0 right-0 w-[350px] sm:w-[500px] lg:w-[800px] h-auto opacity-70 z-0"
      />

      <div className="relative z-10 max-w-[1170px] mx-auto px-5 sm:px-6 lg:px-8">
        

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex gap-4 sm:gap-6 lg:gap-10">
            <img
              src={logo}
              alt="Logo"
              className="w-5 h-5 sm:w-6 sm:h-6 mt-2 sm:mt-3 flex-shrink-0"
            />

            <div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5 tracking-[3px]">
                01 &nbsp;&nbsp; Who We Are
              </p>

              <h2
                className="
                  text-white
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
                border-white/20
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
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
              "
            >
              →
            </button>
          </div>
        </div>

        

        <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col lg:flex-row gap-10 lg:gap-12">
          

          <div className="relative w-[120px] hidden lg:block">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-white/20"></div>

            <div className="flex flex-col justify-between h-[520px]">
              {years.map((year) => (
                <div key={year} className="flex items-center gap-4">
                  <span
                    className={`text-sm ${
                      year === "2020"
                        ? "text-white font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    {year}
                  </span>

                  {year === "2020" && (
                    <>
                      <div className="w-16 h-px bg-white"></div>
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          

          <div className="flex-1 flex justify-center">
            <img
              src={hero}
              alt="Who We Are"
              className="w-full max-w-full lg:max-w-[970px] object-contain"
            />
          </div>
        </div>

        

        <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-14">
          

          <div className="max-w-[470px] text-center lg:text-left">
            <div className="w-[2px] h-16 bg-pink-400 mb-8 mx-auto lg:mx-0"></div>

            <h3
              className="
                text-white
                font-bold
                text-2xl
                sm:text-3xl
                leading-snug
              "
            >
              A design team building a curated marketplace for UI designers.
            </h3>

            <p
              className="
                mt-6
                text-gray-400
                text-base
                sm:text-lg
                leading-7
                sm:leading-8
              "
            >
              4,404 curated design resources to energize your creative workflow.
              We're a growing family of 334,531 designers and makers from around
              the world.
            </p>

            <button
              className="
                mt-8
                bg-[#556BFF]
                px-8
                sm:px-10
                py-3
                sm:py-5
                rounded-lg
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-blue-500
              "
            >
              Contact Us
            </button>
          </div>

          

          <div className="text-center">
            <h2
              className="
                text-[80px]
                sm:text-[120px]
                md:text-[160px]
                lg:text-[200px]
                font-semibold
                leading-none
                text-white
              "
            >
              28
            </h2>

            <p
              className="
                text-white
                text-xl
                sm:text-2xl
                font-bold
                mt-2
              "
            >
              Biggest Branding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;