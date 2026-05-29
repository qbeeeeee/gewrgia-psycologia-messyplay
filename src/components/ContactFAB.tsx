import { Link } from "react-router-dom";
import CalendarIcon from "../assets/ContactFAB/calendar.svg?react";
import PhoneIcon from "../assets/ContactFAB/phone.svg?react";

export default function ContactFAB() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 bg-[#01a39c] backdrop-blur-sm text-white px-4 py-2 rounded-full
    flex gap-4 items-center justify-center shadow-xl border border-[#01a39c80]"
    >
      <a
        href="tel:+306972358102"
        className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:bg-white hover:text-[#01a39c] hover:shadow-md hover:-translate-y-0.5"
      >
        <span className="text-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          <PhoneIcon className="w-6 h-6 text-white group-hover:text-[#01a39c] transition-colors duration-300" />
        </span>
        <span className="font-medium text-sm md:text-base">
          +30 697 235 8102
        </span>
      </a>

      <span className="border-l-2 border-white/80 h-7" />

      <Link
        to="/contact"
        className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:bg-white hover:text-[#01a39c] hover:shadow-md hover:-translate-y-0.5"
      >
        <span className="text-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          <CalendarIcon className="w-6 h-6 text-white group-hover:text-[#01a39c] transition-colors duration-300" />
        </span>
        <span className="font-medium text-sm md:text-base">Book a Session</span>
      </Link>
    </div>
  );
}
