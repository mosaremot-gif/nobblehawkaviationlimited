import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Users,
  Gauge,
  Compass,
  ShieldCheck,
  Briefcase,
  Clock,
  Ruler,
  CheckCircle2,
} from "lucide-react";

export default function FleetPage() {
  const fleet = [
    {
      id: "falcon-7x",
      category: "Ultra Long Range Jet",
      name: "Dassault Falcon 7X",
      tagline: "Unmatched comfort, sound-canceling performance, and efficiency.",
      img: "/airphoto-Dassault Falcon 7X.jpg",
      pax: "13 Passengers",
      range: "5,950 nm",
      endurance: "8 hours non-stop",
      speed: "605 mph",
      baggage: "140 cu ft",
      cabinHeight: "6 ft 2 in",
      highlights: [
        "Aft private lavatory with sound-canceling bulkhead divider",
        "Executive fold-out tables & 4-guest conference setup",
        "Tri-jet performance for short-runway access and hot/high airports",
        "High-speed Wi-Fi and satellite communications",
      ],
    },
    {
      id: "bbj",
      category: "VIP Airliner & Corporate Flagship",
      name: "Boeing Business Jet (BBJ)",
      tagline: "The ultimate boardroom in the sky for heads of state and global delegations.",
      img: "/Boeing Business Jet (BBJ).jpg",
      pax: "19 VIP Passengers",
      range: "6,200 nm",
      endurance: "10 hours non-stop",
      speed: "570 mph",
      baggage: "430 cu ft",
      cabinHeight: "7 ft 2 in",
      highlights: [
        "Luxurious mahogany executive interiors and private office suite",
        "VIP lounge and dual executive bathrooms with standing shower",
        "Extended-range auxiliary fuel tanks for intercontinental non-stops",
        "Secure satellite video conferencing and encrypted communications",
      ],
    },
    {
      id: "citation-sovereign",
      category: "Midsize Executive Jet",
      name: "Cessna Citation Sovereign",
      tagline: "Exceptional runway performance for swift regional and continental flights.",
      img: "/Cessna Citation Sovereign.jpg",
      pax: "9 Passengers",
      range: "3,200 nm",
      endurance: "5.5 hours non-stop",
      speed: "528 mph",
      baggage: "135 cu ft",
      cabinHeight: "5 ft 8 in",
      highlights: [
        "Unrivaled short-field takeoff capability for remote bush airstrips",
        "Berthable club seating with executive writing desks",
        "External baggage bay for safari gear, luggage, and golf bags",
        "Quiet, sun-lit cabin with custom LED mood lighting",
      ],
    },
    {
      id: "phenom-300e",
      category: "Light Executive Jet",
      name: "Embraer Phenom 300E",
      tagline: "Agile, high-speed performance for fast corporate hops and short regional transfers.",
      img: "/Embraer Phenom 300E.jpg",
      pax: "7 Passengers",
      range: "2,010 nm",
      endurance: "4.5 hours non-stop",
      speed: "521 mph",
      baggage: "84 cu ft",
      cabinHeight: "4 ft 11 in",
      highlights: [
        "Best-in-class speed and cabin length in the light jet category",
        "Bossa Nova award-winning interior with ultra-quiet cabin design",
        "In-flight entertainment system and side-facing divan",
        "Private fully enclosed rear lavatory",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[65vh] min-h-[500px] w-full flex items-center justify-start px-6 md:px-16 overflow-hidden">
        {/* Background Aircraft Image */}
        <Image
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80"
          alt="Noble Hawk AviationExecutive Fleet"
          fill
          priority
          className="object-cover object-center pointer-events-none"
          unoptimized
        />

        {/* Dark Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />

        {/* High-Legibility Glass Container */}
        <div className="relative z-10 max-w-3xl pt-16">
          <div className="bg-black/50 backdrop-blur-md border border-white/15 p-6 md:p-8 rounded-2xl space-y-4 shadow-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#62C5ED] font-mono font-bold block">
              Curated Private Fleet
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Our Aircraft Fleet
            </h1>
            <p className="text-gray-100 text-sm md:text-base leading-relaxed max-w-2xl font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              Sourced through our CAA and FAA-audited partner operators, every aircraft in the Noble Hawk Aviation network is configured to meet the highest international safety standards, cabin luxury, and performance reliability.
            </p>
          </div>
        </div>
      </section>

      {/* FLEET SHOWCASE SECTION */}
      <section className="py-24 px-6 md:px-16 space-y-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#62C5ED] font-bold block mb-2">
                Executive Selection
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Featured Fleet Specifications
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
              Explore our fleet tailored for long-range intercontinental travel, regional corporate roadshows, and short-field bush airstrips.
            </p>
          </div>

          {/* Aircraft Grid */}
          <div className="grid grid-cols-1 gap-16">
            {fleet.map((item, idx) => (
              <div
                key={item.id}
                className="bg-zinc-900/80 rounded-3xl overflow-hidden border border-white/10 hover:border-[#62C5ED]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 shadow-2xl group"
              >
                {/* Left Side: Photo Container */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-black overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent lg:hidden" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs uppercase font-mono tracking-widest text-[#62C5ED] font-bold">
                    {item.category}
                  </div>
                </div>

                {/* Right Side: Full Details */}
                <div className="lg:col-span-7 p-8 md:p-12 space-y-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#62C5ED] font-extrabold tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        [{String(idx + 1).padStart(2, "0")}]
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-[#62C5ED] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light italic">
                      “{item.tagline}”
                    </p>
                  </div>

                  {/* 6-Metric Technical Spec Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-white/10 font-mono text-xs">
                    <div className="space-y-1">
                      <span className="text-gray-500 uppercase flex items-center gap-1.5 text-[10px]">
                        <Users className="w-3.5 h-3.5 text-[#62C5ED]" /> Capacity
                      </span>
                      <span className="font-bold text-white text-sm block">{item.pax}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gray-500 uppercase flex items-center gap-1.5 text-[10px]">
                        <Compass className="w-3.5 h-3.5 text-[#62C5ED]" /> Range
                      </span>
                      <span className="font-bold text-[#62C5ED] text-sm block">{item.range}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gray-500 uppercase flex items-center gap-1.5 text-[10px]">
                        <Clock className="w-3.5 h-3.5 text-[#62C5ED]" /> Max Endurance
                      </span>
                      <span className="font-bold text-white text-sm block">{item.endurance}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gray-500 uppercase flex items-center gap-1.5 text-[10px]">
                        <Gauge className="w-3.5 h-3.5 text-[#62C5ED]" /> Speed
                      </span>
                      <span className="font-bold text-white text-sm block">{item.speed}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gray-500 uppercase flex items-center gap-1.5 text-[10px]">
                        <Briefcase className="w-3.5 h-3.5 text-[#62C5ED]" /> Baggage Vol.
                      </span>
                      <span className="font-bold text-white text-sm block">{item.baggage}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gray-500 uppercase flex items-center gap-1.5 text-[10px]">
                        <Ruler className="w-3.5 h-3.5 text-[#62C5ED]" /> Cabin Height
                      </span>
                      <span className="font-bold text-white text-sm block">{item.cabinHeight}</span>
                    </div>
                  </div>

                  {/* Executive Cabin Highlights Bullet List */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-mono text-gray-400 tracking-wider">
                      Executive Cabin Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300 font-light">
                          <CheckCircle2 className="w-4 h-4 text-[#62C5ED] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Link */}
                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#62C5ED] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#7bcfea] transition-all shadow-lg"
                    >
                      Request This Aircraft <ArrowRight className="w-4 h-4 text-black" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SAFETY GUARANTEE BANNER */}
      <section className="py-20 px-6 md:px-16 bg-zinc-100 text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3BAEDC] font-extrabold">
              <ShieldCheck className="w-5 h-5 text-[#3BAEDC]" />
              Strict Operating Audits
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
              100% Certified Air Operator Certificate Holders
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed font-light">
              Noble Hawk Aviation operates as a charter broker. We connect clients exclusively with fully licensed Part 135 air operators maintaining dual-pilot flight command and comprehensive international liability insurance.
            </p>
          </div>

          <Link
            href="/booking"
            className="px-8 py-4 bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-900 transition-all flex items-center gap-2 shrink-0 shadow-xl"
          >
            Charter Fleet Now <Plane className="w-4 h-4 text-[#62C5ED]" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}