import { useState } from "react";
import { Link } from "react-router-dom";
import georgiaPhoto from "../assets/homepage/georgia2.jpg";
import georgiaPhotoAboutMe from "../assets/homepage/georgia1.jpg";

const pillars = [
  {
    title: "Συναισθηματική ρύθμιση",
    text: "Κάθε άτομο μαθαίνει να αναγνωρίζει και να διαχειρίζεται έντονα συναισθήματα με ασφαλή τρόπο.",
  },
  {
    title: "Ενίσχυση αυτοεκτίμησης",
    text: "Καλλιεργείται μια πιο σταθερή εικόνα εαυτού και ενδυναμώνεται η εμπιστοσύνη στις προσωπικές δυνατότητες.",
  },
  {
    title: "Βελτίωση σχέσεων",
    text: "Υποστηρίζεται η επικοινωνία με σύντροφο, οικογένεια, φίλους και εργασιακό περιβάλλον μέσα από πρακτικά εργαλεία.",
  },
  {
    title: "Μείωση άγχους και φόβου",
    text: "Δημιουργείται πλαίσιο σταθερότητας που βοηθά το άτομο να νιώθει περισσότερη ασφάλεια στην καθημερινότητα.",
  },
  {
    title: "Κατανόηση μοτίβων",
    text: "Εξερευνούμε τι κρύβεται πίσω από σκέψεις, συναισθήματα και αντιδράσεις, ώστε η παρέμβαση να είναι ουσιαστική και στοχευμένη.",
  },
  {
    title: "Σταθερή θεραπευτική υποστήριξη",
    text: "Δημιουργείται ένα πλαίσιο συνέπειας που ενισχύει τη θεραπευτική πρόοδο και εκτός συνεδρίας.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Αρχική γνωριμία",
    text: "Συζητάμε τις ανάγκες, το ιστορικό και τους στόχους, ώστε να διαμορφωθεί ένα σαφές πλάνο υποστήριξης.",
  },
  {
    number: "02",
    title: "Αξιολόγηση και σχεδιασμός",
    text: "Γίνεται κλινική εκτίμηση της συναισθηματικής και λειτουργικής εικόνας του ατόμου.",
  },
  {
    number: "03",
    title: "Θεραπευτικές συνεδρίες",
    text: "Οι συνεδρίες προσαρμόζονται στην ηλικία, στις ανάγκες και στην προσωπικότητα κάθε ανθρώπου, με σταθερό και ασφαλές πλαίσιο.",
  },
  {
    number: "04",
    title: "Ανατροφοδότηση και συνέχεια",
    text: "Παρέχεται τακτική ανασκόπηση της πορείας με πρακτικές κατευθύνσεις για την καθημερινότητα.",
  },
];

const supportAreas = [
  "Άγχος, κρίσεις πανικού ή επίμονη ανησυχία",
  "Καταθλιπτική διάθεση και συναισθηματική εξάντληση",
  "Χαμηλή αυτοεκτίμηση και δυσκολία αυτοπεποίθησης",
  "Διαχείριση πένθους, χωρισμού ή σημαντικών αλλαγών",
  "Δυσκολίες στις προσωπικές και επαγγελματικές σχέσεις",
  "Θέματα ορίων, αποφάσεων και προσωπικής εξέλιξης",
];

const faqs = [
  {
    question: "Σε ποιες ηλικίες απευθύνεται η ψυχοθεραπεία;",
    answer:
      "Οι συνεδρίες απευθύνονται σε εφήβους, ενήλικες και μεγαλύτερες ηλικίες. Η προσέγγιση προσαρμόζεται στην ηλικία, στο αίτημα και στις ανάγκες κάθε ανθρώπου.",
  },
  {
    question: "Πόσο συχνά γίνονται οι συνεδρίες;",
    answer:
      "Συνήθως προτείνεται εβδομαδιαία συχνότητα, ώστε να διατηρείται η θεραπευτική συνέχεια και να παρακολουθείται σταθερά η πρόοδος.",
  },
  {
    question: "Μπορεί να συμμετέχει και άλλο πρόσωπο στη διαδικασία;",
    answer:
      "Όταν κρίνεται θεραπευτικά χρήσιμο, μπορεί να ενταχθεί σύντροφος ή μέλος της οικογένειας σε συγκεκριμένες συνεδρίες, πάντα με συναίνεση και σαφή θεραπευτικό στόχο.",
  },
  {
    question: "Πότε θα αρχίσουμε να βλέπουμε αποτέλεσμα;",
    answer:
      "Κάθε περίπτωση έχει διαφορετικό ρυθμό. Συνήθως εμφανίζονται πρώτα σημάδια βελτίωσης μέσα στις πρώτες εβδομάδες συστηματικής συνεργασίας.",
  },
];

