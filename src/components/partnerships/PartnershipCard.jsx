import React from "react";

function PartnershipCard({
  title,
  description,
  image,
  button,
  bg,
  position,
}) {
  return (
    <div
      className={`
        flex
        ${
          position === "right"
            ? "justify-center lg:justify-start"
            : "justify-center lg:justify-end"
        }
        mb-12
        md:mb-16
        lg:mb-28
      `}
    >
      <div className="w-full max-w-[470px]">
        
        <h3
          className="
            mb-6
            text-2xl
            sm:text-3xl
            lg:text-[28px]
            font-bold
            text-[#232340]
            leading-tight
          "
        >
          {title}
        </h3>

        
        <div
          className="
            relative
            w-full
            h-[260px]
            sm:h-[320px]
            lg:h-[350px]
            rounded-2xl
            lg:rounded-[28px]
            overflow-hidden
          "
          style={{ backgroundColor: bg }}
        >
          <img
            src={image}
            alt={title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-contain
              p-6
              sm:p-8
              lg:p-10
            "
          />

          
          <button
            className="
              absolute
              right-4
              bottom-4
              sm:right-5
              sm:bottom-5
              lg:-right-8
              lg:bottom-10
              w-12
              h-12
              sm:w-14
              sm:h-14
              lg:w-16
              lg:h-16
              rounded-full
              bg-white
              shadow-xl
              flex
              items-center
              justify-center
              transition
              duration-300
              hover:scale-105
            "
          >
            <img
              src={button}
              alt=""
              className="w-4 sm:w-5 lg:w-6"
            />
          </button>
        </div>

        
        <p
          className="
            mt-5
            text-base
            sm:text-lg
            leading-7
            sm:leading-8
            text-[#606060]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default PartnershipCard;