"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6 border-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-gray-200 transition-colors">
            NOBBLE HAWK AVIATION<span className="text-[#62c5ed]"> LIMITED</span>
          </span>
          <span className="hidden sm:inline-block h-4 w-px bg-white/40 ml-2" />
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-gray-200 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Private Desk
          </span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS - Invisible initially, fades in smoothly on scroll */}
        <nav
          className={`hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 ${
            scrolled
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <Link
            href="/"
            className="hover:text-[#62C5ED] transition-colors relative py-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#62C5ED] hover:after:w-full after:transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#62C5ED] transition-colors relative py-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#62C5ED] hover:after:w-full after:transition-all"
          >
            About
          </Link>
          <Link
            href="/fleet"
            className="hover:text-[#62C5ED] transition-colors relative py-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#62C5ED] hover:after:w-full after:transition-all"
          >
            Fleet
          </Link>
          <Link
            href="/booking"
            className="hover:text-[#62C5ED] transition-colors relative py-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#62C5ED] hover:after:w-full after:transition-all"
          >
            Charter Rates
          </Link>
        </nav>

        {/* ACTION BUTTON & CONTACT */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+254700000000"
            className="flex items-center gap-2 text-xs font-mono text-white hover:text-[#62C5ED] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#62C5ED]" />
            <span>24/7 Desk</span>
          </a>

          <Link
            href="/booking"
            className="px-5 py-2.5 bg-[#62C5ED] text-black text-xs font-bold uppercase rounded-lg hover:bg-[#78ceef] transition-all shadow-[0_0_15px_rgba(98,197,237,0.35)]"
          >
            Request Flight
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#62C5ED]" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-semibold uppercase tracking-wider text-gray-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#62C5ED] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#62C5ED] transition-colors"
            >
              About
            </Link>
            <Link
              href="/fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#62C5ED] transition-colors"
            >
              Fleet
            </Link>
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#62C5ED] transition-colors"
            >
              Charter Rates
            </Link>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-xs font-mono text-gray-300"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#62C5ED]" />
              <span>+254 (0) 700 000 000</span>
            </a>
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 bg-[#62C5ED] text-black text-xs font-bold uppercase rounded-lg"
            >
              Request Flight
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}