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
  
  // Scroll mapping for desktop stacking sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mobile interval auto-fading sheet logic
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileActiveIndex((prev) => (prev + 1) % values.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Desktop scrolling stacking engine (>1024px) */}
      <div ref={containerRef} className="hidden lg:block relative min-h-[300vh] bg-primary text-primary-foreground overflow-visible transform-gpu">
        {/* Background ambient elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-cyan rounded-full blur-[120px]" />
        </div>

        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-8">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header content */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <SectionHeading
                badge="Why Choose Us"
                title="Healthcare You Can Trust"
                description="At Bethany Dental Care, we combine dental excellence with genuine compassion to deliver oral care that truly makes a difference."
                light
              />
            </div>

            {/* Right stack layers */}
            <div className="lg:col-span-7 relative h-[500px] w-full flex items-center justify-center">
              {values.map((value, index) => {
                // Determine card scrolling threshold progress
                const startProgress = index * 0.22;
                const endProgress = startProgress + 0.25;

                // Stable desktop scroll entry reveal mapping configurations
                const stableScrollVariant = {
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                  }
                };

                return (
                  <motion.div
                    key={value.title}
                    variants={stableScrollVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                      background: "rgba(245, 250, 255, 0.08)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(200, 230, 255, 0.16)",
                      borderRadius: "24px",
                      padding: "2.5rem",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      zIndex: index + 1,
                      willChange: "transform, opacity, backdrop-filter"
                    }}
                    className="absolute w-[480px] max-w-full flex flex-col items-start text-left transform-gpu"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {value.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-base leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Stacking Fader view (<=1024px) */}
      <div className="lg:hidden w-full py-16 bg-primary text-primary-foreground relative overflow-hidden flex flex-col items-center">
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
            light
          />

          <div className="relative w-full max-w-[94vw] h-[280px] mt-10 flex items-center justify-center">
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
                    padding: "2.5rem",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    willChange: "transform, opacity"
                  }}
                  className="absolute inset-0 flex flex-col items-center text-center justify-center transform-gpu"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {value.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
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
