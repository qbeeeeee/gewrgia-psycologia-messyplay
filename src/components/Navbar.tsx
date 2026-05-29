import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import menu from "../assets/menu.svg";
import cross from "../assets/cross.svg";

type NavLink = {
  label: string;
  href: string;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks: NavLink[] = [
    { label: "Αρχική", href: "/" },
    { label: "Messy Play", href: "/messy-play" },
    { label: "Ψυχολογία", href: "/psychology" },
    { label: "Βιογραφικό", href: "/biography" },
    { label: "Επικοινωνία", href: "/contact" },
  ];

  const getLinkClassName = (link: NavLink) => {
    const baseClass =
      "inline-block font-medium transition-colors duration-200 rounded-full px-4 py-2";
    const inactiveClass = "text-gray-600 hover:text-[#01a39c]";

    return `${baseClass} ${
      location.pathname === link.href
        ? "bg-[#01a39c] text-white"
        : inactiveClass
    }`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-20 h-20" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className={getLinkClassName(link)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-[#01a39c] hover:bg-[#019a94] text-white font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            Book a Session
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <img src={menu} alt="Open menu" className="w-8 h-auto" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[70] transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/45"
        />

        <div
          className={`absolute flex flex-col justify-between top-0 right-0 h-[100dvh] w-[82vw] max-w-[360px] bg-white border-l border-gray-100 shadow-2xl transform transition-transform duration-300 ease-out pt-14 px-6 pb-8 z-[80] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <img src={cross} alt="Close menu" className="w-9 h-auto" />
          </button>

          <ul className="flex flex-col items-start gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={getLinkClassName(link)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block max-w-max mt-2 bg-[#01a39c] hover:bg-[#01928c] text-white font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </>
  );
}
