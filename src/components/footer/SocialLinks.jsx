import React from "react";
import { socialLinks } from "./footerData";

function SocialLinks() {
  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-4
        sm:gap-6
        lg:gap-8
      "
    >
      <span
        className="
          text-[#5468E7]
          text-sm
          font-semibold
        "
      >
        Follow us
      </span>

      <div className="flex items-center gap-4 sm:gap-5">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="
              p-2
              rounded-full
              transition-all
              duration-300
              hover:scale-110
            "
          >
            <img
              src={item.icon}
              alt={item.alt}
              className="
                w-4
                h-4
                sm:w-5
                sm:h-5
                opacity-70
                hover:opacity-100
              "
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;