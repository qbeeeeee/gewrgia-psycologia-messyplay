import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactFAB from "./components/ContactFAB";
import PreFooterCTA from "./components/PreFooterCTA";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BiographyPage from "./pages/BiographyPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import MessyPlayPage from "./pages/MessyPlayPage.tsx";
import PsychologyPage from "./pages/PsychologyPage.tsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/messy-play" element={<MessyPlayPage />} />
        <Route path="/psychology" element={<PsychologyPage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <ContactFAB />
      <PreFooterCTA />
      <Footer />
    </>
  );
}
