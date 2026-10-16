"use client";

import { Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Plane, Calendar, Users, MapPin, CheckCircle2, ShieldCheck, Clock, Loader2 } from "lucide-react";

// Sub-component that safely awaits searchParams inside Suspense
function BookingForm({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      tripType: formData.get("tripType"),
      departure: formData.get("departure"),
      destination: formData.get("destination"),
      flightDate: formData.get("flightDate"),
      passengers: formData.get("passengers"),
      preferredAircraft: formData.get("preferredAircraft"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      notes: formData.get("notes"),
    };

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to submit request. Please try again.");
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="lg:col-span-8 bg-[#62C5ED] border border-[#62C5ED]/50 rounded-3xl p-12 shadow-2xl text-black text-center space-y-6">
        <div className="w-16 h-16 bg-black text-[#62C5ED] rounded-full flex items-center justify-center mx-auto shadow-xl">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-black text-black tracking-tight">Request Received Successfully!</h3>
        <p className="text-sm font-medium text-black max-w-md mx-auto leading-relaxed">
          Thank you. Your charter itinerary has been sent directly to our Nairobi dispatch desk at <span className="font-bold">info@noblehawkaviationlimited.com</span>. We will review availability and respond within 60 minutes.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-black text-white text-xs font-extrabold uppercase tracking-widest rounded-xl hover:bg-zinc-900 transition-all shadow-lg"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="lg:col-span-8 bg-[#62C5ED] border border-[#62C5ED]/50 rounded-3xl p-8 md:p-12 shadow-2xl text-black space-y-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {errorMsg && (
          <div className="p-4 bg-red-600 text-white rounded-xl text-xs font-bold">
            {errorMsg}
          </div>
        )}

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
              name="departure"
              type="text"
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
              name="destination"
              type="text"
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
              name="flightDate"
              type="date"
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
              name="passengers"
              type="number"
              min="1"
              max="100"
              defaultValue="1"
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
              name="preferredAircraft"
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
                name="fullName"
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
                name="email"
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
                name="phone"
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
                name="company"
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
              name="notes"
              rows={3}
              placeholder="Provide details on baggage requirements, tarmac chauffeurs, or special requests..."
              className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-black hover:bg-zinc-900 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 text-[#62C5ED] animate-spin" /> Submitting Request...
            </>
          ) : (
            <>
              Submit Charter Request <ArrowRight className="w-4 h-4 text-[#62C5ED]" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// Main Default Export
export default function BookingPage() {
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
          
          <Suspense fallback={<div className="lg:col-span-8 bg-[#62C5ED]/20 rounded-3xl p-12 text-center text-black font-bold">Loading charter desk options...</div>}>
            <BookingForm />
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