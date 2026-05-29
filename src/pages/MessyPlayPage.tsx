import { useState } from "react";
import { Link } from "react-router-dom";
import georgiaMePaidia from "../assets/messyPlay/georgiaMePaidia.jpg";
import georgiaSolo from "../assets/messyPlay/georgiaSolo.jpg";

const benefits = [
  {
    title: "Συναισθηματική έκφραση",
    text: "Το παιδί αποκτά έναν ασφαλή τρόπο να εκφράσει συναισθήματα που δεν μπορεί ακόμη να λεκτικοποιήσει.",
  },
  {
    title: "Αισθητηριακή ανάπτυξη",
    text: "Μέσα από αφή, υφές και υλικά, ενεργοποιούνται οι αισθήσεις και ενισχύεται η ανάπτυξη του νευρικού συστήματος.",
  },
  {
    title: "Αυτοέκφραση & δημιουργικότητα",
    text: "Το παιχνίδι χωρίς κανόνες ή «σωστά αποτελέσματα» ενθαρρύνει την αυθόρμητη δημιουργικότητα.",
  },
  {
    title: "Ρύθμιση του νευρικού συστήματος",
    text: "Οι αισθητηριακές εμπειρίες βοηθούν το παιδί να ηρεμήσει, να κεντραριστεί και να ρυθμίσει τα συναισθήματά του.",
  },
  {
    title: "Ενδυνάμωση αυτοπεποίθησης",
    text: "Το παιδί ηγείται της εμπειρίας, γεγονός που ενισχύει την αίσθηση ελέγχου και αυτοαξίας.",
  },
  {
    title: "Σύνδεση γονέα–παιδιού",
    text: "Οι κοινές συνεδρίες Messy Play ενισχύουν τον δεσμό και την επικοινωνία μεταξύ γονέα και παιδιού.",
  },
];

const steps = [
  {
    number: "01",
    title: "Πρώτη επαφή",
    text: "Μια σύντομη συζήτηση με τους γονείς για να κατανοήσουμε τις ανάγκες και τους στόχους του παιδιού.",
  },
  {
    number: "02",
    title: "Δημιουργία ασφαλούς χώρου",
    text: "Ο χώρος και τα υλικά επιλέγονται με βάση την ηλικία και τις ανάγκες του παιδιού.",
  },
  {
    number: "03",
    title: "Ελεύθερο παιχνίδι",
    text: "Το παιδί εξερευνά ελεύθερα τα υλικά, με την ψυχολόγο να παρατηρεί και να υποστηρίζει.",
  },
  {
    number: "04",
    title: "Επεξεργασία & αναστοχασμός",
    text: "Μετά τη συνεδρία, η ψυχολόγος συζητά με τους γονείς τις παρατηρήσεις και τα επόμενα βήματα.",
  },
];

const faqs = [
  {
    question: "Σε ποιες ηλικίες απευθύνεται το Messy Play;",
    answer:
      "Το Messy Play απευθύνεται κυρίως σε παιδιά ηλικίας 1–8 ετών, αλλά μπορεί να προσαρμοστεί και σε μεγαλύτερα παιδιά ανάλογα με τις ανάγκες τους.",
  },
  {
    question: "Χρειάζεται προετοιμασία από τους γονείς;",
    answer:
      "Δεν απαιτείται ιδιαίτερη προετοιμασία. Συνιστάται απλώς τα παιδιά να φορούν ρούχα που δεν πειράζει να λερωθούν.",
  },
  {
    question: "Πόσο διαρκεί μια συνεδρία;",
    answer:
      "Κάθε συνεδρία διαρκεί περίπου 45–60 λεπτά, ανάλογα με την ηλικία και τις ανάγκες του παιδιού.",
  },
  {
    question: "Μπορεί να συμμετέχει ο γονέας στη συνεδρία;",
    answer:
      "Ναι, σε πολλές περιπτώσεις η συμμετοχή του γονέα είναι επιθυμητή και ωφέλιμη, ειδικά για τα μικρότερα παιδιά.",
  },
];

