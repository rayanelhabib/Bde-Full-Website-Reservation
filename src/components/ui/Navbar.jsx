import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import schoolLogo from "@/assets/alkendi-school.png";
import bdeLogo from "@/assets/alkendi-school.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* BAR TRANSPARENTE */}
      <nav className="w-full bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO ÉCOLE — GAUCHE */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={schoolLogo}
              alt="École Alkendi"
              className="h-10 w-auto object-contain"
            />
            <span className="hidden sm:block font-semibold text-gray-900 tracking-tight">
              Alkendi
            </span>
          </Link>

          {/* MENU — DESKTOP */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            <li>
              <NavLink to="/" className="hover:text-[#1DA1F2] transition">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservation" className="hover:text-[#1DA1F2] transition">
                Réservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#1DA1F2] transition">
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[#1DA1F2] transition">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* DROITE — DESKTOP */}
          <div className="hidden md:flex items-center gap-4">
            <img
              src={bdeLogo}
              alt="BDE Alkendi"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* BURGER — MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            aria-label="Menu"
          >
            <span className={`h-[2px] w-5 rounded-full bg-gray-900 transition-all ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`h-[2px] w-5 rounded-full bg-gray-900 transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 rounded-full bg-gray-900 transition-all ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-40 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-gray-200">
          <ul className="flex flex-col gap-6 px-6 py-8 text-base font-medium text-gray-900">

            <li>
              <NavLink onClick={() => setOpen(false)} to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpen(false)} to="/reservation">Réservation</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpen(false)} to="/about">À propos</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
            </li>

            {/* LOGO BDE — MOBILE */}
            <li className="pt-6 border-t border-gray-200 flex items-center justify-center">
              <img
                src={bdeLogo}
                alt="BDE Alkendi"
                className="h-9 w-auto object-contain"
              />
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
