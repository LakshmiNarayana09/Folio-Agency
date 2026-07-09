import React from "react";
import cta from "../../assets/cta/CTA.png";

function CTA() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1296px] mx-auto">
          <img
            src={cta}
            alt="CTA Banner"
            className="
              w-full
              h-auto
              object-cover
              rounded-2xl
              sm:rounded-3xl
              lg:rounded-[32px]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default CTA;