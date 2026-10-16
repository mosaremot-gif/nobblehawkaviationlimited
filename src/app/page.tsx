import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, Award, PhoneCall, Plane } from "lucide-react";

export default function Home() {
  const missions = [
    {
      num: "01",
      title: "Executive & Diplomatic Travel",
      route: "Nairobi / Global ➔ Africa · Middle East · Europe",
      desc: "Direct airport apron access and non-stop intercontinental flights with complete diplomatic and corporate discretion.",
    },
    {
      num: "02",
      title: "Urgent Cargo & Freight Charters",
      route: "Time-Critical Logistics · Sensitive Cargo · Global Hubs",
      desc: "Dedicated freighter aircraft for high-value assets, oversized corporate equipment, diplomatic freight, and urgent logistics.",
    },
    {
      num: "03",
      title: "Global Heavy Jet Access",
      route: "Intercontinental Non-Stop Routes",
      desc: "Access premier long-range Gulfstream, Bombardier, and VIP airliner aircraft through our audited global operator network.",
    },
  ];

  const fleetTabs = [
    {
      name: "Cessna Sovereign",
      category: "Midsize Jet",
      pax: "9 Passengers",
      range: "3,200 nm",
      speed: "458 kts",
    },
  ];

  const ecosystem = [
    { num: "01", title: "Private Terminal & FBO Access", desc: "Discreet lounge check-in, immediate tarmac vehicle boarding, and VIP customs clearance." },
    { num: "02", title: "Luxury Tarmac Chauffeurs", desc: "Armor-protected or executive vehicle motorcades waiting right beside your aircraft stairs." },
    { num: "03", title: "Helicopter & Bush Transfers", desc: "Direct point-to-point transfers from international hubs to remote safari lodges or private islands." },
    { num: "04", title: "Executive Close Protection", desc: "Professional journey management and security personnel for dignitaries and corporate leaders." },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Navigation & Hero */}
      <Navbar />
      <HeroSlider />

      {/* IMMEDIATE SECTION AFTER HERO: Full-Width Stratosphere Blue Section */}
      <section className="w-full bg-gradient-to-r from-[#62C5ED] via-[#52BBE3] to-[#3BAEDC] text-black py-16 px-8 md:px-16 shadow-2xl relative z-20 border-b border-[#3BAEDC]/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Left Narrative Content */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block border border-black px-3 py-1 text-xs font-mono uppercase tracking-[0.25em] font-extrabold bg-black/10">
              Unrivaled Private Aviation
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-black">
              Excellence in Executive Air Charter
            </h2>

            <p className="text-black/85 text-sm md:text-base font-medium leading-relaxed">
              Offering the best service in its class at the most cost-effective rates with extreme personal attention to detail.
            </p>
          </div>

          

        </div>
      </section>

      {/* SECTION 1: VALUE PROPOSITIONS (Clean 3-Column Grid) */}
      <section className="py-28 px-8 md:px-16 bg-zinc-100 text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#3BAEDC] font-bold">
              Uncompromising Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 text-[#0A0A0A]">
              Designed Around Your Schedule
            </h2>
          </div>

          {/* Hairline Divider Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-zinc-300">
            <div className="space-y-4">
              <Clock className="w-8 h-8 text-[#62C5ED]" />
              <h3 className="text-xl font-bold text-[#0A0A0A]">Absolute Time Freedom</h3>
              <p className="text-zinc-600 text-sm leading-relaxed font-light">
                Skip commercial queues, layovers, and airport friction. Departure times set completely by your calendar across thousands of global private aprons.
              </p>
            </div>

            <div className="space-y-4 md:border-l border-zinc-300 md:pl-12">
              <ShieldCheck className="w-8 h-8 text-[#62C5ED]" />
              <h3 className="text-xl font-bold text-[#0A0A0A]">CAA & FAA Audited Fleet</h3>
              <p className="text-zinc-600 text-sm leading-relaxed font-light">
                Every aircraft, pilot, and ground team sourced through our desk adheres strictly to Part 135 operator safety standards and dual-pilot command.
              </p>
            </div>

            <div className="space-y-4 md:border-l border-zinc-300 md:pl-12">
              <Award className="w-8 h-8 text-[#62C5ED]" />
              <h3 className="text-xl font-bold text-[#0A0A0A]">Complete Journey Architecture</h3>
              <p className="text-zinc-600 text-sm leading-relaxed font-light">
                From luxury tarmac motorcade pickups to custom in-flight catering, bush airstrip clearances, and close protection security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OPERATIONAL SCOPE (Glassmorphism Floating Cards over Image) */}
      <section className="relative py-32 px-6 md:px-16 overflow-hidden bg-black border-t border-b border-white/10">
        {/* Background Aircraft Image */}
        <Image
          src="/airphoto-2.jpg"
          alt="Executive Hangar & Aircraft"
          fill
          priority
          className="object-cover object-center pointer-events-none brightness-75"
          unoptimized
        />
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#62C5ED] font-mono font-bold block mb-2">
                Operational Scope
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                How We Fly You
              </h2>
            </div>
            <p className="text-gray-300 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed drop-shadow-sm">
              Tailored flight solutions engineered specifically for executive travel, urgent cargo logistics, and long-range international routes.
            </p>
          </div>

          {/* 3 Floating Glassmorphism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((m, idx) => (
              <div
                key={idx}
                className="group relative bg-black/45 backdrop-blur-md border border-white/15 hover:border-[#62C5ED]/60 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div className="space-y-6">
                  {/* Mission Number Tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#62C5ED] font-extrabold tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      [{m.num}]
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">
                      {idx === 1 ? "Logistics & Freight" : "Private Charter"}
                    </span>
                  </div>

                  {/* Title & Route */}
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#62C5ED] transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-xs font-mono text-[#62C5ED]/90 mt-2 font-medium">
                      {m.route}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="/booking"
                    className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#62C5ED] flex items-center gap-2 transition-colors"
                  >
                    {idx === 1 ? "Request Cargo Quote" : "Book Mission"}{" "}
                    <ArrowRight className="w-4 h-4 text-[#62C5ED] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: FEATURED FLEET SHOWCASE */}
      <section className="py-28 px-8 md:px-16 bg-[#0E1118] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#62C5ED] font-semibold">
                Global Network Fleet
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 text-white">
                Featured Aircraft
              </h2>
            </div>
            <Link href="/fleet" className="text-xs uppercase tracking-wider text-[#62C5ED] font-semibold flex items-center gap-2 hover:underline mt-4 md:mt-0">
              View All Fleet Specs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Large Split Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Side */}
            <div className="lg:col-span-7 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-[#62C5ED]/30">
              <Image
                src="/airphoto-4.jpg"
                alt={fleetTabs[0].name}
                fill
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs uppercase tracking-widest text-[#62C5ED]">
                {fleetTabs[0].category}
              </div>
            </div>

            {/* Spec Details Side */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-3xl font-extrabold text-white">{fleetTabs[0].name}</h3>
                <p className="text-gray-400 text-sm mt-2 font-light">
                  Configured with luxurious executive seating, high-speed Starlink connectivity, and optimized short-field landing capabilities for regional and international travel.
                </p>
              </div>

              {/* Spec Columns */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/10 font-mono">
                <div>
                  <span className="text-xs text-gray-500 uppercase block">Capacity</span>
                  <span className="text-lg font-bold text-[#62C5ED]">{fleetTabs[0].pax}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase block">Max Range</span>
                  <span className="text-lg font-bold text-[#62C5ED]">{fleetTabs[0].range}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase block">Cruise Speed</span>
                  <span className="text-lg font-bold text-[#62C5ED]">{fleetTabs[0].speed}</span>
                </div>
              </div>

              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#62C5ED] text-black font-bold text-sm uppercase rounded-xl hover:bg-[#78ceef] transition-all shadow-[0_0_20px_rgba(98,197,237,0.3)]"
              >
                Charter This Aircraft <Plane className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE NOBLE HAWK ECOSYSTEM */}
      <section className="py-28 px-8 md:px-16 bg-white text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT SIDE: Narrative Heading + Numbered List */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Heading Narrative */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-[#3BAEDC] font-bold">
                  End-to-End Mobility
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-tight">
                  Complete Luxury Journey Management
                </h2>
                <div className="h-0.5 w-16 bg-[#62C5ED] my-6" />
                <p className="text-zinc-600 text-base leading-relaxed font-light max-w-xl">
                  Private aviation extends beyond the tarmac. We seamlessly integrate luxury ground transport, close protection, and lodge transfers into a single point of contact.
                </p>
              </div>

              {/* Numbered List */}
              <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
                {ecosystem.map((e, idx) => (
                  <div key={idx} className="py-6 space-y-2">
                    <span className="text-xs font-mono text-[#3BAEDC] font-bold block">
                      [{e.num}]
                    </span>
                    <h3 className="text-xl font-bold text-[#0A0A0A]">{e.title}</h3>
                    <p className="text-zinc-600 text-sm font-light leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT SIDE: Dedicated Photo Card Container */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <div className="relative h-[580px] w-full rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100">
                <Image
                  src="/airphoto-1.jpg"
                  alt="Complete Luxury Journey Management"
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#62C5ED] block mb-1">
                    Noble Hawk Aviation VIP Services
                  </span>
                  <p className="text-xs text-zinc-200 font-light">
                    Seamless tarmac transfers and dedicated journey coordination across every destination.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CTA BANNER */}
      <section className="py-24 px-6 md:px-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#62C5ED]/30">
          
          {/* Left Text & Actions */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#62C5ED] via-[#4BB8E4] to-[#3BAEDC] p-10 md:p-16 flex flex-col justify-center space-y-6 text-black">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-black/80 bg-black/10 px-4 py-1.5 rounded-full w-fit border border-black/20">
              Your Next Destination Awaits
            </span>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-black">
              Experience Noble Hawk Air
            </h2>

            <p className="text-black/85 text-sm md:text-base font-medium max-w-xl leading-relaxed">
              Connect with our 24/7 charter dispatch desk to tailor your upcoming itinerary or receive direct flight quotes within 60 minutes.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="px-8 py-4 bg-black text-white font-bold text-sm uppercase rounded-xl hover:bg-zinc-900 transition-all flex items-center gap-2 shadow-xl"
              >
                Request a Flight Quote <ArrowRight className="w-4 h-4 text-[#62C5ED]" />
              </Link>

              <a
                href="tel:+254700000000"
                className="px-8 py-4 bg-white/20 backdrop-blur-md border border-black/20 text-black font-bold text-sm uppercase rounded-xl hover:bg-white/30 transition-all flex items-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-black" /> Contact Advisory Desk
              </a>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-zinc-900">
            <Image
              src="/airphoto-1.jpg"
              alt="Noble Hawk Aviation Air Private Jet Tarmac"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}