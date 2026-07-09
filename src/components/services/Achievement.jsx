import React from "react";
import logo from "../../assets/whoareyou/logo symbol.png";
import phone from "../../assets/services/phone1.png";

function Achievement() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 max-w-[568px] text-center lg:text-left">
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 lg:mb-10">
              <img src={logo} alt="logo" className="w-5 h-5 sm:w-6 sm:h-6" />

              <div className="flex items-center text-xs sm:text-sm font-semibold">
                <span className="text-[#8B8B8B]">03.</span>

                <span className="ml-4 text-[#232340]">
                  Achievement
                </span>
              </div>
            </div>

            
            <h2
              className="
                text-[#232340]
                font-bold
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-[32px]
                leading-snug
                lg:leading-[42px]
                tracking-tight
              "
            >
              A design team building a curated marketplace for UI designers.
            </h2>

            
            <h1
              className="
                mt-8
                lg:mt-14
                text-[#5468E7]
                font-bold
                text-[90px]
                sm:text-[120px]
                md:text-[150px]
                lg:text-[200px]
                leading-none
              "
            >
              68
            </h1>

            
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
              <span className="text-2xl">😎</span>

              <p className="text-[#232340] text-lg sm:text-xl font-bold">
                Successful Projects
              </p>
            </div>
          </div>

          
          <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[350px] sm:min-h-[450px] lg:min-h-[690px]">
            
            <div
              className="
                absolute
                w-[220px]
                h-[220px]
                sm:w-[320px]
                sm:h-[320px]
                lg:w-[400px]
                lg:h-[400px]
                rounded-full
                bg-[#F7D7E8]
                bottom-10
                lg:bottom-auto
                lg:left-8
                lg:top-[190px]
              "
            ></div>

            
            <img
              src={phone}
              alt="phone"
              className="
                relative
                z-10
                w-[220px]
                sm:w-[300px]
                md:w-[360px]
                lg:w-[495px]
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;