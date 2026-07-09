import React from "react";
import CTAImage from "./CTAImage";
import CTAContent from "./CTAContent";

function CTAAction() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            lg:rounded-[40px]
            bg-[#5468E7]

            flex
            flex-col
            lg:flex-row

            min-h-[700px]
            md:min-h-[820px]
            lg:min-h-[624px]
          "
        >
          
          <div
            className="
              hidden
              lg:block
              absolute
              right-0
              top-0
              w-[260px]
              h-full
              bg-[#F5B8D8]
              z-0
            "
            style={{
              clipPath: "polygon(35% 0%,100% 0%,100% 100%,0% 100%)",
            }}
          />

          
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_55%)]
              z-10
            "
          />

          
          <div
            className="
              relative
              z-20

              flex
              items-center
              justify-center

              w-full
              lg:w-[60%]

              pt-10
              md:pt-16
              lg:pt-0
            "
          >
            <CTAImage />
          </div>

          
          <div
            className="
              relative
              z-30

              w-full
              lg:w-[40%]

              flex
              items-center
              justify-center

              px-6
              sm:px-10
              lg:px-12

              pb-10
              lg:pb-0
            "
          >
            <CTAContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAAction;