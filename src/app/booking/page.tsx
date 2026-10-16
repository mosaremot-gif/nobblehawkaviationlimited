import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Plane, Calendar, Users, MapPin, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

// Sub-component that safely awaits searchParams inside Suspense
async function BookingForm({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = (await searchParams) || {};

  const defaultAircraft = typeof resolvedSearchParams.aircraft === "string" ? resolvedSearchParams.aircraft : "";
  const defaultFrom = typeof resolvedSearchParams.from === "string" ? resolvedSearchParams.from : "";
  const defaultTo = typeof resolvedSearchParams.to === "string" ? resolvedSearchParams.to : "";
  const defaultDate = typeof resolvedSearchParams.date === "string" ? resolvedSearchParams.date : "";
  const defaultPax = typeof resolvedSearchParams.passengers === "string" ? resolvedSearchParams.passengers : "";

  return (
    <div className="lg:col-span-8 bg-[#62C5ED] border border-[#62C5ED]/50 rounded-3xl p-8 md:p-12 shadow-2xl text-black space-y-8">
      <form className="space-y-8">
        {/* Flight Type Selection */}
        <div className="space-y-3">
          <label className="block text-xs font-extrabold text-black uppercase tracking-wider">
            Flight Type
          </label>
          <div className="grid grid-cols-3 gap-3">
            <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-black/20 bg-white/40 text-black text-xs font-bold cursor-pointer hover:bg-white has-[:checked]:bg-black has-[:checked]:text-white transition-all">
              <input type="radio" name="tripType" value="one-way" defaultChecked className="hidden" />
              One Way
            </label>
            <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-black/20 bg-white/40 text-black text-xs font-bold cursor-pointer hover:bg-white has-[:checked]:bg-black has-[:checked]:text-white transition-all">
              <input type="radio" name="tripType" value="round-trip" className="hidden" />
              Round Trip
            </label>
            <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-black/20 bg-white/40 text-black text-xs font-bold cursor-pointer hover:bg-white has-[:checked]:bg-black has-[:checked]:text-white transition-all">
              <input type="radio" name="tripType" value="multi-leg" className="hidden" />
              Multi-Leg
            </label>
          </div>
        </div>

        {/* Route Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="departure" className="block text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-black" /> Departure Airport / City
            </label>
            <input
              id="departure"
              type="text"
              defaultValue={defaultFrom}
              placeholder="e.g. Wilson Airport (HKNW) or Nairobi"
              required
              className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="destination" className="block text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-black" /> Destination Airport / City
            </label>
            <input
              id="destination"
              type="text"
              defaultValue={defaultTo}
              placeholder="e.g. Maasai Mara, Dubai, or London"
              required
              className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Dates & Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="flightDate" className="block text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-black" /> Departure Date
            </label>
            <input
              id="flightDate"
              type="date"
              defaultValue={defaultDate}
              required
              className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="passengers" className="block text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-black" /> Passengers
            </label>
            <input
              id="passengers"
              type="number"
              min="1"
              max="100"
              defaultValue={defaultPax || "1"}
              required
              className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="preferredAircraft" className="block text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5 text-black" /> Preferred Jet
            </label>
            <select
              id="preferredAircraft"
              defaultValue={defaultAircraft}
              className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
            >
              <option value="">No preference (Best match)</option>
              <option value="falcon-7x">Dassault Falcon 7X</option>
              <option value="gulfstream-g450">Gulfstream G450</option>
              <option value="learjet-31a">Learjet 31A</option>
              <option value="airbus-acj318">Airbus ACJ318</option>
              <option value="cessna-citation-sovereign">Cessna Citation Sovereign</option>
            </select>
          </div>
        </div>

        <div className="border-t border-black/20 pt-6 space-y-6">
          <h3 className="text-lg font-black text-black">Contact Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-xs font-extrabold text-black uppercase tracking-wider">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Captain James Walker"
                required
                className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-extrabold text-black uppercase tracking-wider">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="info@noblehawkaviationlimited.com"
                required
                className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-extrabold text-black uppercase tracking-wider">
                Phone Number / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+254 700 000 000"
                required
                className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-extrabold text-black uppercase tracking-wider">
                Company / Organization (Optional)
              </label>
              <input
                id="company"
                type="text"
                placeholder="Noble Hawk Aviation"
                className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="block text-xs font-extrabold text-black uppercase tracking-wider">
              Additional Requirements (Cargo, VIP Ground Handling, Catering)
            </label>
            <textarea
              id="notes"
              rows={3}
              placeholder="Provide details on baggage requirements, tarmac chauffeurs, or special requests..."
              className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-black hover:bg-zinc-900 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
        >
          Submit Charter Request <ArrowRight className="w-4 h-4 text-[#62C5ED]" />
        </button>
      </form>
    </div>
  );
}

// Main Default Export (Static Page wrapper)
export default function BookingPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      <Navbar />

      {/* HEADER BANNER */}
      <section className="relative h-[48vh] min-h-[380px] w-full flex items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/airphoto-1.jpg"
          alt="Private Jet Booking Header"
          fill
          priority
          className="object-cover object-center pointer-events-none"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65 pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3 pt-16 drop-shadow-md">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#62C5ED] font-extrabold block">
            Charter Desk
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Request a Charter Quote
          </h1>
          <p className="text-gray-100 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed drop-shadow">
            Fill out your itinerary below. Our charter team will analyze aircraft availability with certified operators and respond within 60 minutes.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Suspense boundary wrapping the async form component */}
          <Suspense fallback={<div className="lg:col-span-8 bg-[#62C5ED]/20 rounded-3xl p-12 text-center text-black font-bold">Loading charter desk options...</div>}>
            <BookingForm searchParams={searchParams} />
          </Suspense>

          {/* RIGHT COLUMN: What Happens Next Card */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="bg-black border border-[#62C5ED]/30 rounded-3xl p-8 space-y-6 shadow-2xl text-white">
              <h3 className="text-xl font-black text-white border-b border-white/10 pb-4">
                What Happens Next?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#62C5ED] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">60-Minute Response</h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-light mt-1">
                      Our Nairobi charter desk contacts operators and sends a formal quote straight to your email.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#62C5ED] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">AOC Certified Operators</h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-light mt-1">
                      All aircraft quotes are sourced strictly from valid Air Operator Certificate (AOC) holders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#62C5ED] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Ground Services</h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-light mt-1">
                      Optionally include VIP lounge access, tarmac vehicles, or helicopter connections to bush airstrips.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Need immediate assistance? Contact our dispatch desk directly at <span className="font-bold text-[#62C5ED]">info@noblehawkaviationlimited.com</span>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}