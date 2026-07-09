import React from "react";
import illustration from "../../assets/cta-action/hero.png";
import logo from "../../assets/whoareyou/logo symbol.png";

function CTAImage() {
  return (
    <div className="relative w-full flex items-center justify-center lg:justify-start">
      
      <img
        src={illustration}
        alt="Hero Illustration"
        className="
          w-[260px]
          sm:w-[340px]
          md:w-[450px]
          lg:w-[720px]
          xl:w-[860px]

          h-auto
          object-contain
          select-none
          pointer-events-none

          lg:-ml-16
          xl:-ml-24
        "
      />

      
      <img
        src={logo}
        alt="Logo"
        className="
          absolute

          top-6
          left-6

          sm:top-8
          sm:left-8

          md:top-10
          md:left-10

          lg:top-28
          lg:left-24

          xl:left-32

          w-7
          h-7

          sm:w-8
          sm:h-8

          lg:w-10
          lg:h-10
        "
      />
    </div>
  );
}

export default CTAImage;