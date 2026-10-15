"use client";

import { useState } from "react";
import { Plane, Calendar, Users, Search, ArrowLeftRight } from "lucide-react";

export default function HeroSearch() {
  const [tripType, setTripType] = useState<"roundTrip" | "oneWay">("roundTrip");
  const [origin, setOrigin] = useState("New York (JFK)");
  const [destination, setDestination] = useState("London (LHR)");

  const swapLocations = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-skyline-charcoal/80 border border-skyline-gold/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl shadow-skyline-gold/5">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 bg-black/40 p-1 rounded-lg border border-white/5">
          <button
            type="button"
            onClick={() => setTripType("roundTrip")}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
              tripType === "roundTrip"
                ? "bg-skyline-gold text-skyline-black shadow-md shadow-skyline-gold/20"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Round Trip
          </button>
          <button
            type="button"
            onClick={() => setTripType("oneWay")}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
              tripType === "oneWay"
                ? "bg-skyline-gold text-skyline-black shadow-md shadow-skyline-gold/20"
                : "text-gray-300 hover:text-white"
            }`}
          >
            One Way
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-gray-300">
          <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
            <Users className="w-4 h-4 text-skyline-gold" />
            <select className="bg-transparent text-white focus:outline-none cursor-pointer">
              <option value="1" className="bg-skyline-charcoal">1 Passenger</option>
              <option value="2" className="bg-skyline-charcoal">2 Passengers</option>
              <option value="3" className="bg-skyline-charcoal">3 Passengers</option>
              <option value="4" className="bg-skyline-charcoal">4+ Passengers</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
            <Plane className="w-4 h-4 text-skyline-gold" />
            <select className="bg-transparent text-white focus:outline-none cursor-pointer">
              <option value="first" className="bg-skyline-charcoal">First Class</option>
              <option value="business" className="bg-skyline-charcoal">Business Class</option>
              <option value="private" className="bg-skyline-charcoal">Private Jet Suite</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2 relative bg-black/50 p-3 rounded-xl border border-white/10">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-skyline-gold font-semibold mb-1">
              From
            </label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full bg-transparent text-white font-medium text-sm focus:outline-none"
              placeholder="Origin airport"
            />
          </div>

          <button
            type="button"
            onClick={swapLocations}
            className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-skyline-charcoal border border-skyline-gold/50 text-skyline-gold items-center justify-center hover:bg-skyline-gold hover:text-skyline-black transition-all shadow-md"
            title="Swap origin and destination"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </button>

          <div className="sm:text-right">
            <label className="block text-[10px] uppercase tracking-widest text-skyline-gold font-semibold mb-1">
              To
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-white font-medium text-sm sm:text-right focus:outline-none"
              placeholder="Destination airport"
            />
          </div>
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-2 bg-black/50 p-3 rounded-xl border border-white/10">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-skyline-gold font-semibold mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Departure
            </label>
            <input
              type="date"
              defaultValue="2026-11-01"
              className="w-full bg-transparent text-white font-medium text-xs focus:outline-none cursor-pointer"
            />
          </div>

          {tripType === "roundTrip" && (
            <div className="border-l border-white/10 pl-3">
              <label className="block text-[10px] uppercase tracking-widest text-skyline-gold font-semibold mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Return
              </label>
              <input
                type="date"
                defaultValue="2026-11-10"
                className="w-full bg-transparent text-white font-medium text-xs focus:outline-none cursor-pointer"
              />
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <button
            type="button"
            className="w-full h-14 bg-gradient-to-r from-skyline-gold via-skyline-gold-light to-skyline-gold-dark text-skyline-black font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-skyline-gold/20 hover:brightness-110 transition-all active:scale-[0.98]"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}