"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  const slides = [
    {
      type: "image",
      src: "/hero-2.jpg",
    },
    {
      type: "video",
      src: "/flight.mp4",
    },
    {
      type: "image",
      src: "/airphoto-2.jpg",
    },
    {
      type: "image",
      src: "/hero-1.avif",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Fixed interval setup to avoid unnecessary timer resets
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[current];

  return (
    <div className="w-full">
      {/* Top Full-Width Banner */}
      <div className="relative w-full h-[450px] md:h-[580px] pt-24 overflow-hidden bg-black group">
        
        {/* Conditional Rendering for Image vs Video Slide */}
        {activeSlide.type === "image" ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            style={{ backgroundImage: `url('${activeSlide.src}')` }}
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
          >
            <source src={activeSlide.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Subtle Vignette Edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none z-10" />

        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          type="button"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 text-white/60 hover:bg-black/60 hover:text-[#62C5ED] transition-all flex items-center justify-center backdrop-blur-sm cursor-pointer border border-white/10"
          title="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          type="button"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 text-white/60 hover:bg-black/60 hover:text-[#62C5ED] transition-all flex items-center justify-center backdrop-blur-sm cursor-pointer border border-white/10"
          title="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}