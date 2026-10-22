import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, Award, PhoneCall, Plane, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Jet Charter from Nairobi | Noble Hawk Aviation Limited",
  description:
    "Private jet, cargo and safari charter flights from Nairobi to Africa, the Middle East and Europe. Request a quote and hear back within 60 minutes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Noble Hawk Aviation Limited | Private Charter Flights",
    description: "Charter flights arranged on certified operators. Request a quote online.",
    url: "/",
    type: "website",
  },
};

/* ------------------------------------------------------------------
   TODO (client to supply). Empty values are not rendered, so no
   placeholder number ever reaches the live site. Ideally move this to
   a shared file (e.g. "@/lib/company") used by Home, About and Footer.
------------------------------------------------------------------- */
const COMPANY = {
  phone: "", // international format, e.g. "+2547XXXXXXXX"
  whatsapp: "", // digits only, e.g. "2547XXXXXXXX"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Noble Hawk Aviation Limited",
  url: "https://www.noblehawkaviationlimited.com",
  email: "info@noblehawkaviationlimited.com",
};

// NOTE: confirm every claim below with the client before publishing.
const steps = [
  { num: "1", title: "Send your trip details", desc: "Tell us where you are flying, when, and how many people are travelling." },
  { num: "2", title: "Get your quote", desc: "We aim to reply within 60 minutes with a price and the operator's details." },
  { num: "3", title: "Confirm and fly", desc: "Once you approve, we confirm the flight and arrange any ground services." },
];

/* Each card needs its own photo. Until you have dedicated shots, these reuse
   existing files: swap the paths for e.g. /service-passenger.jpg, /service-cargo.jpg. */
const missions = [
  {
    label: "Passenger charter",
    type: "passenger",
    title: "Executive and diplomatic travel",
    route: "Nairobi and beyond: Africa, Middle East, Europe",
    desc: "Direct apron access and non-stop flights on certified operators, with the discretion corporate and diplomatic travel needs.",
    cta: "Request a quote",
    image: "/airphoto-5.avif",
    imageAlt: "Private jet parked on an airport apron",
  },
  {
    label: "Cargo",
    type: "cargo",
    title: "Urgent cargo and freight",
    route: "Time-critical shipments to global hubs",
    desc: "Charters for high-value, sensitive or oversized cargo, arranged with certified operators.",
    cta: "Request a cargo quote",
    image: "/airphoto-2.jpg",
    imageAlt: "Aircraft parked outside a hangar",
  },
  {
    label: "Long-range charter",
    type: "long-range",
    title: "Heavy jets for long routes",
    route: "Intercontinental, non-stop",
    desc: "Long-range Gulfstream, Bombardier and VIP airliner options through our network of certified operators.",
    cta: "Request a quote",
    image: "/airphoto-1.jpg",
    imageAlt: "Long-range private jet on the tarmac",
  },
];

const featured = {
  name: "Cessna Citation Sovereign",
  slug: "cessna-citation-sovereign",
  category: "Midsize jet",
  pax: "9",
  range: "3,200 nm",
  speed: "458 kts",
};

const ecosystem = [
  { title: "Private terminal and FBO access", desc: "Lounge check-in, vehicle access to the aircraft and help with customs clearance where available." },
  { title: "Tarmac chauffeurs", desc: "Executive vehicles waiting beside your aircraft, with armoured vehicles on request." },
  { title: "Helicopter and transfers", desc: "Connections from international hubs to safari lodges and private islands." },
  { title: "Security", desc: "Close protection personnel arranged through licensed providers for executives and dignitaries." },
];

const inputClass =
  "w-full rounded-lg border border-black/30 bg-white px-3 py-2.5 text-sm text-black placeholder:text-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";
const labelClass = "block text-xs font-bold text-black mb-1";

/* One shared photo treatment (slight desaturation, a touch more contrast and a
   soft navy tint) so every image on the site looks like part of the same set.
   The parent element must be `relative` and have a height. */
function Photo({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-center [filter:saturate(0.92)_contrast(1.05)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B1220]/15 pointer-events-none" />
    </>
  );
}

