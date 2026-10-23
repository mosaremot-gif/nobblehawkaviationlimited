"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

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
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent border-none"
      }`}
    >
      {/* Container: pl-4 sm:pl-6 md:pl-12 sets left padding, pr-0 ensures right image touches the far right edge */}
      <div className="w-full pl-4 sm:pl-6 md:pl-12 pr-0 flex items-center justify-between gap-4 relative h-16 sm:h-20">
        
        {/* LEFT: BRAND LOGO */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 py-2">
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border border-white/20 shadow-xl shrink-0 bg-white flex items-center justify-center">
            <Image
              src="/NHAL logo.png"
              alt="Noble Hawk Aviation Limited Logo"
              fill
              sizes="(max-width: 768px) 44px, 52px"
              className="object-contain scale-[1.25]"
              priority
              unoptimized
            />
          </div>

          {/* Hidden on mobile, appears on sm screens and up */}
          <span className="hidden sm:inline text-sm md:text-base font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-gray-200 transition-colors">
            NOBLE HAWK AVIATION<span className="text-[#62c5ed]"> LIMITED</span>
          </span>
        </Link>

        {/* MIDDLE: NAVIGATION LINKS (Fades in on scroll & pushed right on PC) */}
        <nav
          className={`hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-wider uppercase text-white transition-all duration-500 md:ml-46 ${
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

        {/* RIGHT: MOBILE TOGGLE & FAR-RIGHT FLUSH IMAGE */}
        <div className="flex items-center gap-4 ml-auto h-full">
          
          {/* STANDARD HAMBURGER MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-[#62C5ED] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#62C5ED]" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {/* FAR-RIGHT FLUSH SHIELD GRAPHIC */}
          <div
            className={`relative h-full w-24 sm:w-28 shrink-0 flex items-center justify-end transition-all duration-500 ${
              scrolled
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <Image
              src="/haw.png"
              alt="Executive Shield Graphic"
              fill
              sizes="(max-width: 768px) 96px, 112px"
              className="object-contain object-right h-full w-full mix-blend-screen -translate-x-[2px]"
              priority
              unoptimized
            />
          </div>

        </div>

      </div>

      {/* EXECUTIVE FLOATING GLASS MOBILE DROPDOWN */}
      <div
        className={`absolute top-full left-4 right-4 mt-2 bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-1">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Executive Fleet", href: "/fleet" },
            { name: "Charter Rates & Booking", href: "/booking" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-[#62C5ED] transition-all group"
            >
              <span>{item.name}</span>
              <ChevronRight className="w-4 h-4 text-[#62C5ED] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </nav>

        {/* NAIROBI HQ CONTACT STRIP */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
          <span className="text-[#62C5ED] font-bold">Nairobi HQ</span>
          <span>Wilson Airport & JKIA</span>
        </div>
      </div>
    </header>
  );
}