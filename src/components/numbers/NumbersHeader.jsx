import React from "react";
import logo from "../../assets/whoareyou/logo symbol.png";

function NumbersHeader() {
  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        items-start
        gap-6
        lg:gap-44
      "
    >
      
      <img
        src={logo}
        alt="Logo"
        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
      />

      
      <div className="w-full">
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#8B8B8B]">
            02.
          </span>

          <span className="text-sm sm:text-base lg:text-lg font-semibold text-white">
            Folio Agency
          </span>
        </div>

        <h2
          className="
            mt-4
            sm:mt-6
            text-white
            font-bold
            tracking-tight
            leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[64px]
            lg:leading-[72px]
          "
        >
          By the Numbers.
        </h2>
      </div>
    </div>
  );
}

export default NumbersHeader;