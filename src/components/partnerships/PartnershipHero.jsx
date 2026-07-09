import React from "react";
import logo from "../../assets/whoareyou/logo symbol.png";
import heroImage from "../../assets/partnership/hero.png";
import arrow from "../../assets/partnership/arrowBlue.png";

function PartnershipHero() {
  return (
    <>
      
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
        
        <div className="max-w-[650px]">
          <div className="flex items-center gap-3 sm:gap-5">
            <img
              src={logo}
              alt="logo"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />

            <span className="text-[#5468E7] font-semibold text-sm sm:text-base lg:text-lg">
              04.
            </span>

            <span className="text-[#232340] font-semibold text-sm sm:text-base lg:text-lg">
              Famous Projects
            </span>
          </div>

          <h2
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[84px]
              font-bold
              leading-tight
              lg:leading-none
              tracking-tight
              text-[#232340]
            "
          >
            Our Partnerships
          </h2>

          <p
            className="
              mt-6
              max-w-[467px]
              text-[#606060]
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
            "
          >
            Agency is a full-service agency, busy designing and building
            beautiful digital products, brands, and experiences.
          </p>
        </div>

        
        <div className="lg:self-start">
          <button
            className="
              w-full
              sm:w-[180px]
              h-12
              sm:h-14
              lg:h-16
              rounded-xl
              bg-[#5468E7]
              text-white
              font-bold
              transition
              duration-300
              hover:bg-[#4055d9]
            "
          >
            Contact Us
          </button>
        </div>
      </div>

      
      <div className="mt-16 md:mt-20 lg:mt-28 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        
        <div className="w-full lg:max-w-[467px] text-center lg:text-left">
          <div className="inline-flex px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-[#C8B8FF] text-white font-semibold text-xs sm:text-sm">
            Featured Product
          </div>

          <h3
            className="
              mt-6
              text-3xl
              sm:text-4xl
              lg:text-[40px]
              font-bold
              leading-tight
              lg:leading-[48px]
            "
          >
            Sapiens: The Free Character Builder App.
          </h3>

          <p
            className="
              mt-6
              max-w-[320px]
              lg:max-w-[205px]
              mx-auto
              lg:mx-0
              text-[#606060]
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
            "
          >
            Beautiful library of modular, component-based character
            illustrations free to use for all your personal or client projects.
          </p>

          <button
            className="
              mt-8
              w-14
              h-14
              sm:w-16
              sm:h-16
              lg:w-[72px]
              lg:h-[72px]
              rounded-full
              bg-[#232340]
              text-white
              font-bold
              transition
              duration-300
              hover:scale-105
            "
          >
            View
          </button>
        </div>

        
        <div className="relative w-full flex justify-center">
          <img
            src={heroImage}
            alt="Partnership Hero"
            className="w-full max-w-[670px] rounded-2xl lg:rounded-3xl object-cover"
          />

          <button
            className="
              absolute
              right-2
              sm:right-4
              lg:-right-8
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              sm:w-16
              sm:h-16
              lg:w-[72px]
              lg:h-[72px]
              rounded-full
              bg-[#5468E7]
              flex
              items-center
              justify-center
              shadow-lg
              transition
              duration-300
              hover:scale-105
            "
          >
            <img
              src={arrow}
              alt="Arrow"
              className="w-4 sm:w-5 lg:w-6"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default PartnershipHero;