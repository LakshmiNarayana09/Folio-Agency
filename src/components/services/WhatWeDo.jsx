import React from "react";
import ServiceCard from "./ServiceCard";

import strategyIcon from "../../assets/services/strategy.png";
import brandingIcon from "../../assets/services/branding.png";
import interactiveIcon from "../../assets/services/interactive.png";
import communicateIcon from "../../assets/services/communicate.png";

const services = [
  {
    icon: strategyIcon,
    title: "Strategy",
  },
  {
    icon: brandingIcon,
    title: "Branding",
    active: true,
  },
  {
    icon: interactiveIcon,
    title: "Interactive",
  },
  {
    icon: communicateIcon,
    title: "Communicate",
  },
];

function WhatWeDo() {
  return (
    <section className="w-full mt-12 md:mt-16 lg:mt-24">
      <div className="max-w-[1170px] mx-auto">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              active={service.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;