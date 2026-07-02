"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Award, ShieldCheck, Heart, Sparkles, Users } from "lucide-react";

// Unique data metrics mapped from scratch to match a world-class dental layout
const CORPORATE_METRIC_NODES = [
  { id: "01", stat: "25+", label: "Years of Practice", desc: "Delivering world-class healthcare innovation across regions.", icon: <Award className="h-5 w-5 text-sky-500"/> },
  { id: "02", stat: "10k+", label: "Smiles Designed", desc: "Precision cosmetic and restorative treatments tailored to you.", icon: <Sparkles className="h-5 w-5 text-cyan-400"/> },
  { id: "03", stat: "4.9★", label: "Patient Satisfaction", desc: "Top-tier rating backed by certified community trust metrics.", icon: <ShieldCheck className="h-5 w-5 text-blue-600"/> },
  { id: "04", stat: "12", label: "Elite Specialists", desc: "A multi-disciplinary clinical team handling complex procedures.", icon: <Users className="h-5 w-5 text-sky-600"/> }
];

export default function DeepCodedPremiumAbout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Native intersection implementation fallback for fluid activation tracking
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100 py-24 lg:py-36 px-6 overflow-hidden">
      
      {/* Background Micro Accent Grid Vectors - Rendered inside our proprietary layout theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none select-none z-0" />
      <div className="absolute bottom-12 left-0 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Hand Column Grid Block: Typography & Narrative */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[#1e3a5f]">
            <span>// OUR JOURNEY TO EXCELLENCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
            Redefining Dental Wellness{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-600 to-[#1e3a5f]">
              Through Trust and Pure Clinical Innovation.
            </span>
          </h2>

          <p className="text-zinc-600 font-sans text-base sm:text-lg leading-relaxed max-w-xl font-medium">
            At Bethany Dental Care, we reject boilerplate treatments. Our practice bridges state-of-the-art biological diagnostics with a warm, patient-first methodology to deliver a stellar clinical experience.
          </p>

          <button className="inline-flex items-center space-x-3 text-sm font-bold uppercase tracking-wider bg-[#1e3a5f] text-white px-8 py-4 rounded-xl shadow-xl hover:bg-[#152944] transition-all transform-gpu hover:scale-[1.02]">
            <span>Book Consultation</span>
            <ArrowUpRight className="h-4 w-4"/>
          </button>
        </div>

        {/* Right Hand Column Grid Block: Premium Custom Layout Metrics Array Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {CORPORATE_METRIC_NODES.map((cell) => (
            <div 
              key={cell.id}
              className="bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-2xl p-6 shadow-[0_10px_30px_rgba(30,58,95,0.04)] flex flex-col justify-between space-y-8 group transition-all duration-300 hover:border-sky-400 hover:-translate-y-1 transform-gpu"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 font-bold tracking-widest">// MODULE {cell.id}</span>
                <div className="p-2.5 bg-zinc-50 border border-zinc-100 rounded-xl group-hover:bg-sky-50 transition-colors">
                  {cell.icon}
                </div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-3xl sm:text-4xl font-sans font-black text-[#1e3a5f] tracking-tight group-hover:text-sky-600 transition-colors">
                  {cell.stat}
                </span>
                <span className="text-sm font-bold text-zinc-800 tracking-tight">{cell.label}</span>
                <p className="text-xs text-zinc-500 leading-relaxed pt-1.5 font-medium">{cell.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
