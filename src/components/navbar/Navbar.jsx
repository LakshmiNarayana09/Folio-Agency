import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
    <nav className="relative z-50 w-full bg-white">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="h-16 md:h-20 flex items-center justify-between">

          
          <NavLink to="/">
            <img
              src={logo}
              alt="Folio Logo"
              className="h-8 md:h-10"
            />
          </NavLink>

          
          <ul className="hidden md:flex items-center gap-6 lg:gap-12">
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
              <NavLink to="/services" className={linkClass}>
                Services
              </NavLink>
            </li>

            <li className="relative">
              <NavLink to="/jobs" className={linkClass}>
                Jobs
              </NavLink>

              <span className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-[#5468E7] text-white text-xs flex items-center justify-center">
                2
              </span>
            </li>
          </ul>

          
          <button className="hidden md:block bg-[#232340] text-white font-bold rounded-xl px-6 lg:px-8 py-3 hover:bg-[#5468E7] transition">
            Contact Us
          </button>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-xl mt-2 p-6">
            <ul className="flex flex-col gap-6">

              <li>
                <NavLink
                  to="/"
                  end
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/work"
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <NavLink
                  to="/jobs"
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  Jobs
                </NavLink>

                <span className="w-5 h-5 rounded-full bg-[#5468E7] text-white text-xs flex items-center justify-center">
                  2
                </span>
              </li>

              <button className="w-full bg-[#232340] text-white font-bold rounded-xl py-3">
                Contact Us
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;