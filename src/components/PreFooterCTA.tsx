import { Link, useLocation } from "react-router-dom";

export default function PreFooterCTA() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";

  return (
    <section className="py-24 px-6 bg-[#f6fcfb]">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[2rem] bg-[#017f7a] text-white p-10 md:p-14 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Έτοιμοι να ξεκινήσετε;
            </h2>
            <p className="text-white/85 max-w-xl leading-relaxed text-lg">
              Επικοινωνήστε μαζί μας για να κλείσετε την πρώτη σας συνεδρία ή
              για να μάθετε περισσότερα για την προσέγγιση.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            {!isContactPage && (
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-[#f2fbfa] text-[#017f7a] font-semibold px-8 py-3 rounded-full shadow-sm transition-colors duration-200 whitespace-nowrap"
              >
                Κλείστε θέση
              </Link>
            )}
            {!isHomePage && (
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-8 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                {isContactPage ? "Γυρίστε πίσω στην αρχική" : "Αρχική"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
