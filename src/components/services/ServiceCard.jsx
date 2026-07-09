import React from "react";

const ServiceCard = ({
  icon,
  title,
  description,
  active = false,
}) => {
  return (
    <div
      className={`
        group
        relative
        w-full
        max-w-full
        sm:max-w-[320px]
        lg:max-w-[293px]
        mx-auto
        min-h-[340px]
        sm:min-h-[400px]
        lg:h-[480px]
        rounded-[24px]
        sm:rounded-[32px]
        lg:rounded-[40px]
        px-6
        sm:px-8
        py-8
        sm:py-10
        lg:py-12
        flex
        flex-col
        items-center
        justify-start
        text-center
        transition-all
        duration-300
        cursor-pointer
        ${
          active
            ? "bg-[#5468E7] text-white shadow-2xl lg:-translate-y-4"
            : "bg-white text-[#232340] shadow-lg hover:bg-[#5468E7] hover:text-white lg:hover:-translate-y-4"
        }
      `}
    >
      
      <div className="mt-2 sm:mt-6 lg:mt-10">
        <img
          src={icon}
          alt={title}
          className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            lg:w-32
            lg:h-32
            object-contain
          "
        />
      </div>

      
      <h3
        className="
          mt-6
          sm:mt-8
          text-xl
          sm:text-2xl
          font-bold
        "
      >
        {title}
      </h3>

      
      <p
        className={`
          mt-4
          sm:mt-5
          text-sm
          sm:text-base
          leading-6
          sm:leading-7
          ${
            active
              ? "text-white/80"
              : "text-[#8B8B8B] group-hover:text-white/80"
          }
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;