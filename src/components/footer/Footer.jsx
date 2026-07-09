import React from "react";
import footerLogo from "../../assets/light-mode.svg";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="relative w-full bg-white overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-32 relative z-10">
        
        <div className="flex justify-center">
          <img
            src={footerLogo}
            alt="Folio"
            className="
              w-36
              sm:w-44
              lg:w-[191px]
              h-auto
            "
          />
        </div>

        
        <p
          className="
            max-w-[565px]
            mx-auto
            mt-8
            lg:mt-12
            text-center
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

        
        <div className="mt-10 lg:mt-14">
          <FooterLinks />
        </div>

        
        <div
          className="
            mt-10
            lg:mt-12
            pt-6
            lg:pt-8
            border-t
            border-[#E7E7F2]
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          <p className="text-sm font-semibold text-[#ADADAD] text-center sm:text-left">
            © 2020, UI8 LLC.
          </p>

          <SocialLinks />
        </div>
      </div>

      
      <div
        className="
          hidden
          lg:block
          absolute
          bottom-[140px]
          right-[160px]
          w-16
          h-16
          rounded-full
          border
          border-[#D8D9F5]
          opacity-70
        "
      ></div>

      
      <svg
        className="
          hidden
          lg:block
          absolute
          right-0
          bottom-0
          w-[420px]
          h-[260px]
          pointer-events-none
        "
        viewBox="0 0 420 260"
        fill="none"
      >
        <path
          d="M0 40C120 80 150 170 60 220C-20 260 60 300 220 220C320 170 340 80 420 20"
          stroke="#D7D8F6"
          strokeWidth="1.5"
        />
      </svg>
    </footer>
  );
}

export default Footer;