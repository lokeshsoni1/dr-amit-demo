"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Heart, Shield, Clock, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Every patient is treated with empathy, dignity, and respect in a warm, welcoming environment.",
  },
  {
    icon: Shield,
    title: "Advanced Diagnostics",
    description:
      "State-of-the-art medical equipment ensuring accurate diagnosis and effective treatment.",
  },
  {
    icon: Clock,
    title: "Convenient Access",
    description:
      "Flexible scheduling, minimal wait times, and home visit options for your convenience.",
  },
  {
    icon: Award,
    title: "Expert Excellence",
    description:
      "Led by Dr. Sarah Bethany with years of experience in comprehensive dental care.",
  },
];

export function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate natural page scroll offsets dynamically using Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mobile interval auto-fading sheet logic (soft pop-scale transitions)
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileActiveIndex((prev) => (prev + 1) % values.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Desktop Motion Engine Framework (> 1024px VIEWPORTS) */}
      <div ref={containerRef} className="hidden lg:block relative w-full min-h-[400vh] bg-transparent">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Background ambient elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-cyan rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-8 relative z-10">
            
            {/* Left Header content */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <SectionHeading
                badge="Why Choose Us"
                title="Healthcare You Can Trust"
                description="At Bethany Dental Care, we combine dental excellence with genuine compassion to deliver oral care that truly makes a difference."
                light={false}
              />
            </div>

            {/* Right stack layers */}
            <div className="lg:col-span-7 relative h-[500px] w-full flex items-center justify-center">
              {values.map((value, index) => {
                // Determine card scrolling threshold progress mathematically for staggered layering
                const startProgress = index * 0.22;
                const endProgress = startProgress + 0.22;

                const y = useTransform(
                  scrollYProgress,
                  [0, startProgress, Math.min(startProgress + 0.1, 1), Math.min(endProgress, 1), Math.min(endProgress + 0.1, 1)],
                  ["80vh", "80vh", "0px", "0px", "-20px"]
                );

                const scale = useTransform(
                  scrollYProgress,
                  [0, startProgress, Math.min(startProgress + 0.1, 1), Math.min(endProgress, 1), Math.min(endProgress + 0.1, 1)],
                  [0.9, 0.9, 1, 1, 0.94]
                );

                const opacity = useTransform(
                  scrollYProgress,
                  [0, startProgress, Math.min(startProgress + 0.1, 1), Math.min(endProgress, 1), Math.min(endProgress + 0.1, 1)],
                  [0, 0, 1, 1, 0.5]
                );

                return (
                  <motion.div
                    key={value.title}
                    style={{
                      y,
                      scale,
                      opacity,
                      background: "rgba(245, 250, 255, 0.08)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(200, 230, 255, 0.16)",
                      borderRadius: "24px",
                      padding: "3rem",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      zIndex: index + 1,
                      willChange: "transform, opacity, backdrop-filter"
                    }}
                    className="absolute w-[480px] max-w-full flex flex-col items-start text-left transform-gpu"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                      <value.icon className="w-8 h-8 text-[#09090b]" />
                    </div>
                    {/* Typography color re-themed to high-contrast deep bold colors */}
                    <h3 className="text-2xl font-black mb-4 text-[#09090b]">
                      {value.title}
                    </h3>
                    <p className="text-[#09090b]/80 text-base leading-relaxed font-semibold">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Motion Engine Framework (<= 1024px VIEWPORTS - IOS & ANDROID) */}
      <div className="lg:hidden w-full py-16 bg-zinc-50 relative overflow-hidden flex flex-col items-center">
        {/* Background ambient elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          <SectionHeading
            badge="Why Choose Us"
            title="Healthcare You Can Trust"
            description="At Bethany Dental Care, we combine dental excellence with genuine compassion to deliver oral care that truly makes a difference."
            light={false}
          />

          {/* Auto-Fading Layout Sheets with soft pop-scale adjustments */}
          <div className="relative w-[94vw] min-h-[40vh] mt-10 flex items-center justify-center">
            {values.map((value, index) => {
              const isActive = index === mobileActiveIndex;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.96,
                    zIndex: isActive ? 10 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    background: "rgba(245, 250, 255, 0.08)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(200, 230, 255, 0.16)",
                    borderRadius: "24px",
                    padding: "3rem",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    willChange: "transform, opacity, backdrop-filter"
                  }}
                  className="absolute inset-0 flex flex-col items-center text-center justify-center transform-gpu"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-[#09090b]" />
                  </div>
                  {/* High contrast deep bold colors */}
                  <h3 className="text-xl font-black mb-2 text-[#09090b]">
                    {value.title}
                  </h3>
                  <p className="text-[#09090b]/80 text-sm leading-relaxed max-w-sm font-semibold">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

