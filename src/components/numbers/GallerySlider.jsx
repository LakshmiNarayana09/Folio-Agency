import React from "react";

import leftArrow from "../../assets/numbers/left-arrow.png";
import rightArrow from "../../assets/numbers/right-arrow.png";
import galleryImage from "../../assets/numbers/gallery.png";

function GallerySlider() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
      
      <button
        className="
          order-2
          lg:order-1
          w-12
          h-12
          sm:w-14
          sm:h-14
          lg:w-16
          lg:h-16
          rounded-full
          bg-[#5468E7]
          flex
          items-center
          justify-center
          transition
          duration-300
          hover:scale-105
        "
      >
        <img
          src={leftArrow}
          alt="Previous"
          className="w-5 h-5 lg:w-6 lg:h-6"
        />
      </button>

      
      <div className="order-1 lg:order-2 w-full">
        <img
          src={galleryImage}
          alt="Gallery"
          className="
            w-full
            max-w-[968px]
            h-auto
            rounded-2xl
            lg:rounded-[40px]
            object-cover
            shadow-[0_20px_40px_rgba(0,0,0,0.15)]
            lg:shadow-[0_40px_80px_rgba(0,0,0,0.2)]
          "
        />
      </div>

      
      <button
        className="
          order-3
          w-12
          h-12
          sm:w-14
          sm:h-14
          lg:w-16
          lg:h-16
          rounded-full
          bg-[#5468E7]
          flex
          items-center
          justify-center
          transition
          duration-300
          hover:scale-105
        "
      >
        <img
          src={rightArrow}
          alt="Next"
          className="w-5 h-5 lg:w-6 lg:h-6"
        />
      </button>
    </div>
  );
}

export default GallerySlider;