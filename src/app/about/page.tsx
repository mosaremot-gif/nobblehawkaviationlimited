import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Compass } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      num: "01",
      title: "Uncompromising Safety",
      desc: "Every aircraft, operator, and crew member in our global network undergoes rigorous CAA and FAA compliance audits prior to departure.",
    },
    {
      num: "02",
      title: "Precision & Punctuality",
      desc: "Your time is your most valuable asset. We guarantee seamless tarmac transfers, immediate dispatch, and zero unnecessary delays.",
    },
    {
      num: "03",
      title: "Tailored Discretion",
      desc: "From private heads of state to corporate boards and high-net-worth families, confidentiality and privacy remain our highest priority.",
    },
    {
      num: "04",
      title: "End-to-End Architecture",
      desc: "Beyond flight planning, we orchestrate terminal VIP fast-tracking, luxury ground motorcades, and close protection security.",
    },
  ];

  const milestones = [
    { number: "100%", label: "Vetted Operator Compliance" },
    { number: "24/7", label: "Dedicated Charter Desk" },
    { number: "150+", label: "Accessible Regional Airstrips" },
    { number: "0", label: "Compromises on Safety" },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#171717] relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-start px-3 md:px-16 overflow-hidden">
        {/* Background Aircraft Image */}
        <Image
          src="/airphoto-5.jpg"
          alt="Noble Hawk Aviation Air Private Jet Tarmac"
          fill
          priority
          className="object-cover object-center pointer-events-none"
          unoptimized
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Left-Aligned Text Container wrapped in a glass card for readability */}
        <div className="relative z-10 max-w-3xl pt-16">
          <div className="bg-black/50 backdrop-blur-md border border-white/15 p-6 md:p-8 rounded-2xl space-y-4 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              About Us
            </h1>
            <p className="text-gray-100 text-sm md:text-lg leading-relaxed max-w-2xl font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              At Noble Hawk Aviation Limited, we pride ourselves on our commitment to excellence, safety, and personalized service. Our core values are the foundation of everything we do, guiding us in providing exceptional aviation services tailored to our clients’ needs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR MISSION & VISION (Light Silver Canvas) */}
      <section className="py-28 px-8 md:px-16 bg-zinc-100 text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#3BAEDC] font-bold">
                Pioneering Private Aviation
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-tight">
                Redefining Air Mobility Across Regional & International Skies
              </h2>
              <div className="h-0.5 w-16 bg-[#62C5ED] my-6" />
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed font-light">
                Founded with a vision to deliver flawless air charter brokerage services, Noble Hawk Aviation Limited bridges the gap between regional bush airstrips and major global finance hubs. We eliminate the friction of commercial air travel by offering immediate, custom-tailored flight solutions.
              </p>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                Whether orchestrating a multi-leg executive roadshow across Africa and the Middle East or coordinating a private bush landing directly at a Laikipia lodge, our dispatch team handles every detail with meticulous oversight.
              </p>
            </div>

            {/* Right Stat Columns */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-y-12 gap-x-8 border-l border-zinc-300 pl-8 md:pl-12">
              {milestones.map((m, idx) => (
                <div key={idx}>
                  <span className="block text-4xl md:text-5xl font-extrabold text-[#0A0A0A] font-mono">
                    {m.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mt-2 block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: OUR CORE VALUES (Deep Obsidian Canvas) */}
      <section className="py-28 px-8 md:px-16 bg-[#0A0A0A] text-white border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#62C5ED] font-semibold">
                The Standard
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 text-white">
                Principles That Drive Every Mission
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0 font-light">
              Built on discretion, aviation mastery, and seamless execution.
            </p>
          </div>

          {/* 4-Column Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, idx) => (
              <div key={idx} className="space-y-4">
                <span className="text-xs font-mono text-[#62C5ED] tracking-widest font-bold block">
                  [{v.num}]
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: SAFETY & REGULATORY COMPLIANCE (Crisp White Canvas) */}
      <section className="py-28 px-8 md:px-16 bg-white text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#3BAEDC] font-bold">
              Regulatory Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
              Rigorous Safety & Vetted Operators
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-light">
              We operate purely as an elite air charter brokerage, partnering exclusively with certified Air Operator Certificate (AOC) holders who meet international Civil Aviation Authority (CAA) and FAA Part 135 safety requirements[cite: 1].
            </p>
          </div>

          {/* Clean 3-Column Bordered Rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-zinc-200">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0A0A0A] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#62C5ED]" />
                Dual-Pilot Flight Protocol
              </h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Mandatory dual-pilot command on executive missions, ensuring redundancy, situational awareness, and total flight security.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0A0A0A] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#62C5ED]" />
                Comprehensive Insurance Cover
              </h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Full international passenger liability coverage across all partner fleet aircraft, protecting every passenger on every leg.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0A0A0A] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#62C5ED]" />
                Airstrip Capability Audits
              </h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Real-time runway condition assessments prior to bush and unpaved airstrip landings throughout East African reserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INSPIRATIONAL & WARM CTA SECTION */}
      <section className="py-24 px-6 md:px-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#62C5ED]/30">
          
          {/* Left Text & Actions (Warm & Welcoming Copy) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#62C5ED] via-[#4BB8E4] to-[#3BAEDC] p-10 md:p-16 flex flex-col justify-center space-y-6 text-black">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-black/90 bg-black/10 px-4 py-1.5 rounded-full w-fit border border-black/20">
              <Compass className="w-3.5 h-3.5 text-black" />
              <span>Where Will You Fly Next?</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-black">
              Your Journey, Crafted Without Compromise
            </h2>

            <p className="text-black/85 text-base md:text-lg font-medium max-w-xl leading-relaxed">
              Skip the noise, the long lines, and the rigid schedules. Whether it’s a vital executive summit or a peaceful getaway to remote shores, we prepare every flight around your pace and peace of mind.
            </p>

            <p className="text-black/75 text-sm font-semibold max-w-xl italic">
              “Tell us where you want to be — our private charter team handles the sky, the ground, and every detail in between.”
            </p>

           
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full bg-zinc-900">
            <Image
              src="/airphoto-1.jpg"
              alt="Noble Hawk Private Aviation Journey"
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