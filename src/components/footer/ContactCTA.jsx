import React from "react";
import logo from "../../assets/whoareyou/logo symbol.png";
import messageIcon from "../../assets/footer/message.png";
import arrow from "../../assets/footer/arrow-white.png";

function ContactCTA() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:pt-32 lg:pb-0">
      <div className="relative max-w-[1296px] mx-auto bg-[#5468E7] rounded-2xl lg:rounded-[40px] overflow-hidden px-6 sm:px-8 lg:px-[74px] py-12 lg:py-[100px]">
        
        <div className="hidden lg:block absolute top-0 left-14 w-[82px] h-[82px] border border-[#8B99FF] rounded-full opacity-40"></div>

        <div className="hidden lg:block absolute top-7 left-24 w-[48px] h-[48px] border border-[#8B99FF] rounded-full opacity-40"></div>

        
        <svg
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
          viewBox="0 0 1296 1024"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M120 40C330 120 250 280 140 420C50 540 220 700 520 760C770 810 1000 890 1180 1020"
            stroke="#BFC7FF"
            strokeWidth="2"
          />
        </svg>

        
        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Logo"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />

          <div className="flex items-center gap-3 mt-6 lg:mt-10">
            <span className="text-lg">👋</span>

            <p className="text-white text-base sm:text-lg font-semibold">
              Say hello
            </p>
          </div>

          <h2
            className="
              mt-8
              max-w-[568px]
              text-white
              font-bold
              text-2xl
              sm:text-3xl
              lg:text-[32px]
              leading-snug
              lg:leading-[40px]
            "
          >
            A design team building a curated marketplace for UI designers.
          </h2>
        </div>

        
        <div className="relative z-10 my-12 lg:my-20 border-t border-[#7384F0]"></div>

        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h2
              className="
                text-white
                font-bold
                text-3xl
                sm:text-4xl
                lg:text-[64px]
                leading-tight
                lg:leading-[72px]
                tracking-tight
                max-w-[367px]
                mx-auto
                lg:mx-0
              "
            >
              Let’s talk about your next project
            </h2>
          </div>

          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <img
                src={messageIcon}
                alt="Message"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[103px] lg:h-[103px] mx-auto sm:mx-0"
              />

              <h3
                className="
                  mt-6
                  text-white
                  font-bold
                  text-2xl
                  sm:text-3xl
                  lg:text-[32px]
                  leading-tight
                  lg:leading-[40px]
                  max-w-[300px]
                "
              >
                Invest in your designs today!
              </h3>
            </div>

            <button
              className="
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-full
                border
                border-white
                flex
                items-center
                justify-center
                transition
                duration-300
                hover:bg-white
              "
            >
              <img
                src={arrow}
                alt="Arrow"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;