"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3 md:py-4 shadow-2xl"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 md:py-6 border-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between gap-3">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="text-sm sm:text-lg md:text-2xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-gray-200 transition-colors">
            NOBLE HAWK AVIATION<span className="text-[#62c5ed]"> LIMITED</span>
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white">
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

      </div>
    </header>
  );
}