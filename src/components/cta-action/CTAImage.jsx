import React from "react";

import illustration from "../../assets/cta-action/hero.png";
import logo from "../../assets/whoareyou/logo symbol.png";

function CTAImage() {
  return (
    <>
      
      <img
        src={illustration}
        alt="Hero Illustration"
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-0

          w-[700px]
          sm:w-[850px]
          md:w-[1000px]
          lg:w-[1334px]

          h-auto
          object-contain

          lg:left-[-181px]
          lg:translate-x-0
          lg:top-[-116px]

          z-20
          pointer-events-none
          select-none
        "
      />

      
      <img
        src={logo}
        alt="Logo"
        className="
          absolute
          left-6
          top-6

          sm:left-10
          sm:top-10

          md:left-14
          md:top-12

          lg:left-[163px]
          lg:top-[134px]

          w-6
          h-6
          sm:w-8
          sm:h-8
          lg:w-10
          lg:h-10

          z-30
          select-none
        "
      />
    </>
  );
}

export default CTAImage;