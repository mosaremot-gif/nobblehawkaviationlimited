"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Calendar, Users, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    departure: "",
    destination: "",
    date: "",
    pax: "4",
    aircraftType: "Midsize Jet (e.g. Citation Sovereign)",
    specialRequests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would connect this to your backend / dispatch API
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-skyline-black text-skyline-white relative overflow-hidden flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-skyline-gold font-bold bg-skyline-gold/10 px-4 py-1.5 rounded-full border border-skyline-gold/35">
            Flight Dispatch Desk
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 text-white">
            Secure Charter Booking
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed">
            Submit your itinerary details below. Our 24/7 operations team will review airspace clearances, match your mission with vetted global aircraft, and return a tailored quotation within 60 minutes.
          </p>
        </section>

        {/* Booking Form Section */}
        <section className="py-12 px-6 max-w-4xl mx-auto">
          {submitted ? (
            <div className="bg-skyline-charcoal border border-skyline-gold p-10 md:p-14 text-center space-y-6 rounded-2xl shadow-2xl">
              <div className="w-16 h-16 bg-skyline-gold/20 text-skyline-gold rounded-full flex items-center justify-center mx-auto border border-skyline-gold">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white">Charter Request Received</h2>
              <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your flight itinerary from <strong className="text-skyline-gold">{formData.departure || "Origin"}</strong> to <strong className="text-skyline-gold">{formData.destination || "Destination"}</strong> has been securely routed to our senior flight dispatchers.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-skyline-gold to-skyline-gold-dark text-skyline-black font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg"
                >
                  Submit Another Itinerary
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-skyline-charcoal border border-skyline-gold/30 rounded-2xl p-8 md:p-12 shadow-2xl space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                <Plane className="w-5 h-5 text-skyline-gold" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-white">Itinerary & Passenger Manifest</h2>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Lord/Lady or Mr. Vance"
                    className="w-full bg-black/80 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Corporate / Private Email *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exec@company.com"
                    className="w-full bg-black/80 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Secure Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    className="w-full bg-black/80 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold"
                  />
                </div>
              </div>

              {/* Route Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Departure Airport / City *</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-skyline-gold" />
                    <input
                      type="text"
                      required
                      name="departure"
                      value={formData.departure}
                      onChange={handleChange}
                      placeholder="e.g. Wilson Airport (WIL) or Nairobi"
                      className="w-full bg-black/80 border border-white/20 text-white pl-11 pr-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Destination Airport / City *</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-skyline-gold" />
                    <input
                      type="text"
                      required
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Masai Mara Airstrip or Dubai (OMDB)"
                      className="w-full bg-black/80 border border-white/20 text-white pl-11 pr-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Date, Passengers, Aircraft */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div>
                  <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Departure Date & Time *</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-skyline-gold" />
                    <input
                      type="date"
                      required
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-black/80 border border-white/20 text-white pl-11 pr-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Passenger Count *</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-3.5 w-4 h-4 text-skyline-gold" />
                    <select
                      name="pax"
                      value={formData.pax}
                      onChange={handleChange}
                      className="w-full bg-black/80 border border-white/20 text-white pl-11 pr-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold appearance-none"
                    >
                      <option value="1">1 Passenger (Solo VIP)</option>
                      <option value="2">2 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="6">6 Passengers</option>
                      <option value="9">9 Passengers (Midsize)</option>
                      <option value="14">14+ Passengers (Heavy/Airliner)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Preferred Aircraft Category *</label>
                  <select
                    name="aircraftType"
                    value={formData.aircraftType}
                    onChange={handleChange}
                    className="w-full bg-black/80 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold"
                  >
                    <option value="Turboprop / Bush Aircraft">Turboprop / Bush Aircraft (Safari)</option>
                    <option value="Light Jet">Light Jet (4–7 Pax)</option>
                    <option value="Midsize Jet">Midsize Jet (8–9 Pax)</option>
                    <option value="Heavy Jet">Heavy Jet (10–14 Pax)</option>
                    <option value="Ultra-Long-Range">Ultra-Long-Range (Global V/6000)</option>
                    <option value="VIP Airliner (BBJ)">VIP Airliner (BBJ / Corporate)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="pt-2">
                <label className="block text-xs uppercase font-mono text-gray-300 mb-2">Special Concierge Instructions (Optional)</label>
                <textarea
                  rows={3}
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Specify tarmac motorcade requirements, dietary catering restrictions, or close protection needs..."
                  className="w-full bg-black/80 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-skyline-gold resize-none"
                ></textarea>
              </div>

              {/* Trust Badge & Submit Button */}
              <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-skyline-gold shrink-0" />
                  <span>Encrypted transmission & strict confidentiality guaranteed.</span>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-skyline-gold to-skyline-gold-dark text-skyline-black font-bold text-xs uppercase tracking-wider px-10 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-skyline-gold/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Dispatch Charter Request
                </button>
              </div>
            </form>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}