export default function MessyPlayPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f6fcfb]">
      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-36 pb-20 overflow-hidden bg-amber-50">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#99d9d5] rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#8fd6d1] rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#cdeeed] rounded-full opacity-30 blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between z-10 w-full max-w-[1400px] px-6">
          <div className="flex-shrink-0 size-[260px] md:size-[320px] lg:size-[400px] aspect-square rounded-full overflow-hidden shadow-lg">
            <img
              src={georgiaSolo}
              alt="Γεωργία με παιδιά"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 w-full max-w-6xl text-center mx-auto">
            <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Θεραπευτική προσέγγιση
            </span>

            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6">
                Τι είναι το <span className="text-[#01a39c]">Messy Play;</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Μια αισθητηριακή, δημιουργική και θεραπευτική προσέγγιση που
                δίνει στο παιδί χώρο να εκφραστεί, να εξερευνήσει και να
                αναπτυχθεί μέσα από το παιχνίδι.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#01a39c] hover:bg-[#01928c] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-200"
              >
                Κλείστε θέση
              </Link>
              <a
                href="#what-is"
                className="bg-white hover:bg-[#f2fbfa] text-[#017f7a] border border-[#8fd6d1] font-semibold px-8 py-3 rounded-full shadow-sm transition-colors duration-200"
              >
                Μάθετε περισσότερα
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is Messy Play ── */}
      <section id="what-is" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Ορισμός
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                Παιχνίδι που «λερώνει» και θεραπεύει.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Το Messy Play είναι μια θεραπευτική μέθοδος που αξιοποιεί
                αισθητηριακά υλικά — όπως χρώματα, άμμο, νερό, άργιλο και αλεύρι
                — για να βοηθήσει το παιδί να εκφραστεί, να εξερευνήσει και να
                επεξεργαστεί τα συναισθήματά του μέσα από το σώμα και τις
                αισθήσεις.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Σε αντίθεση με τις παραδοσιακές θεραπευτικές προσεγγίσεις που
                βασίζονται στον λόγο, το Messy Play δίνει προτεραιότητα στην
                εμπειρία — στο άγγιγμα, στο χρώμα, στον ήχο, στην κίνηση. Για τα
                παιδιά που δεν έχουν ακόμη τα λεκτικά εργαλεία να εκφράσουν αυτό
                που νιώθουν, αυτό είναι συχνά η πιο φυσική γλώσσα.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Το θεραπευτικό πλαίσιο διασφαλίζει ότι κάθε εμπειρία γίνεται με
                ασφάλεια, παρατήρηση και υποστήριξη, ώστε κάθε συνεδρία να
                αποτελεί βήμα προς την ανάπτυξη και την ενδυνάμωση.
              </p>
            </div>

            <div className="flex items-center justify-center rounded-[2rem] overflow-hidden shadow-lg h-[650px] w-auto">
              <img
                src={georgiaMePaidia}
                alt="Γεωργία με παιδιά"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-24 px-6 bg-[#f6fcfb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Οφέλη
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              Γιατί το Messy Play κάνει τη διαφορά.
            </h2>
            <p className="text-gray-600 text-lg">
              Επιστημονικά τεκμηριωμένα οφέλη για την ψυχοσυναισθηματική
              ανάπτυξη του παιδιού.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[2rem] bg-white border border-[#cfeeed] p-8 shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#dff6f4] flex items-center justify-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-[#01a39c]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How sessions work ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Διαδικασία
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-8">
                Πώς λειτουργεί μια συνεδρία.
              </h2>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#01a39c] flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="rounded-[2rem] overflow-hidden shadow-lg">
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#dff6f4] to-[#99d9d5] flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#017f7a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12a3 3 0 110-6 3 3 0 010 6z"
                    />
                  </svg>
                </div>
                <span className="text-[#017f7a] font-medium text-sm">
                  Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-24 px-6 bg-[#f6fcfb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Γκαλερί
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              Στιγμές από τις συνεδρίες.
            </h2>
            <p className="text-gray-600 text-lg">
              Εικόνες από τον χώρο, τα υλικά και τη διαδικασία.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Tall image */}
            <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden">
              <div className="w-full h-full min-h-[360px] bg-gradient-to-br from-[#cdeeed] to-[#99d9d5] flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#017f7a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12a3 3 0 110-6 3 3 0 010 6z"
                    />
                  </svg>
                </div>
                <span className="text-[#017f7a] font-medium text-sm">
                  Image 1
                </span>
              </div>
            </div>

            {[2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="rounded-[1.5rem] overflow-hidden">
                <div className="w-full aspect-square bg-gradient-to-br from-[#dff6f4] to-[#b5e8e5] flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#017f7a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12a3 3 0 110-6 3 3 0 010 6z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#017f7a] font-medium text-xs">
                    Image {i}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Συχνές ερωτήσεις
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Έχετε απορίες;
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq) => (
              <button
                type="button"
                key={faq.question}
                onClick={() =>
                  setOpenFaq((current) =>
                    current === faq.question ? null : faq.question,
                  )
                }
                className="w-full rounded-[2rem] bg-white border border-[#cfeeed] p-8 shadow-sm text-left transition-colors duration-200 hover:bg-[#f8fefd]"
                aria-expanded={openFaq === faq.question}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-[#017f7a] text-2xl leading-none transition-transform duration-200 ${
                      openFaq === faq.question ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
                {openFaq === faq.question && (
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
