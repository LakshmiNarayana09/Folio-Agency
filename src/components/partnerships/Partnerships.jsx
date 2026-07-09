import React from "react";
import PartnershipHero from "./PartnershipHero";
import PartnershipCard from "./PartnershipCard";
import partnershipData from "./data";

function Partnerships() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-6 lg:px-8">
        
        <PartnershipHero />

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-[140px]">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
            {partnershipData.map((item) => (
              <PartnershipCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnerships;