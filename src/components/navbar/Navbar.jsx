import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/light-mode.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-semibold transition-colors duration-300 ${
      isActive
        ? "text-[#5468E7]"
        : "text-[#606060] hover:text-[#5468E7]"
    }`;

  return (
    <nav className="sticky top-0 z-50 ">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar */}
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="Folio Logo"
              className="h-8 sm:h-9 lg:h-10 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">

            <li>
              <NavLink to="/" end className={linkClass}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/work" className={linkClass}>
                Work
              </NavLink>
            </li>

            <li>
              <Link
                to="/#services"
                className="font-semibold text-[#606060] hover:text-[#5468E7] transition-colors duration-300"
              >
                Services
              </Link>
            </li>

            <li className="relative">

              <Link
                to="/#jobs"
                className="font-semibold text-[#606060] hover:text-[#5468E7] transition-colors duration-300"
              >
                Jobs
              </Link>

              <span
                className="
                  absolute
                  -top-2
                  -right-4
                  flex
                  items-center
                  justify-center
                  w-5
                  h-5
                  rounded-full
                  bg-[#5468E7]
                  text-white
                  text-[10px]
                  font-semibold
                "
              >
                2
              </span>

            </li>

          </ul>

          {/* Desktop Button */}

          <button
            className="
              hidden
              md:flex
              items-center
              justify-center
              px-6
              lg:px-8
              py-3
              rounded-xl
              bg-[#232340]
              text-white
              font-bold
              transition
              hover:bg-[#5468E7]
            "
          >
            Contact Us
          </button>

          {/* Mobile Toggle */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-lg
              hover:bg-gray-100
              transition
            "
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >

          <div
            className="
              mt-2
              rounded-2xl
              p-5
            "
          >

            <ul className="flex flex-col">

              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${linkClass({ isActive })} block py-3`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/work"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${linkClass({ isActive })} block py-3`
                  }
                >
                  Work
                </NavLink>
              </li>

              <li>
                <Link
                  to="/#services"
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    py-3
                    font-semibold
                    text-[#606060]
                    hover:text-[#5468E7]
                  "
                >
                  Services
                </Link>
              </li>

              <li className="flex items-center justify-between py-3">

                <Link
                  to="/#jobs"
                  onClick={() => setIsOpen(false)}
                  className="
                    font-semibold
                    text-[#606060]
                    hover:text-[#5468E7]
                  "
                >
                  Jobs
                </Link>

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-5
                    h-5
                    rounded-full
                    bg-[#5468E7]
                    text-white
                    text-[10px]
                  "
                >
                  2
                </span>

              </li>

            </ul>

            <button
              className="
                mt-5
                w-full
                py-3
                rounded-xl
                bg-[#232340]
                text-white
                font-bold
                transition
                hover:bg-[#5468E7]
              "
            >
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;