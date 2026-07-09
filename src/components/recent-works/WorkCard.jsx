import React from "react";

function WorkCard({
  image,
  title,
  description,
  background,
  featured,
}) {
  return (
    <div className="w-full max-w-[369px] mx-auto lg:mr-[100px]">
      
      <div
        className="
          relative
          h-[320px]
          sm:h-[380px]
          md:h-[430px]
          lg:h-[480px]
          rounded-2xl
          lg:rounded-[32px]
          overflow-hidden
        "
        style={{ background }}
      >
        
        {featured && (
          <span
            className="
              absolute
              top-4
              left-4
              lg:top-6
              lg:left-6
              bg-[#7C72FF]
              text-white
              text-xs
              px-3
              py-2
              lg:px-4
              rounded-full
              z-20
            "
          >
            Featured Product
          </span>
        )}

        
        <img
          src={image}
          alt={title}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[180px]
            sm:w-[220px]
            md:w-[240px]
            lg:w-[260px]
            h-auto
            object-contain
          "
        />

        
        <button
          className="
            absolute
            right-4
            bottom-4
            lg:right-6
            lg:bottom-6
            w-10
            h-10
            lg:w-12
            lg:h-12
            rounded-full
            border
            border-[#232340]
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:bg-[#232340]
            hover:text-white
          "
        >
          →
        </button>
      </div>

      
      <h3
        className="
          mt-6
          lg:mt-8
          text-2xl
          sm:text-3xl
          lg:text-[32px]
          font-bold
          text-[#232340]
        "
      >
        {title}
      </h3>

      
      <p
        className="
          mt-3
          lg:mt-4
          text-base
          sm:text-lg
          leading-7
          sm:leading-8
          text-[#8B8B8B]
        "
      >
        {description}
      </p>
    </div>
  );
}

export default WorkCard;