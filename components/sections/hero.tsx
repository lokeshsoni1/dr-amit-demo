"use client";

import React, { useState, useEffect } from "react";
import { PremiumIconButton } from "@/components/ui/button-with-icon";
import { Stethoscope, ShieldAlert, Clock } from "lucide-react";

// Production Cloudinary CDN Image Registry Asset Array Map
const CDN_SLIDESHOW_RESOURCES = [
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996879/hero4_gebfei.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996879/hero2_uqlsgl.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996879/hero1_v9rgof.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996880/hero5_ska1po.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996880/hero3_rst29y.jpg"
];

export default function CloudinaryOptimizedHero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    // Rigid 4000ms Chrono Synchronization Loop Engine
    const tickerTimelineId = setInterval(() => {
      setActiveSlideIndex((currentStack) => (currentStack + 1) % CDN_SLIDESHOW_RESOURCES.length);
    }, 4000);
    return () => clearInterval(tickerTimelineId);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen bg-[#09090b] pt-36 pb-6 px-4 md:px-8 flex flex-col justify-between overflow-hidden">
      
      {/* ================================================================================= */}
      {/* HARDWARE-ACCELERATED CLOUDINARY ENGINE STACK FRAME LAYER */}
      {/* ================================================================================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {CDN_SLIDESHOW_RESOURCES.map((cdnUrl, trackingIndex) => (
          <div
            key={cdnUrl}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out transform scale-105 will-change-opacity ${
              trackingIndex === activeSlideIndex ? "opacity-35" : "opacity-0"
            }`}
            style={{ 
              backgroundImage: `url('${cdnUrl}')`,
              contain: "strict"
            }}
          />
        ))}
        
        {/* Anti-Glare Overlay Panel: Strict 2.5% Premium Dark Blur Matrix Mask Filter Layer */}
        <div 
          className="absolute inset-0 bg-[#09090b]/25 backdrop-blur-[3px] z-10 mix-blend-multiply" 
          style={{ contain: "layout paint style" }}
        />
      </div>

      {/* ================================================================================= */}
      {/* CORE HERO INTERFACE GRID SYSTEM (FULLY PRESERVED & SECURED LAYER) */}
      {/* ================================================================================= */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 my-auto">
        
        {/* Left Typography Branding Vector Container */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left items-start">
          <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] drop-shadow-md">
            Trusted Dental Care <br />for Every Generation
          </h1>
          <p className="font-sans text-sm sm:text-base text-zinc-200 max-w-xl leading-relaxed font-medium drop-shadow-sm">
            We combine modern technology with heartfelt service to ensure every generation enjoys a healthier, more confident smile.
          </p>
          
          {/* Slidable Premium Action Button Target */}
          <PremiumIconButton 
            text="Book a Visit" 
            className="mt-2 scale-105 shadow-xl transform-gpu transition-all active:scale-[0.98]"
            onClick={() => document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" })}
          />
        </div>

        {/* Right High-Converting Callback Interactive Widget Node */}
        <div className="lg:col-span-5 bg-white rounded-[2rem] p-8 flex flex-col space-y-6 text-black shadow-2xl max-w-md w-full lg:justify-self-end border border-zinc-100 relative z-30">
          <div className="flex flex-col space-y-1.5">
            <h3 className="font-sans font-bold text-2xl tracking-tight text-zinc-900">Book a visit</h3>
            <p className="font-sans text-xs text-zinc-500 font-medium">Get a callback within 10 minutes</p>
          </div>
          
          <form className="flex flex-col space-y-3.5" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-zinc-400 font-medium text-zinc-900 placeholder:text-zinc-400"
            />
            <input 
              type="tel" 
              placeholder="Phone number" 
              className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-zinc-400 font-medium text-zinc-900 placeholder:text-zinc-400"
            />
            <button 
              type="submit" 
              className="w-full py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-[0.99] transform-gpu"
            >
              Request a callback
            </button>
          </form>

          <p className="font-sans text-[11px] text-zinc-400 font-medium text-center">
            No spam. A real person calls you back, fast.
          </p>
        </div>

      </div>

      {/* ================================================================================= */}
      {/* LOWER FLOATING GLASSMORPHISM DATA METRICS (image_7ca0fc.jpg MATRIX HARMONY) */}
      {/* ================================================================================= */}
      <div className="max-w-7xl mx-auto w-full relative z-20 mt-12 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Grid Terminal 01: Booking Trigger Link */}
          <div className="p-6 flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-white font-sans font-bold text-sm tracking-wide">Get An Appointment</span>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                Ready for a healthier smile? Book your visit today. <span className="text-cyan-400 underline cursor-pointer font-medium">Click here</span>
              </p>
            </div>
          </div>

          {/* Grid Terminal 02: Emergency Pipeline Info */}
          <div className="p-6 flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-rose-400">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-white font-sans font-bold text-sm tracking-wide">Emergency Contact</span>
              <p className="text-zinc-300 font-mono text-xs leading-relaxed">
                Call: <span className="font-sans font-bold text-white">+91 9307512816</span> <br />
                Email: <span className="text-zinc-400 hover:text-white transition-colors">hello@lumoradental.com</span>
              </p>
            </div>
          </div>

          {/* Grid Terminal 03: Temporal Operational Framework */}
          <div className="p-6 flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-cyan-400">
              <Clock className="h-5 w-5" />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <span className="text-white font-sans font-bold text-sm tracking-wide">Clinic Operating Hours</span>
              <div className="flex justify-between text-zinc-300 font-sans text-xs pr-2">
                <span>Mon - Fri:</span>
                <span className="font-mono text-white font-semibold">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-zinc-300 font-sans text-xs pr-2">
                <span>Sat - Sun:</span>
                <span className="font-mono text-white font-semibold">9:30 - 17:30</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
