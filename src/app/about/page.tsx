import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Noble Hawk Aviation Limited",
  description:
    "Noble Hawk Aviation is a Nairobi-based private charter broker. We arrange flights on certified operators across Africa, the Middle East and Europe.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Noble Hawk Aviation Limited",
    description:
      "Private charter brokerage arranging flights on certified Air Operator Certificate holders.",
    url: "/about",
    type: "website",
  },
};

/* ------------------------------------------------------------------
   TODO (client to supply): fill these in. Anything left empty is simply
   not rendered, so no placeholder text ever reaches the live page.
------------------------------------------------------------------- */
const COMPANY = {
  registrationNo: "", // e.g. from the Business Registration Service certificate
  address: "", // office / hangar address
  phone: "", // real number in international format, e.g. "+2547XXXXXXXX"
};

const TEAM: { name: string; role: string; bio: string }[] = [
  // { name: "Full Name", role: "Director of Operations", bio: "One or two lines of real aviation background." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Noble Hawk Aviation Limited",
  url: "https://www.noblehawkaviationlimited.com",
  email: "info@noblehawkaviationlimited.com",
};

// NOTE: every claim below must be true for the client's real operation.
// Confirm each with them before publishing.
const values = [
  {
    title: "Safety first",
    desc: "We only quote flights on operators that hold a valid Air Operator Certificate, and we check certification and insurance before we send you a price.",
  },
  {
    title: "Punctuality",
    desc: "Your time matters. We aim for fast dispatch and smooth ground handling, and we tell you straight away if a schedule changes.",
  },
  {
    title: "Discretion",
    desc: "Executives, boards and families trust us with sensitive travel plans. Confidentiality is built into how we handle every request.",
  },
  {
    title: "Complete journeys",
    desc: "Beyond the flight, we can arrange VIP terminal access, ground transport and security through trusted partners.",
  },
];

const facts = [
  { number: "24/7", label: "Charter desk" },
  { number: "60 min", label: "Target time to your quote" },
  { number: "AOC", label: "Certified operators only" },
];

const safety = [
  {
    title: "Two-pilot crews",
    desc: "Executive missions are flown by two-pilot crews, for redundancy and situational awareness.",
  },
  {
    title: "Insurance",
    desc: "Our partner operators carry passenger liability insurance. Ask us for certificate details when you request a quote.",
  },
  {
    title: "Airstrip checks",
    desc: "For bush and unpaved airstrips, we confirm runway suitability and recent conditions with the operator before we confirm a flight.",
  },
];

export default function AboutPage() {
  const details = [
    COMPANY.registrationNo && ["Company registration no.", COMPANY.registrationNo],
    COMPANY.address && ["Office", COMPANY.address],
  ].filter(Boolean) as string[][];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
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
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">About Noble Hawk Aviation Limited</h1>
          
        </div>
      </section>

        {/* MISSION */}
        <section
          aria-labelledby="mission-heading"
          className="py-24 px-6 md:px-16 bg-zinc-100 text-[#0A0A0A]"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#0B6E99] font-bold">
                What we do
              </p>
              <h2
                id="mission-heading"
                className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
              >
                Private flights across regional and international skies
              </h2>
              <div className="h-0.5 w-16 bg-[#0B6E99]" aria-hidden="true" />
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed">
                Noble Hawk Aviation Limited connects bush airstrips with major global hubs. We are a brokerage, so we do not fly the aircraft ourselves. We find the right certified operator for your route and manage the booking.
              </p>
              <p className="text-zinc-700 text-base leading-relaxed">
                That might be a multi-stop executive trip across Africa and the Middle East, or a private landing at a lodge in Laikipia.
              </p>
            </div>

            <dl className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-y-10 gap-x-8 lg:border-l border-zinc-300 lg:pl-12">
              {facts.map((f) => (
                <div key={f.label}>
                  <dd className="text-4xl md:text-5xl font-extrabold font-mono order-first">
                    {f.number}
                  </dd>
                  <dt className="text-xs uppercase tracking-widest text-zinc-600 font-semibold mt-2">
                    {f.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* VALUES */}
        <section
          aria-labelledby="values-heading"
          className="py-24 px-6 md:px-16 bg-[#0A0A0A] border-t border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 pb-8 border-b border-white/10">
              <h2
                id="values-heading"
                className="text-3xl md:text-5xl font-extrabold tracking-tight"
              >
                How we work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {values.map((v) => (
                <div key={v.title} className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight">{v.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section
          aria-labelledby="safety-heading"
          className="py-24 px-6 md:px-16 bg-white text-[#0A0A0A]"
        >
          <div className="max-w-7xl mx-auto space-y-14">
            <div className="max-w-3xl space-y-4">
              <h2
                id="safety-heading"
                className="text-3xl md:text-5xl font-extrabold tracking-tight"
              >
                Safety and certified operators
              </h2>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed">
                Noble Hawk Aviation is an air charter broker. Every flight is operated by a third-party operator that holds a valid Air Operator Certificate (AOC) from its national aviation authority. We confirm this before we quote, and we can share the operator's details on request.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-zinc-200">
              {safety.map((s) => (
                <div key={s.title} className="space-y-3">
                  <h3 className="text-lg font-bold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0B6E99]" aria-hidden="true" />
                    {s.title}
                  </h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {details.length > 0 && (
              <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-200">
                {details.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs uppercase tracking-widest text-zinc-600 font-semibold">
                      {label}
                    </dt>
                    <dd className="mt-1 text-zinc-900">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>

        {/* TEAM (only renders once real people are added to TEAM) */}
        {TEAM.length > 0 && (
          <section
            aria-labelledby="team-heading"
            className="py-24 px-6 md:px-16 bg-zinc-100 text-[#0A0A0A]"
          >
            <div className="max-w-7xl mx-auto">
              <h2 id="team-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12">
                The people behind your flight
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {TEAM.map((p) => (
                  <div key={p.name}>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="text-sm font-semibold text-zinc-600">{p.role}</p>
                    <p className="mt-3 text-zinc-700 leading-relaxed">{p.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section aria-labelledby="cta-heading" className="py-24 px-6 md:px-16 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#62C5ED]/30">
            <div className="lg:col-span-7 bg-gradient-to-br from-[#62C5ED] via-[#4BB8E4] to-[#3BAEDC] p-10 md:p-16 flex flex-col justify-center space-y-6 text-black">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold bg-black/10 px-4 py-1.5 rounded-full w-fit border border-black/20">
                <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Where will you fly next?</span>
              </div>

              <h2 id="cta-heading" className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Tell us where you want to be
              </h2>

              <p className="text-black/85 text-base md:text-lg font-medium max-w-xl leading-relaxed">
                Skip the long lines and rigid schedules. Send us your route and dates, and we will come back with a quote and the operator's details.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3 rounded-full hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Request a quote
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                {COMPANY.phone && (
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 border-2 border-black text-black font-bold px-6 py-3 rounded-full hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <PhoneCall className="w-4 h-4" aria-hidden="true" />
                    Call the charter desk
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full bg-zinc-900">
              <Image
                src="/airphoto-1.jpg"
                alt="Private jet on the tarmac" /* replace with a description of the real photo */
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}