import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, MessageCircle } from "lucide-react";

/* Optional contact info. Empty = buttons hidden automatically */
const COMPANY = {
  phone: "", // e.g. "+2547XXXXXXXX"
  whatsapp: "", // e.g. "2547XXXXXXXX"
};

export default function FleetPage() {
  const phoneHref = COMPANY.phone ? `tel:${COMPANY.phone.replace(/\s/g, "")}` : "";
  const waHref = COMPANY.whatsapp ? `https://wa.me/${COMPANY.whatsapp}` : "";

  const fleet = [
    {
      id: "falcon-7x",
      name: "Falcon",
      bannerTitle: "THE FALCON",
      bannerImg: "/airphoto-Dassault Falcon 7X.jpg",
      interiorImg: "/airphoto-Dassault Falcon 7X.jpg",
      description:
        "The Falcon is a preferred choice for many clients due to its exceptional comfort, performance, and efficiency. Its cabin features a curtain separating the aft and main cabins, with a bathroom located in the aft. All executive seats include fold-out tables, and there is a conference table for four guests. Additionally, three seats and the rear divan can convert into beds, making it ideal for longer trips.",
      specs: [
        "Manufacture Date: 2005",
        "Max. Endurance: 8 hours non-stop",
        "Passenger Seats: 13",
        "Executive Seats: 10",
        "Divan: 03",
        "Cabin Height: 6 ft 2 in",
        "Cabin Width: 7 ft 8 in",
        "Baggage Volume: 13 – 15 Bags",
      ],
    },
    {
      id: "gulfstream-g450",
      name: "Gulfstream G450",
      bannerTitle: "Gulfstream G450",
      bannerImg: "/Boeing Business Jet (BBJ).jpg",
      interiorImg: "/Boeing Business Jet (BBJ).jpg",
      description:
        "The Gulfstream G450 offers an expansive cabin, accommodating up to 16 passengers across 3 living areas. Oval windows provide ample light, while sound-canceling technology ensures a quiet environment for productivity. Powered by twin Rolls-Royce Turbojet engines, it achieves speeds exceeding 600 mph, with advanced PlaneView avionics in the cockpit.",
      specs: [
        "Category: Large Jet",
        "Cabin Volume: 1525 cubic feet",
        "Baggage Volume: 169 cubic feet",
        "Max Speed: 605 mph",
        "Range: 4948 miles",
        "Fuel Burn: 400 gph",
      ],
    },
    {
      id: "learjet-31a",
      name: "Learjet 31A",
      bannerTitle: "Learjet 31A",
      bannerImg: "/Cessna Citation Sovereign.jpg",
      interiorImg: "/Cessna Citation Sovereign.jpg",
      description:
        "The Learjet 31A is a light executive jet that seats up to 8 passengers. Its exceptional runway performance and low fuel consumption make it ideal for swift regional travel across short-to-mid range flight corridors.",
      specs: [
        "Date of Manufacture: 1999",
        "Interior Refurbished: 2010",
        "Exterior Refurbished: 2012",
        "Max. Endurance: 4 hours non-stop",
        "Passenger Seats: 08",
        "Cabin Height: 4 ft 3 in",
        "Cabin Length: 12 ft 9 in",
        "Baggage Volume: 08 Soft Bags",
      ],
    },
    {
      id: "airbus-acj318",
      name: "Airbus ACJ318",
      bannerTitle: "AIRBUS ACJ318",
      bannerImg: "/Embraer Phenom 300E.jpg",
      interiorImg: "/Embraer Phenom 300E.jpg",
      description:
        "The aircraft features luxurious mahogany interiors, a VIP lounge, a private office, and two bathrooms, ensuring clients feel completely at home during long intercontinental flights.",
      specs: [
        "Date of Manufacture: 2011",
        "Max. Endurance: 9 hours non-stop",
        "Passenger Seats: 19",
        "Cabin Height: 7 ft 2 in / 2.25m",
        "Cabin Length: 70 ft 2 in / 21.38m",
        "Baggage Volume: 430 cu ft / 12.2 m³",
        "Max Cargo/Bags: 110 Bags / 2920 Kg",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      <Navbar />

      {/* TOP HERO BANNER */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/fleet.jpg"
          alt="Fleet Header"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl space-y-3 pt-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Fleet</h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            Noble Hawk Aviation boasts a diverse fleet of aircraft, ensuring a range of options to suit various travel needs and preferences.
          </p>
        </div>
      </section>

      {/* FLEET ITEMS LIST */}
      <div>
        {fleet.map((aircraft) => (
          <div key={aircraft.id} className="w-full">
            {/* 1. White Details Section */}
            <section className="py-16 px-6 md:px-16 bg-white border-b border-gray-100">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                {/* Left Side: Title, Description & Orange Bullet Specs */}
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {aircraft.name}
                  </h2>
                  
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal">
                    {aircraft.description}
                  </p>

                  {/* Bullet Specs List */}
                  <ul className="space-y-2.5 pt-2">
                    {aircraft.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Request Quote Button */}
                  <div className="pt-4">
                    <Link
                      href={`/booking?aircraft=${aircraft.id}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-[#62C5ED] hover:text-black transition-colors"
                    >
                      Request Quote <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Interior Cabin Image */}
                <div className="relative h-[280px] sm:h-[320px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <Image
                    src={aircraft.interiorImg}
                    alt={`${aircraft.name} Cabin Interior`}
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                </div>

              </div>
            </section>

            {/* 2. Full-Width Aircraft Banner Section */}
            <section className="relative h-[35vh] min-h-[250px] w-full flex items-center justify-center overflow-hidden">
              <Image
                src={aircraft.bannerImg}
                alt={`${aircraft.name} Banner`}
                fill
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40" />

              <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white uppercase tracking-wider text-center drop-shadow-lg px-4">
                {aircraft.bannerTitle}
              </h2>
            </section>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <section aria-labelledby="cta-heading" className="py-24 px-6 md:px-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#62C5ED]/30">
          <div className="lg:col-span-7 bg-gradient-to-br from-[#62C5ED] via-[#4BB8E4] to-[#3BAEDC] p-10 md:p-16 flex flex-col justify-center space-y-6 text-black">
            <h2 id="cta-heading" className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to plan your flight?
            </h2>
            <p className="text-black/85 text-base md:text-lg font-medium max-w-xl leading-relaxed">
              Send us your route and dates. Our charter desk aims to reply with a quote within 60 minutes.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-zinc-900 transition-colors flex items-center gap-2 shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Request a quote <ArrowRight className="w-4 h-4 text-[#62C5ED]" aria-hidden="true" />
              </Link>
              {phoneHref && (
                <a
                  href={phoneHref}
                  className="px-8 py-4 border-2 border-black text-black font-bold rounded-xl hover:bg-black/10 transition-colors flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <PhoneCall className="w-4 h-4" aria-hidden="true" /> Call the charter desk
                </a>
              )}
              {waHref && (
                <a
                  href={waHref}
                  className="px-8 py-4 border-2 border-black text-black font-bold rounded-xl hover:bg-black/10 transition-colors flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp us
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-zinc-900">
            <Image
              src="/airphoto-1.jpg"
              alt="Private jet on the tarmac at an airport"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 40vw, 100vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}