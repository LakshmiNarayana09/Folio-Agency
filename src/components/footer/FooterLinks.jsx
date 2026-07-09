import React from "react";
import { footerLinks } from "./footerData";

function FooterLinks() {
  return (
    <nav
      className="
        mt-10
        lg:mt-12
        flex
        flex-wrap
        justify-center
        items-center
        gap-x-6
        gap-y-4
        sm:gap-x-8
        lg:gap-x-14
      "
    >
      {footerLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={`
            text-base
            sm:text-lg
            font-semibold
            transition-colors
            duration-300
            ${
              link.active
                ? "text-[#5468E7]"
                : "text-[#8B8B8B] hover:text-[#5468E7]"
            }
          `}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
}

export default FooterLinks;