"use client";

import React from "react";
import Link from "next/link";
import { PremiumIconButton } from "@/components/ui/button-with-icon";

export default function FloatingGlassNavbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50 transform-gpu">
      <div className="w-full bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        
        {/* Brand Vector Node Anchor */}
        <Link href="/" className="flex items-center space-x-2.5 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center">
            <span className="font-sans font-black text-white text-sm">B</span>
          </div>
          <span className="font-sans font-bold text-white text-base tracking-tight text-white">Bethany</span>
        </Link>

        {/* System Navigation Center Gaps */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-xs uppercase tracking-widest text-zinc-300 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Integrated Icon Trigger Element */}
        <div className="flex items-center">
          <Link href="/book-appointment">
            <PremiumIconButton 
              text="Book Appointment" 
              className="h-10 text-xs ps-5 pr-12"
            />
          </Link>
        </div>

      </div>
    </header>
  );
}

export { FloatingGlassNavbar as Navbar };

