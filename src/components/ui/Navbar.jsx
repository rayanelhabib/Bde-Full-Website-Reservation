import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled || !isHome ? "bg-white shadow-sm" : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className={`
            font-semibold tracking-tight
            text-base md:text-lg
            ${scrolled || !isHome ? "text-gray-900" : "text-white"}
          `}
        >
          Brand
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`
              text-sm font-medium transition
              ${scrolled || !isHome
                ? "text-gray-700 hover:text-gray-900"
                : "text-white/90 hover:text-white"}
            `}
          >
            Home
          </Link>

          <Link
            to="/reservation"
            className={`
              text-sm font-medium transition
              ${scrolled || !isHome
                ? "text-gray-700 hover:text-gray-900"
                : "text-white/90 hover:text-white"}
            `}
          >
            Reservation
          </Link>

          {/* CTA */}
          <Link
            to="/reservation"
            className={`
              inline-flex items-center justify-center
              h-10 px-6 rounded-full
              text-sm font-medium transition
              ${scrolled || !isHome
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-700 hover:bg-gray-100"}
            `}
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