export default function Home() {
  const phoneHref = COMPANY.phone ? `tel:${COMPANY.phone.replace(/\s/g, "")}` : "";
  const waHref = COMPANY.whatsapp ? `https://wa.me/${COMPANY.whatsapp}` : "";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
        {/* HERO (check that HeroSlider renders the page's single h1) */}
        <HeroSlider />

        

        {/* VALUE PROPOSITIONS (light, with a faint brand watermark) */}
        <section aria-labelledby="values-heading" className="relative overflow-hidden py-24 px-6 md:px-16 bg-zinc-100 text-[#0A0A0A]">
          

          <div className="relative z-10 max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#0B6E99]">Why fly with us</p>
              <h2 id="values-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3">
                Designed around your schedule
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-zinc-300">
              <div className="space-y-4">
                <Clock className="w-8 h-8 text-[#0B6E99]" aria-hidden="true" />
                <h3 className="text-xl font-bold">Fly on your time</h3>
                <p className="text-zinc-700 text-base leading-relaxed">
                  Skip commercial queues and layovers. We plan around your calendar, from Wilson Airport to major international hubs.
                </p>
              </div>
              <div className="space-y-4 md:border-l border-zinc-300 md:pl-12">
                <ShieldCheck className="w-8 h-8 text-[#0B6E99]" aria-hidden="true" />
                <h3 className="text-xl font-bold">Certified operators only</h3>
                <p className="text-zinc-700 text-base leading-relaxed">
                  We quote flights only on operators that hold a valid Air Operator Certificate, and we confirm that before we send you a price.
                </p>
              </div>
              <div className="space-y-4 md:border-l border-zinc-300 md:pl-12">
                <Award className="w-8 h-8 text-[#0B6E99]" aria-hidden="true" />
                <h3 className="text-xl font-bold">The whole journey, one contact</h3>
                <p className="text-zinc-700 text-base leading-relaxed">
                  From tarmac pickups and catering to airstrip arrangements and security, one team coordinates it all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (a real sequence, so numbered) */}
        <section aria-labelledby="how-heading" className="py-24 px-6 md:px-16 bg-white text-[#0A0A0A]">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 id="how-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight">
              How booking works
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((s) => (
                <li key={s.num} className="space-y-3 border-t-2 border-[#0B6E99] pt-5">
                  <span className="text-sm font-bold text-[#0B6E99]">Step {s.num}</span>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-zinc-700 text-base leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVICES (photo-led cards on a light background) */}
        <section aria-labelledby="services-heading" className="py-24 px-6 md:px-16 bg-zinc-100 text-[#0A0A0A]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 id="services-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight">
                What we arrange
              </h2>
              <p className="text-zinc-700 text-base md:text-lg max-w-md leading-relaxed">
                Charter solutions for executive travel, urgent cargo and long-range international routes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missions.map((m) => (
                <article
                  key={m.type}
                  className="flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-shadow motion-reduce:transition-none"
                >
                  <div className="relative h-56">
                    <Photo src={m.image} alt={m.imageAlt} sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="flex flex-col flex-1 p-7 space-y-4">
                    <p className="text-sm font-semibold text-[#0B6E99]">{m.label}</p>
                    <div>
                      <h3 className="text-2xl font-bold">{m.title}</h3>
                      <p className="text-sm text-zinc-600 mt-2">{m.route}</p>
                    </div>
                    <p className="text-zinc-700 text-base leading-relaxed flex-1">{m.desc}</p>
                    <Link
                      href={`/booking?type=${m.type}`}
                      className="inline-flex items-center gap-2 font-bold text-[#0B6E99] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B6E99]"
                    >
                      {m.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED AIRCRAFT (the one dark moment mid-page) */}
        <section aria-labelledby="fleet-heading" className="py-24 px-6 md:px-16 bg-[#0E1118] text-white">
          <div className="max-w-7xl mx-auto space-y-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
              <h2 id="fleet-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Featured aircraft
              </h2>
              <Link
                href="/fleet"
                className="text-sm text-[#62C5ED] font-semibold inline-flex items-center gap-2 hover:underline mt-4 md:mt-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#62C5ED]"
              >
                See all aircraft <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <figure className="lg:col-span-7">
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-[#62C5ED]/30">
                  <Photo
                    src="/airphoto-4.avif"
                    alt={`${featured.name} business jet on an airport apron`}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                  <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-[#62C5ED]">
                    {featured.category}
                  </div>
                </div>
                <figcaption className="mt-3 text-sm text-gray-400">
                  
                </figcaption>
              </figure>

              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h3 className="text-3xl font-extrabold">{featured.name}</h3>
                  <p className="text-gray-300 text-base mt-3 leading-relaxed">
                    Executive seating and short-field capability for regional and international trips. Cabin features such as connectivity depend on the operator's aircraft.
                  </p>
                </div>

                <dl className="grid grid-cols-3 gap-6 py-6 border-y border-white/10">
                  <div>
                    <dt className="text-xs text-gray-400">Passengers</dt>
                    <dd className="text-lg font-bold text-[#62C5ED]">Up to {featured.pax}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-400">Typical range</dt>
                    <dd className="text-lg font-bold text-[#62C5ED]">{featured.range}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-400">Cruise speed</dt>
                    <dd className="text-lg font-bold text-[#62C5ED]">{featured.speed}</dd>
                  </div>
                </dl>

                <Link
                  href={`/booking?aircraft=${featured.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#62C5ED] text-black font-bold rounded-xl hover:bg-[#78ceef] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request this aircraft <Plane className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GROUND SERVICES */}
        <section aria-labelledby="ground-heading" className="py-24 px-6 md:px-16 bg-white text-[#0A0A0A]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#0B6E99]">Beyond the flight</p>
                <h2 id="ground-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Ground services, handled for you
                </h2>
                <div className="h-0.5 w-16 bg-[#0B6E99]" aria-hidden="true" />
                <p className="text-zinc-700 text-base md:text-lg leading-relaxed max-w-xl">
                  Private aviation does not end at the aircraft door. We arrange ground transport, transfers and security through trusted partners, with one point of contact.
                </p>
              </div>

              <ul className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
                {ecosystem.map((e) => (
                  <li key={e.title} className="py-6 space-y-2">
                    <h3 className="text-xl font-bold">{e.title}</h3>
                    <p className="text-zinc-700 text-base leading-relaxed">{e.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative h-[480px] md:h-[580px] w-full rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100">
                <Photo
                  src="/airphoto-3.jpg" /* use a different photo from the CTA below if you have one */
                  alt="Chauffeured vehicle waiting beside a private jet" /* describe the real photo */
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK QUOTE */}
        <section
          aria-labelledby="quote-heading"
          className="w-full bg-[#0A0A0A] text-white py-24 px-6 md:px-16 relative z-20"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text blending with homepage */}
            <div className="lg:col-span-5 space-y-4">
              <h2 id="quote-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Private charter flights from Nairobi to Africa, the Middle East and Europe
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                Tell us your route and dates. We find a certified operator and send you a quote with its details.
              </p>
            </div>

            {/* Right side form card in solid blue */}
            <form action="/booking" method="get" className="lg:col-span-7 bg-[#62C5ED] border border-[#62C5ED]/40 rounded-3xl p-6 md:p-10 shadow-2xl text-black">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="qq-from" className="block text-xs font-bold text-black uppercase tracking-wider mb-2">From</label>
                  <input id="qq-from" name="from" type="text" placeholder="e.g. Nairobi" className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black shadow-inner" />
                </div>
                <div>
                  <label htmlFor="qq-to" className="block text-xs font-bold text-black uppercase tracking-wider mb-2">To</label>
                  <input id="qq-to" name="to" type="text" placeholder="e.g. Dubai" className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black shadow-inner" />
                </div>
                <div>
                  <label htmlFor="qq-date" className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Date</label>
                  <input id="qq-date" name="date" type="date" className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black shadow-inner" />
                </div>
                <div>
                  <label htmlFor="qq-pax" className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Passengers</label>
                  <input id="qq-pax" name="passengers" type="number" min={1} max={100} placeholder="e.g. 4" className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black shadow-inner" />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 bg-black text-white font-extrabold px-8 py-4 rounded-xl hover:bg-zinc-900 transition-colors shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Continue to quote request <ArrowRight className="w-4 h-4 text-[#62C5ED]" aria-hidden="true" />
              </button>
            </form>

          </div>
        </section>

        
      </main>

      <Footer />

      
    </>
  );
}