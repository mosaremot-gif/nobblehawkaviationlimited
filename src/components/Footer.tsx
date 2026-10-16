import Link from "next/link";
import { Mail, MapPin, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#62c5ed] text-[#0A0A0A] border-t-2 border-[#D4AF37] py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-zinc-300/80">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-xl font-black tracking-tight text-[#0A0A0A] uppercase">
                NOBLE HAWK <span className="text-white">AVIATION</span>
              </span>
            </Link>
            <p className="text-xs md:text-sm font-light text-white leading-relaxed max-w-sm">
              With a focus on safety, privacy, and convenience, Noble Hawk Aviation is your trusted charter broker for executive, cargo, and bush safari flights across Africa, the Middle East, and Europe.
            </p>
            
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-2">
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-black font-bold">
              Navigation
            </h2>
            <ul className="space-y-1.5 text-xs text-white font-light">
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
                <Link href="/booking" className="hover:text-[#0A0A0A] transition-colors">Request Quote</Link>
              </li>
            </ul>
          </div>

          

          {/* 24/7 Contact Details */}
          <div className="lg:col-span-3 space-y-2">
            
            <div className="space-y-2.5 text-xs text-white">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <span>Nairobi, Kenya (Wilson Airport & JKIA Hubs)</span>
              </div>

              <a
                href="mailto:info@noblehawkaviationlimited.com"
                className="flex items-center gap-2 hover:text-[#62c5ed] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-black" />
                <span className="truncate">info@noblehawkaviationlimited.com</span>
              </a>

              
            </div>
          </div>

        </div>


      </div>
    </footer>
  );
}