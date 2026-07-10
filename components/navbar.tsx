"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PremiumIconButton } from "@/components/ui/button-with-icon";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function FloatingGlassNavbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50 transform-gpu">
      <div className="w-full bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        
        {/* Brand Vector Node Anchor */}
        <Link href="/" className="flex items-center space-x-2.5 cursor-pointer">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 3 / "Bethany".length,
                }
              }
            }}
            style={{ 
              fontFamily: "var(--font-caveat), cursive",
              willChange: "transform, opacity" 
            }}
            className="text-3xl font-extrabold tracking-[0.18em] text-white flex select-none transform-gpu scale-100 origin-left"
          >
            {Array.from("Bethany").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 5 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: {
                      duration: 3 / "Bethany".length,
                      ease: "easeOut"
                    }
                  }
                }}
                className="inline-block transform-gpu"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </Link>

        {/* System Navigation Center Gaps (Hidden <= 1024px) */}
        <nav className="hidden lg:flex items-center space-x-8 font-sans text-xs uppercase tracking-widest text-zinc-300 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTA (Hidden <= 1024px) */}
        <div className="hidden lg:flex items-center">
          <Link href="/book-appointment">
            <PremiumIconButton 
              text="Book Appointment" 
              className="h-10 text-xs ps-5 pr-12"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Drawer overlay (Visible <= 1024px) */}
        <div className="flex lg:hidden items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-1 hover:opacity-80 transition-opacity focus:outline-none">
                <Menu className="h-6 w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 text-white w-80 p-8 flex flex-col justify-between z-[100] transform-gpu will-change-[transform,opacity]">
              <div className="flex flex-col space-y-8 mt-12">
                <div style={{ fontFamily: "var(--font-caveat), cursive" }} className="text-3xl font-extrabold text-white tracking-[0.18em]">
                  Bethany
                </div>
                <nav className="flex flex-col space-y-6 text-base font-sans font-semibold tracking-wider text-zinc-300">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                  <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                  <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </nav>
              </div>
              <div className="flex flex-col space-y-4">
                <Link href="/book-appointment" className="w-full">
                  <PremiumIconButton 
                    text="Book Appointment" 
                    className="w-full h-12 text-sm justify-center ps-6 pr-14"
                  />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

export { FloatingGlassNavbar as Navbar };


