import { useEffect, useRef, useState } from "react";
import fiveStar from "../assets/fiveStar.svg";
import LeftArrow from "../assets/leftArrow.svg?react";
import georgiaPhoto from "../assets/homepage/georgia2.jpg";
import georgiaPhotoAboutMe from "../assets/homepage/georgia1.jpg";

const highlights = [
  {
    title: "Σύγχρονη θεραπευτική προσέγγιση",
    text: "Υποστήριξη παιδιών, εφήβων και οικογενειών με σύγχρονες πρακτικές.",
  },
  {
    title: "Παιδοψυχολογική προσέγγιση",
    text: "Έμφαση στη συναισθηματική ασφάλεια, τη σύνδεση και τη σταθερότητα.",
  },
  {
    title: "Μέθοδοι που ταιριάζουν στο παιδί",
    text: "Χρήση play-based τεχνικών, δημιουργικής έκφρασης και εξατομικευμένης υποστήριξης.",
  },
];

const reviews = [
  {
    quote:
      "Our daughter went from refusing to speak about her feelings to using the sessions as her safe outlet. The transformation has been incredible.",
    name: "Sarah M.",
    role: "Parent of a 6-year-old",
    rating: 5,
  },
  {
    quote:
      "The messy play approach was something we were hesitant about at first, but the progress our son made in just a few sessions was undeniable.",
    name: "James & Laura T.",
    role: "Parents of a 4-year-old",
    rating: 5,
  },
  {
    quote:
      "We finally felt heard and supported. The guidance for us as parents was just as valuable as the work with our child.",
    name: "Maria P.",
    role: "Parent of an 8-year-old",
    rating: 5,
  },
  {
    quote:
      "The sessions helped our son feel safer expressing himself. He started opening up at home in ways we had never seen before.",
    name: "Elena K.",
    role: "Parent of a 7-year-old",
    rating: 5,
  },
  {
    quote:
      "Warm, professional, and very attentive. We appreciated how every session was adapted to our child’s needs.",
    name: "Nikos D.",
    role: "Parent of a 9-year-old",
    rating: 5,
  },
  {
    quote:
      "The difference after a few meetings was noticeable. Our daughter became calmer, more confident, and more willing to participate.",
    name: "Anastasia V.",
    role: "Parent of a 5-year-old",
    rating: 5,
  },
  {
    quote:
      "We felt that the whole family was supported, not just the child. That made a big difference for us.",
    name: "George S.",
    role: "Parent of a 10-year-old",
    rating: 5,
  },
  {
    quote:
      "A calm space, clear guidance, and genuine care. Our child looked forward to every session.",
    name: "Katerina M.",
    role: "Parent of a 6-year-old",
    rating: 5,
  },
  {
    quote:
      "The playful approach helped our son engage without pressure. It felt natural and effective from the start.",
    name: "Dimitris L.",
    role: "Parent of a 3-year-old",
    rating: 5,
  },
  {
    quote:
      "We left each session with practical tools and a clearer understanding of how to support our child at home.",
    name: "Sophia R.",
    role: "Parent of an 11-year-old",
    rating: 5,
  },
];

export default function HomePage() {
  const [activeReview, setActiveReview] = useState(0);
  const reviewTrackRef = useRef<HTMLDivElement | null>(null);
  const reviewViewportRef = useRef<HTMLDivElement | null>(null);

  const goToPreviousReview = () => {
    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    );
  };

  const goToNextReview = () => {
    setActiveReview((current) => (current + 1) % reviews.length);
  };

  const updateReviewTrackPosition = () => {
    const track = reviewTrackRef.current;
    const viewport = reviewViewportRef.current;
    const firstSlide = track?.firstElementChild as HTMLElement | null;

    if (!track || !viewport || !firstSlide) {
      return;
    }

    const slideWidth = firstSlide.getBoundingClientRect().width;
    const gap = 16;
    const viewportWidth = viewport.getBoundingClientRect().width;
    const centeredOffset = (viewportWidth - slideWidth) / 2;
    const translateX = -(activeReview * (slideWidth + gap)) + centeredOffset;

    track.style.transform = `translateX(${translateX}px)`;
  };

  useEffect(() => {
    updateReviewTrackPosition();

    const onResize = () => {
      updateReviewTrackPosition();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [activeReview]);

  return (
    <main className="bg-amber-50 min-h-screen relative">
      {/* ── Hero ── */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 pb-20 overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#99d9d5] rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#8fd6d1] rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#cdeeed] rounded-full opacity-30 blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between z-10 w-full max-w-[1400px] px-6">
          <div className="flex flex-col items-center justify-center">
            <span className="relative z-10 inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Ψυχοθεραπεία · Messy Play
            </span>

            <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight max-w-3xl mb-6">
              Ψυχοθεραπεία & <span className="text-[#01a39c]">Messy Play</span>
            </h1>

            <p className="relative z-10 text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
              Δύο θεραπευτικές προσεγγίσεις, ένα ασφαλές πλαίσιο. Μέσα από την
              ψυχοθεραπεία και το Messy Play, η εμπειρία, η σκέψη και το
              συναίσθημα βρίσκουν τον χώρο να διερευνηθούν με απόλυτο σεβασμό.
            </p>

            <div className="relative z-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#messy-play"
                className="bg-[#01a39c] hover:bg-[#01928c] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-200"
              >
                Messy Play Sessions
              </a>
              <a
                href="#psychology"
                className="bg-[#017f7a] hover:bg-[#016f6b] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-200"
              >
                Psychology Sessions
              </a>
              <a
                href="/contact"
                className="bg-white hover:bg-[#f2fbfa] text-[#017f7a] border border-[#8fd6d1] font-semibold px-8 py-3 rounded-full shadow-sm transition-colors duration-200"
              >
                Book a Session
              </a>
            </div>
          </div>

          <img
            src={georgiaPhoto}
            alt="Georgia"
            className="w-auto h-[600px] rounded-[40px]"
          />
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] bg-gradient-to-br from-[#d7f3f1] to-[#99d9d5] shadow-lg overflow-hidden">
                <img
                  src={georgiaPhotoAboutMe}
                  alt="Η ψυχολόγος"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 text-left shadow-sm">
                  <p className="text-[#017f7a] font-semibold text-sm">
                    Σύγχρονη και ζεστή προσέγγιση
                  </p>
                  <p className="text-gray-600 text-sm">
                    Υποστήριξη με ενσυναίσθηση για παιδιά, εφήβους και
                    οικογένειες.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-[#017f7a] font-semibold text-sm uppercase tracking-wider mb-3">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-5 max-w-3xl">
                Γνωρίσετε καλύτερα την ψυχολόγο.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4 max-w-3xl">
                Είναι ψυχολόγος στην παιδική και εφηβική ηλικία, με ιδιαίτερη
                έμφαση στη συναισθηματική ανάπτυξη, τη συμπεριφορά και τη
                στήριξη της οικογένειας. Μέσα από ένα ήρεμο και προσιτό πλαίσιο,
                βοηθά το παιδί να νιώθει ότι ακούγεται και κατανοείται.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl">
                Η δουλειά της βασίζεται στην εμπιστοσύνη, στην ενσυναίσθηση και
                σε πρακτικά εργαλεία που μπορούν να στηρίξουν το παιδί και τους
                γονείς και στην καθημερινότητά τους. Κάθε συνεργασία ξεκινά με
                σεβασμό, συνέπεια και ξεκάθαρο στόχο: να χτιστεί ένας ασφαλής
                δρόμος ανάπτυξης και ψυχικής ανθεκτικότητας.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-[#f6fcfb] border border-[#e1f5f3] p-5"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-[#dff6f4] text-[#017f7a] px-4 py-2 text-sm font-semibold">
                  Παιδοψυχολογία
                </span>
                <span className="inline-flex items-center rounded-full bg-[#dff6f4] text-[#017f7a] px-4 py-2 text-sm font-semibold">
                  Οικογενειακή στήριξη
                </span>
                <span className="inline-flex items-center rounded-full bg-[#dff6f4] text-[#017f7a] px-4 py-2 text-sm font-semibold">
                  Δημιουργική θεραπευτική προσέγγιση
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-24 px-6 bg-[#f6fcfb]">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="text-[#017f7a] font-semibold text-sm uppercase tracking-wider">
            Reviews
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Words from families
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            A few kind words from parents who trusted the process and saw the
            difference it made for their child.
          </p>
        </div>

        <div
          ref={reviewViewportRef}
          className="max-w-[1400px] w-[90vw] mx-auto"
        >
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              type="button"
              onClick={goToPreviousReview}
              className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white border border-[#cfeeed] text-[#017f7a] shadow-sm hover:bg-[#f2fbfa] transition-colors duration-200"
              aria-label="Previous review"
            >
              <LeftArrow className="w-auto h-4 sm:h-5 mr-0.5" />
            </button>

            <div className="text-sm font-medium text-gray-500 text-center">
              {activeReview + 1} / {reviews.length}
            </div>

            <button
              type="button"
              onClick={goToNextReview}
              className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white border border-[#cfeeed] text-[#017f7a] shadow-sm hover:bg-[#f2fbfa] transition-colors duration-200"
              aria-label="Next review"
            >
              <LeftArrow className="w-auto h-4 sm:h-5 rotate-180 -mr-0.5" />
            </button>
          </div>

          <div className="overflow-hidden rounded-[2rem] px-4 pb-2">
            <div
              ref={reviewTrackRef}
              className="flex gap-4 transition-transform duration-500 ease-out will-change-transform"
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="w-[270px] sm:w-[420px] shrink-0"
                >
                  <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm flex flex-col gap-3 sm:gap-5 text-left border border-[#d9eceb] h-full">
                    <img
                      src={fiveStar}
                      alt={`* * * * *`}
                      className="w-24 h-auto"
                    />

                    <p className="text-gray-600 text-sm sm:text-lg italic leading-relaxed">
                      "{review.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-400">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveReview(index)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  index === activeReview
                    ? "w-8 bg-[#01a39c]"
                    : "w-2.5 bg-[#b8dedd] hover:bg-[#8fd6d1]"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
