type InfoCard = {
  title: string;
  items: string[];
};

const education: InfoCard = {
  title: "Σπουδές & Εξειδικεύσεις",
  items: [
    "Πτυχίο Ψυχολογίας",
    "Μεταπτυχιακή εξειδίκευση στην Παιδοψυχολογία",
    "Εκπαίδευση στο Play Therapy και στη θεραπευτική χρήση του παιχνιδιού",
    "Συνεχής επιμόρφωση σε θέματα ανάπτυξης, συναισθηματικής ρύθμισης και οικογενειακής υποστήριξης",
  ],
};

const achievements: InfoCard = {
  title: "Επιτεύγματα & Αναγνώριση",
  items: [
    "Πολυετής εμπειρία στη δουλειά με παιδιά, εφήβους και οικογένειες",
    "Συμμετοχή σε σεμινάρια, ομιλίες και επαγγελματικές δράσεις για την ψυχική υγεία",
    "Εφαρμογή δημιουργικών και τεκμηριωμένων θεραπευτικών προσεγγίσεων",
    "Σταθερή συνεργασία με γονείς και σχολικά περιβάλλοντα για πιο ουσιαστική υποστήριξη",
  ],
};

const values = [
  {
    title: "Ασφάλεια",
    text: "Δημιουργεί ένα περιβάλλον όπου το παιδί νιώθει ήρεμο, αποδεκτό και ελεύθερο να εκφραστεί.",
  },
  {
    title: "Σεβασμός",
    text: "Βλέπει κάθε παιδί και οικογένεια ως μοναδική περίπτωση, με τον δικό της ρυθμό και τις δικές της ανάγκες.",
  },
  {
    title: "Πρακτική στήριξη",
    text: "Δίνει ουσιαστικά εργαλεία στους γονείς, ώστε η θεραπευτική διαδικασία να συνεχίζεται και στην καθημερινότητα.",
  },
];

function InfoList({ title, items }: InfoCard) {
  return (
    <div className="rounded-[2rem] bg-white border border-[#cfeeed] p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">{title}</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#01a39c] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BiographyPage() {
  return (
    <main className="min-h-screen bg-[#f6fcfb] pt-36 pb-20 px-6">
      <section className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Σχετικά
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Γνωρίστε καλύτερα την ψυχολόγο πίσω από το θεραπευτικό έργο.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Με επίκεντρο το παιδί, τον έφηβο και την οικογένεια, η προσέγγισή
            της συνδυάζει επιστημονική γνώση, ζεστασιά και δημιουργικότητα, ώστε
            κάθε συνεδρία να γίνεται ένας ασφαλής χώρος εξερεύνησης και
            ενδυνάμωσης.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start mb-8">
          <div className="rounded-[2rem] bg-white border border-[#cfeeed] p-8 md:p-10 shadow-sm">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#eefaf9] px-4 py-2 text-[#017f7a] font-semibold mb-6">
              <span className="h-3 w-3 rounded-full bg-[#01a39c]" />
              Προσωπική διαδρομή
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
              Μια θεραπευτική παρουσία που συνδυάζει επιστήμη και ανθρώπινη
              επαφή.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Η ψυχολόγος εργάζεται με στόχο να προσφέρει ένα σταθερό, ήρεμο και
              υποστηρικτικό πλαίσιο, μέσα στο οποίο το παιδί μπορεί να εκφραστεί
              χωρίς πίεση και να αναγνωρίσει σταδιακά τα συναισθήματά του.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Η προσέγγισή της βασίζεται στη σύνδεση, στην παρατήρηση και στη
              βαθιά κατανόηση των αναγκών κάθε οικογένειας. Με σεβασμό προς το
              ρυθμό του κάθε ανθρώπου, αξιοποιεί τεκμηριωμένες μεθόδους και
              δημιουργικά εργαλεία, όπως το Messy Play, για να δίνει χώρο στην
              εμπειρία, το συναίσθημα και την έκφραση.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Πιστεύει ότι η θεραπεία δεν είναι μόνο συζήτηση. Είναι σχέση,
              ασφάλεια, εμπιστοσύνη και σταδιακή ενδυνάμωση, ώστε το παιδί και η
              οικογένεια να χτίζουν πιο λειτουργικούς τρόπους σύνδεσης και
              επικοινωνίας.
            </p>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-[#dff6f4] to-[#bcebe7] p-8 md:p-10 shadow-sm">
            <div className="w-24 h-24 rounded-3xl bg-white/80 flex items-center justify-center text-5xl shadow-sm mb-6">
              👩‍⚕️
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Εξειδίκευση με ανθρώπινο βλέμμα
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Η δουλειά της εστιάζει ιδιαίτερα στην παιδική και εφηβική ηλικία,
              στην ψυχοσυναισθηματική ανάπτυξη και στη στήριξη των γονέων, ώστε
              η θεραπευτική πορεία να έχει συνέχεια και νόημα και έξω από το
              γραφείο.
            </p>
            <div className="space-y-3 text-sm font-medium text-[#017f7a]">
              <div className="rounded-2xl bg-white/80 px-4 py-3">
                Παιδιά & έφηβοι
              </div>
              <div className="rounded-2xl bg-white/80 px-4 py-3">
                Οικογενειακή υποστήριξη
              </div>
              <div className="rounded-2xl bg-white/80 px-4 py-3">
                Messy Play & δημιουργική έκφραση
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <InfoList {...education} />
          <InfoList {...achievements} />
        </div>

        <div className="rounded-[2rem] bg-white border border-[#cfeeed] p-8 md:p-10 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Τι πρεσβεύει στη θεραπευτική πράξη
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl bg-[#f6fcfb] border border-[#e1f5f3] p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
