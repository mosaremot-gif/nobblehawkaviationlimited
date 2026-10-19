import Link from "next/link";
import { Mail, MapPin, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F4EF] text-[#0A0A0A] border-t-2 border-[#D4AF37] py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-zinc-300/80">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-xl font-black tracking-tight text-[#0A0A0A] uppercase">
                NOBLE HAWK <span className="text-[#62c5ed]">AVIATION</span>
              </span>
            </Link>
            <p className="text-xs md:text-sm font-light text-zinc-600 leading-relaxed max-w-sm">
              With a focus on safety, privacy, and convenience, Noble Hawk Aviation is your trusted charter broker for executive, cargo, safari flights across Africa, the Middle East, and Europe.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono pt-1">
              <Clock className="w-3.5 h-3.5 text-[#62c5ed]" />
              <span>24/7 Charter & Dispatch Operations</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-2">
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#62c5ed] font-bold">
              Navigation
            </h2>
            <ul className="space-y-1.5 text-xs text-zinc-600 font-light">
              <li>
                <Link href="/" className="hover:text-[#0A0A0A] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0A0A0A] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-[#0A0A0A] transition-colors">Aircraft Fleet</Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-[#0A0A0A] transition-colors">Charter Quote</Link>
              </li>
            </ul>
          </div>

          

          {/* 24/7 Contact Details & Action Button */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#62c5ed] font-bold">
              24/7 Advisory Desk
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#62c5ed] shrink-0 mt-0.5" />
                <span>Nairobi, Kenya ( JKIA )</span>
              </div>

              <a
                href="mailto:info@noblehawkaviationlimited.com"
                className="flex items-center gap-2 hover:text-[#62c5ed] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#62c5ed]" />
                <span className="truncate">info@noblehawkaviationlimited.com</span>
              </a>

              <div className="pt-2">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#62C5ED] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:bg-[#78ceef] transition-all shadow-md"
                >
                  Request Flight <ArrowUpRight className="w-4 h-4 text-black" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        

      </div>
    </footer>
  );
}