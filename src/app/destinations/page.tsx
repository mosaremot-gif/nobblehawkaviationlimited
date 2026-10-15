import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DestinationsPage() {
  const destinations = [
    { city: "Paris", country: "France", code: "CDG", tag: "First Class" },
    { city: "Dubai", country: "UAE", code: "DXB", tag: "Private Suite" },
    { city: "New York", country: "United States", code: "JFK", tag: "Global Hub" },
    { city: "Tokyo", country: "Japan", code: "HND", tag: "Exclusive" },
  ];

  return (
    <main className="min-h-screen bg-skyline-black text-skyline-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <span className="text-xs uppercase tracking-[0.3em] text-skyline-gold font-semibold bg-skyline-gold/10 px-4 py-1.5 rounded-full border border-skyline-gold/30">
          Global Network
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6">
          Featured <span className="text-skyline-gold">Destinations</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-base">
          Explore world-class destinations serviced by our premier private charters and first-class cabins.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {destinations.map((dest, idx) => (
            <div key={idx} className="bg-skyline-charcoal border border-skyline-gold/20 rounded-2xl p-6 relative overflow-hidden group hover:border-skyline-gold transition-all">
              <div className="absolute top-4 right-4 bg-skyline-gold/10 text-skyline-gold text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full border border-skyline-gold/20">
                {dest.tag}
              </div>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{dest.country}</span>
              <h3 className="text-2xl font-bold mt-1 text-white">{dest.city}</h3>
              <p className="text-skyline-gold font-mono text-lg mt-2">{dest.code}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}