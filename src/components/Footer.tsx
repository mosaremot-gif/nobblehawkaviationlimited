import Link from "next/link";
import { PhoneCall, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F4EF] text-[#0A0A0A] border-t-2 border-[#D4AF37] py-10 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-zinc-300/80">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-xl font-black tracking-tight text-[#0A0A0A]">
                NOBLE HAWK AVIATION<span className="text-[#62c5ed]"> LIMITED</span>
              </span>
            </Link>
           
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-700">
              <ShieldCheck className="w-3.5 h-3.5 text-[#62c5ed]" />
              <span>CAA & FAA Part 135 Compliant Network</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#62c5ed] font-bold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-600 font-light">
              <li><Link href="/" className="hover:text-[#0A0A0A] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#0A0A0A] transition-colors">About Us</Link></li>
              <li><Link href="/fleet" className="hover:text-[#0A0A0A] transition-colors">Aircraft Fleet</Link></li>
              <li><Link href="/booking" className="hover:text-[#0A0A0A] transition-colors">Charter Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#62c5ed] font-bold">
              Flight Solutions
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-600 font-light">
              <li><Link href="/booking" className="hover:text-[#0A0A0A] transition-colors">Executive & Diplomatic Charter</Link></li>
              <li><Link href="/booking" className="hover:text-[#0A0A0A] transition-colors">Wilderness & Safari Airstrip</Link></li>
              <li><Link href="/booking" className="hover:text-[#0A0A0A] transition-colors">Intercontinental Heavy Jets</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#62c5ed] font-bold">
              24/7 Advisory Desk
            </h4>
            <div className="space-y-2 text-xs text-zinc-700">
              
              <a href="mailto:charter@skylineair.com" className="flex items-center gap-2 hover:text-[#62c5ed] transition-colors font-medium">
                <Mail className="w-3.5 h-3.5 text-[#62c5ed]" />
                <span>info@noblehawkaviationlimited.com</span>
              </a>
              
            </div>
          </div>

        </div>

        {/* Compact Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-zinc-500">
          <p>© 2026 Skyline Air Ltd. All rights reserved.</p>
          
        </div>

      </div>
    </footer>
  );
}
