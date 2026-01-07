import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './navbar-transparent.css';

import GooeyNav from './GooeyNav'; // Importing the GooeyNav component

// Items for the GooeyNav menu
const items = [
  { label: "Home", href: "/" },
  { label: "Reservation", href: "/reservation" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  // Navbar transparente sur toutes les pages
  const isReservationPage = location.pathname === '/reservation';
  const isHomePage = location.pathname === '/';

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 navbar-transparent"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* BAR PROFESSIONNELLE - Transparente sur toutes les pages */}
      <nav 
        className="w-full transition-all duration-300 border-transparent navbar-transparent-nav"
        style={{ 
          backgroundColor: 'transparent',
          background: 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO ÉCOLE — GAUCHE 
          <Link to="/" className="flex items-center gap-3">
            <img
              src={schoolLogo}
              alt="École Alkendi"
              className="h-10 w-auto object-contain"
            />
            <span className="hidden sm:block font-semibold text-gray-900 tracking-tight">
              Alkendi
            </span>
          </Link>*/}

          {/* MENU — DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            <div style={{ height: '60px', position: 'relative', width: 'auto' }}>
              <GooeyNav
                items={items}
                particleCount={8}
                particleDistances={[80, 15]}
                particleR={70}
                animationTime={500}
                timeVariance={150}
                colors={[1, 2, 3, 4]}
              />
            </div>
          </div>

          {/* DROITE — DESKTOP 
          <div className="hidden md:flex items-center gap-4">
            <img
              src={bdeLogo}
              alt="BDE Alkendi"
              className="h-8 w-auto object-contain"
            />
          </div> */}

          {/* BURGER — MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg hover:bg-white/10 transition-all duration-300"
            aria-label="Menu"
          >
            <span className={`h-[3px] w-6 rounded-full transition-all duration-300 ${
              isReservationPage || isHomePage ? 'bg-white' : 'bg-gray-900'
            } ${open ? "rotate-45 translate-y-[8px]" : ""}`} />
            <span className={`h-[3px] w-6 rounded-full transition-all duration-300 ${
              isReservationPage || isHomePage ? 'bg-white' : 'bg-gray-900'
            } ${open ? "opacity-0 scale-0" : ""}`} />
            <span className={`h-[3px] w-6 rounded-full transition-all duration-300 ${
              isReservationPage || isHomePage ? 'bg-white' : 'bg-gray-900'
            } ${open ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* BACKDROP OVERLAY */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed left-0 right-0 top-20 z-40 px-4 transition-all duration-500 ease-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className={`rounded-2xl shadow-2xl border overflow-hidden transition-all duration-300 ${
          isReservationPage || isHomePage
            ? 'bg-gradient-to-br from-slate-900/95 via-purple-900/85 to-slate-900/95 backdrop-blur-xl border-purple-500/20'
            : 'bg-gradient-to-br from-white/98 via-purple-50/80 to-white/98 backdrop-blur-xl border-purple-200/40'
        }`}>
          {/* Decorative subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5" />
          
          <ul className={`relative flex flex-col py-4 text-base font-medium tracking-wide ${
            isReservationPage || isHomePage ? 'text-white' : 'text-gray-900'
          }`}>
            <li className="transition-all duration-200">
              <NavLink 
                onClick={() => setOpen(false)} 
                to="/"
                className={({ isActive }) => `
                  block px-6 py-4 transition-all duration-200
                  ${isActive 
                    ? isReservationPage || isHomePage
                      ? 'bg-purple-500/25 text-white font-semibold border-l-4 border-purple-400'
                      : 'bg-purple-100/80 text-purple-700 font-semibold border-l-4 border-purple-500'
                    : isReservationPage || isHomePage
                      ? 'hover:bg-white/5 text-gray-200 hover:pl-7'
                      : 'hover:bg-purple-50/50 text-gray-700 hover:pl-7'
                  }
                `}
              >
                Accueil
              </NavLink>
            </li>
            <li className="transition-all duration-200">
              <NavLink 
                onClick={() => setOpen(false)} 
                to="/reservation"
                className={({ isActive }) => `
                  block px-6 py-4 transition-all duration-200
                  ${isActive 
                    ? isReservationPage || isHomePage
                      ? 'bg-purple-500/25 text-white font-semibold border-l-4 border-purple-400'
                      : 'bg-purple-100/80 text-purple-700 font-semibold border-l-4 border-purple-500'
                    : isReservationPage || isHomePage
                      ? 'hover:bg-white/5 text-gray-200 hover:pl-7'
                      : 'hover:bg-purple-50/50 text-gray-700 hover:pl-7'
                  }
                `}
              >
                Réservation
              </NavLink>
            </li>
            <li className="transition-all duration-200">
              <NavLink 
                onClick={() => setOpen(false)} 
                to="/about"
                className={({ isActive }) => `
                  block px-6 py-4 transition-all duration-200
                  ${isActive 
                    ? isReservationPage || isHomePage
                      ? 'bg-purple-500/25 text-white font-semibold border-l-4 border-purple-400'
                      : 'bg-purple-100/80 text-purple-700 font-semibold border-l-4 border-purple-500'
                    : isReservationPage || isHomePage
                      ? 'hover:bg-white/5 text-gray-200 hover:pl-7'
                      : 'hover:bg-purple-50/50 text-gray-700 hover:pl-7'
                  }
                `}
              >
                À propos
              </NavLink>
            </li>
            <li className="transition-all duration-200">
              <NavLink 
                onClick={() => setOpen(false)} 
                to="/contact"
                className={({ isActive }) => `
                  block px-6 py-4 transition-all duration-200
                  ${isActive 
                    ? isReservationPage || isHomePage
                      ? 'bg-purple-500/25 text-white font-semibold border-l-4 border-purple-400'
                      : 'bg-purple-100/80 text-purple-700 font-semibold border-l-4 border-purple-500'
                    : isReservationPage || isHomePage
                      ? 'hover:bg-white/5 text-gray-200 hover:pl-7'
                      : 'hover:bg-purple-50/50 text-gray-700 hover:pl-7'
                  }
                `}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
