import React from "react";
import arrowBlack from "../../assets/job/arrow-black.png";
import arrowWhite from "../../assets/job/arrow-white.png";
import visualIllustration from "../../assets/job/visual.png";

function JobCard({
  title,
  experience,
  openings,
  active,
}) {
  return (
    <div
      className={`
        w-full
        rounded-2xl
        lg:rounded-[32px]
        px-6
        py-6
        sm:px-8
        sm:py-8
        lg:px-16
        lg:py-16
        flex
        flex-col
        sm:flex-row
        justify-between
        items-start
        sm:items-center
        gap-6
        transition-all
        duration-300
        ${
          active
            ? "bg-[#232340]"
            : "bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
        }
      `}
    >
      
      <div className="flex-1">
        <div className="flex items-center flex-wrap gap-3">
          <h3
            className={`
              text-2xl
              sm:text-3xl
              lg:text-[32px]
              font-bold
              leading-tight
              ${
                active ? "text-white" : "text-[#232340]"
              }
            `}
          >
            {title}
          </h3>

          {openings && (
            <div className="w-6 h-6 rounded-full bg-[#5468E7] text-white text-xs font-bold flex items-center justify-center">
              {openings}
            </div>
          )}
        </div>

        <p
          className={`
            mt-3
            text-base
            sm:text-lg
            leading-7
            sm:leading-8
            ${
              active
                ? "text-[#A5A5C0]"
                : "text-[#606060]"
            }
          `}
        >
          {experience}
        </p>

        <button className="mt-6 lg:mt-8">
          <img
            src={active ? arrowWhite : arrowBlack}
            alt="arrow"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
      </div>

      
      {active && (
        <div
          className="
            self-center
            sm:self-auto
            w-24
            h-24
            sm:w-28
            sm:h-28
            lg:w-[132px]
            lg:h-[132px]
            rounded-2xl
            lg:rounded-[24px]
            bg-[#5468E7]
            flex
            items-center
            justify-center
            flex-shrink-0
          "
        >
          <img
            src={visualIllustration}
            alt="Visual Designer"
            className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              lg:w-[92px]
              lg:h-[92px]
              object-contain
            "
          />
        </div>
      )}
    </div>
  );
}

export default JobCard;