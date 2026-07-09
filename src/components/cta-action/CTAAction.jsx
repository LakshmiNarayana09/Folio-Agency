import React from "react";
import CTAImage from "./CTAImage";
import CTAContent from "./CTAContent";

function CTAAction() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[128px]">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            w-full
            max-w-[1169px]
            min-h-[500px]
            lg:h-[624px]
            mx-auto
            rounded-3xl
            lg:rounded-[40px]
            overflow-hidden
            bg-[#5468E7]
          "
        >
          
          <div
            className="
              absolute
              hidden
              md:block
              right-[-20px]
              top-[20px]
              w-[180px]
              lg:w-[260px]
              h-[420px]
              lg:h-[520px]
              bg-[#F5B8D8]
              rounded-[24px]
              z-0
            "
            style={{
              clipPath: "polygon(28% 0%,100% 0%,100% 100%,0% 100%)",
            }}
          />

          
          <div
            className="
              absolute
              inset-0
              rounded-3xl
              lg:rounded-[40px]
              bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_55%)]
              z-10
            "
          />

          
          <div className="absolute inset-0 z-20">
            <CTAImage />
          </div>

          
          <div className="relative z-30 h-full">
            <CTAContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAAction;