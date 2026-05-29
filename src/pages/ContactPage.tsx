import CalendarIcon from "../assets/ContactFAB/calendar.svg?react";
import PhoneIcon from "../assets/ContactFAB/phone.svg?react";
import EmailIcon from "../assets/ContactFAB/email.svg?react";
import ExternalLinkIcon from "../assets/ContactFAB/externalLink.svg?react";
import instagramIcon from "../assets/ContactFAB/instagram.svg";
import facebookIcon from "../assets/ContactFAB/facebook.svg";
import locationIcon from "../assets/ContactFAB/location.svg";
import googlemapsIcon from "../assets/ContactFAB/googlemaps.svg";

const contactDetails = {
  phoneLabel: "+30 697 235 8102",
  phoneHref: "tel:+306972358102",
  emailLabel: "georgia@email.com",
  emailHref: "mailto:georgia@email.com",
  doctorAnytimeHref: "https://www.doctoranytime.gr/",
  facebookLabel: "Facebook",
  facebookHref: "https://www.facebook.com/",
  instagramLabel: "Instagram",
  instagramHref: "https://www.instagram.com/",
  addressLabel: "Address",
  addressText: "Address hereeeeeee",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f6fcfb] pt-36 pb-20 px-6">
      <section className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block bg-[#dff6f4] text-[#017f7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Contact Me
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Let&apos;s find the right way to connect.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
            Use the option that feels easiest for you. You can call directly,
            send an email, or book through Doctoranytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <a
            href={contactDetails.phoneHref}
            className="group rounded-3xl bg-white p-8 shadow-sm border border-[#cfeeed] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#dff6f4] text-[#01a39c] flex items-center justify-center mb-6">
              <PhoneIcon className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Phone</h2>
            <p className="text-gray-500 mb-5">Call or text directly.</p>
            <p className="text-lg font-semibold text-[#017f7a] group-hover:text-[#01a39c] transition-colors duration-300">
              {contactDetails.phoneLabel}
            </p>
          </a>

          <a
            href={contactDetails.emailHref}
            className="group rounded-3xl bg-white p-8 shadow-sm border border-[#cfeeed] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#dff6f4] text-[#01a39c] flex items-center justify-center mb-6">
              <EmailIcon className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-500 mb-5">Send a message any time.</p>
            <p className="text-lg font-semibold text-[#017f7a] group-hover:text-[#01a39c] transition-colors duration-300 break-all">
              {contactDetails.emailLabel}
            </p>
          </a>

          <a
            href={contactDetails.doctorAnytimeHref}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl bg-white p-8 shadow-sm border border-[#cfeeed] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#dff6f4] text-[#01a39c] flex items-center justify-center mb-6">
              <CalendarIcon className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Doctoranytime
            </h2>
            <p className="text-gray-500 mb-5">Open the booking profile.</p>
            <span className="inline-flex items-center gap-2 text-lg font-semibold text-[#017f7a] group-hover:text-[#01a39c] transition-colors duration-300">
              Visit profile
              <ExternalLinkIcon className="w-5 h-5" />
            </span>
          </a>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm border border-[#cfeeed]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Socials & Location
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={contactDetails.facebookHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#d9eceb] p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#dff6f4] text-[#01a39c] flex items-center justify-center">
                  <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-[#017f7a] uppercase tracking-wider">
                  {contactDetails.facebookLabel}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                facebook.com/yourpage
              </p>
            </a>

            <a
              href={contactDetails.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#d9eceb] p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#dff6f4] text-[#01a39c] flex items-center justify-center">
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </div>
                <p className="text-sm font-semibold text-[#017f7a] uppercase tracking-wider">
                  {contactDetails.instagramLabel}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                instagram.com/yourprofile
              </p>
            </a>

            <div className="rounded-2xl border border-[#d9eceb] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#dff6f4] text-[#01a39c] flex items-center justify-center">
                  <img src={locationIcon} alt="Location" className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-[#017f7a] uppercase tracking-wider">
                  {contactDetails.addressLabel}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {contactDetails.addressText}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl overflow-hidden border border-[#d9eceb] bg-white shadow-sm">
            <div className="px-5 py-4 border-b border-[#edf4f3] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#dff6f4] text-[#01a39c] flex items-center justify-center">
                <img
                  src={googlemapsIcon}
                  alt="Google Maps"
                  className="w-5 h-5"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#017f7a] uppercase tracking-wider">
                  Google Maps
                </p>
                <p className="text-gray-600 text-sm">
                  {contactDetails.addressText}
                </p>
              </div>
            </div>

            <iframe
              title="Google Maps location"
              src="https://www.google.com/maps?q=Athens%20Greece&z=13&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