export default function PsychologyPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f6fcfb]">
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-36 pb-20 overflow-hidden bg-amber-50">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#99d9d5] rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#8fd6d1] rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#cdeeed] rounded-full opacity-30 blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between z-10 w-full max-w-[1400px] px-6">
          <div className="flex-shrink-0 size-[260px] md:size-[320px] lg:size-[400px] aspect-square rounded-full overflow-hidden shadow-lg">
            <img
              src={georgiaPhoto}
              alt="Υποστήριξη ψυχικής υγείας"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 w-full max-w-6xl text-center mx-auto">
            <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Ψυχοθεραπευτική προσέγγιση
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6">
              Υποστήριξη για κάθε ηλικία με επίκεντρο τη
              <span className="text-[#01a39c]"> σύνδεση και την ασφάλεια</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Η ψυχοθεραπεία προσφέρει έναν σταθερό χώρο όπου έφηβοι, ενήλικες
              και άνθρωποι κάθε ηλικίας μπορούν να εκφράσουν όσα νιώθουν, να
              επεξεργαστούν τις δυσκολίες τους και να χτίσουν νέους, πιο
              λειτουργικούς τρόπους διαχείρισης.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#01a39c] hover:bg-[#01928c] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-200"
              >
                Κλείστε συνεδρία
              </Link>
              <a
                href="#process"
                className="bg-white hover:bg-[#f2fbfa] text-[#017f7a] border border-[#8fd6d1] font-semibold px-8 py-3 rounded-full shadow-sm transition-colors duration-200"
              >
                Δείτε τη διαδικασία
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Τι είναι η ψυχοθεραπεία
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                Ένας χώρος όπου μπορείς να νιώσεις ότι σε καταλαβαίνουν.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Η θεραπευτική διαδικασία βασίζεται στη σχέση εμπιστοσύνης και
                στον σεβασμό του ρυθμού κάθε ανθρώπου. Μέσα από συζήτηση,
                ενσυνείδητη επεξεργασία και κατάλληλες τεχνικές, το άτομο
                δουλεύει εμπειρίες που το δυσκολεύουν.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Η θεραπεία δεν περιορίζεται μόνο στην κατανόηση του προβλήματος,
                αλλά εστιάζει και στην ανάπτυξη πρακτικών δεξιοτήτων για την
                καθημερινότητα, τις σχέσεις και την προσωπική ισορροπία.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Στόχος είναι η ουσιαστική ενδυνάμωση: καλύτερη κατανόηση
                συναισθημάτων, μεγαλύτερη ψυχική ανθεκτικότητα και πιο υγιείς
                σχέσεις.
              </p>
            </div>

            <div className="flex items-center justify-center rounded-[2rem] overflow-hidden shadow-lg h-[650px] w-auto">
              <img
                src={georgiaPhotoAboutMe}
                alt="Θεραπευτικός χώρος"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f6fcfb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Πυλώνες υποστήριξης
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              Τι ενισχύει η θεραπευτική πορεία.
            </h2>
            <p className="text-gray-600 text-lg">
              Εστιασμένη δουλειά με το άτομο για σταθερή, λειτουργική αλλαγή.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[2rem] bg-white border border-[#cfeeed] p-8 shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#dff6f4] flex items-center justify-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-[#01a39c]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Διαδικασία
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-8">
                Πώς οργανώνεται η συνεργασία.
              </h2>
              <div className="space-y-8">
                {processSteps.map((step) => (
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

            <div className="rounded-[2rem] bg-white border border-[#cfeeed] p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Ενδείξεις ότι ίσως χρειάζεται υποστήριξη
              </h3>
              <ul className="space-y-4">
                {supportAreas.map((area) => (
                  <li
                    key={area}
                    className="flex gap-3 text-gray-600 leading-relaxed"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#01a39c] flex-shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f6fcfb]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Συχνές ερωτήσεις
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Απαντήσεις που βοηθούν να ξεκινήσετε
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
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-2xl leading-none text-[#01a39c]">
                    {openFaq === faq.question ? "−" : "+"}
                  </span>
                </div>

                {openFaq === faq.question ? (
                  <p className="text-gray-600 leading-relaxed mt-4">
                    {faq.answer}
                  </p>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
