import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import menu from "../assets/menu.svg";
import cross from "../assets/cross.svg";
import Phone from "../assets/ContactFAB/phone.svg?react";

gsap.registerPlugin(useGSAP);

type NavLink = {
  label: string;
  href: string;
};

type BookSessionButtonProps = {
  className: string;
  onClick?: () => void;
  currentPath: string;
};

function BookSessionButton({
  className,
  onClick,
  currentPath,
}: BookSessionButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const circleRef = useRef<HTMLSpanElement | null>(null);
  const topTextRef = useRef<HTMLSpanElement | null>(null);
  const bottomTextRef = useRef<HTMLSpanElement | null>(null);
  const hoverTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const isHoveredRef = useRef(false);
  const textGap = 30;

  useGSAP(
    () => {
      const button = buttonRef.current;
      const circle = circleRef.current;
      const topText = topTextRef.current;
      const bottomText = bottomTextRef.current;

      if (!button || !circle || !topText || !bottomText) {
        return;
      }

      const getCircleOffsets = () => {
        const circleSize = button.offsetHeight;

        return {
          startX: 0,
          endX: -circleSize,
        };
      };

      const hoverTimeline = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.2,
          ease: "power1.out",
          overwrite: true,
        },
      });
      hoverTimelineRef.current = hoverTimeline;

      gsap.set(circle, {
        x: getCircleOffsets().startX,
        rotation: 180,
      });
      gsap.set(topText, { y: 0 });
      gsap.set(bottomText, { y: textGap });

      hoverTimeline.to(
        circle,
        {
          x: () => getCircleOffsets().endX,
          duration: 0.34,
          ease: "power2.out",
          rotation: 0,
        },
        0,
      );
      hoverTimeline.to(topText, { y: "-100%" }, 0);
      hoverTimeline.to(bottomText, { y: 0 }, 0.08);

      const handleEnter = () => {
        isHoveredRef.current = true;
        hoverTimeline.invalidate().play();
      };
      const handleLeave = () => {
        isHoveredRef.current = false;
        hoverTimeline.reverse();
      };

      button.addEventListener("pointerenter", handleEnter);
      button.addEventListener("pointerleave", handleLeave);

      return () => {
        hoverTimelineRef.current = null;
        button.removeEventListener("pointerenter", handleEnter);
        button.removeEventListener("pointerleave", handleLeave);
      };
    },
    { scope: buttonRef },
  );

  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;
    const topText = topTextRef.current;
    const bottomText = bottomTextRef.current;

    if (!button || !circle || !topText || !bottomText) {
      return;
    }

    if (isHoveredRef.current) {
      hoverTimelineRef.current?.progress(1, false);
      return;
    }

    gsap.set(circle, {
      x: 0,
      rotation: 180,
    });
    gsap.set(topText, { y: 0 });
    gsap.set(bottomText, { y: textGap });
    hoverTimelineRef.current?.pause(0);
  }, [currentPath]);

  return (
    <Link
      ref={buttonRef}
      to="/contact"
      onClick={onClick}
      className={`group relative isolate inline-flex text-lg items-center justify-center overflow-visible text-white font-semibold px-5 py-2 rounded-full ${className}`}
    >
      <span
        ref={circleRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-0 inline-flex aspect-square h-full items-center justify-center rounded-full bg-[#01a39c] text-base"
      >
        <Phone className="w-auto h-1/2 text-white" />
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] rounded-full bg-[#01a39c] transition-colors duration-200 group-hover:bg-[#019a94]"
      />

      <span className="relative z-10 inline-flex h-[30px] items-center justify-center overflow-hidden leading-none">
        <span
          ref={topTextRef}
          className="relative flex h-full items-center justify-center will-change-transform"
        >
          Book a Session
        </span>
        <span
          ref={bottomTextRef}
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          Book a Session
        </span>
      </span>
    </Link>
  );
}

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
          <BookSessionButton
            className="hidden md:inline-flex"
            currentPath={location.pathname}
          />

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

          <BookSessionButton
            className="mt-2 max-w-max"
            onClick={() => setMenuOpen(false)}
            currentPath={location.pathname}
          />
        </div>
      </div>
    </>
  );
}
