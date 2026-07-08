"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const testimonials = [
  {
    quote: "Bethany Dental Care completely changed how I view dental visits. The state-of-the-art Rockefeller Center suite and zero-anxiety methodology are unparalleled.",
    name: "Priya Sharma",
    designation: "Data Scientist at QuantumLeap",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    quote: "The visual diagnostics and surgical accuracy left me amazed. They respect your time—I was in the chair exactly 2 minutes after arriving.",
    name: "Marcus Johnson",
    designation: "Head of Operations at Synergy Corp",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    quote: "Unmatched clinical professionalism. Their emergency coordination team handled my sudden acute cosmetic fracture in less than an hour on a weekend.",
    name: "Isabella Rossi",
    designation: "Client Success Manager at Horizon",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    quote: "The preventative mapping telemetry caught my enamel friction points before they became painful. This is high-velocity healthcare for professionals.",
    name: "Kenji Tanaka",
    designation: "Software Engineer at CodeCrafters",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "The structural returns on oral wellness are evident immediately. Bethany streamlined my diagnostic roadmap and saved me valuable hours.",
    name: "Fatima Al-Jamil",
    designation: "CFO at Apex Financial",
    src: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop"
  }
];

type Testimonial = { quote: string; name: string; designation: string; src: string; };

export const AnimatedTestimonials = ({ testimonialsList = testimonials, autoplay = true }: { testimonialsList?: Testimonial[]; autoplay?: boolean; }) => {
  const [active, setActive] = useState(0);
  const handleNext = React.useCallback(() => { setActive((prev) => (prev + 1) % testimonialsList.length); }, [testimonialsList.length]);
  const handlePrev = () => { setActive((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length); };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;
  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 relative z-20">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20">
        <div className="flex items-center justify-center">
            <div className="relative h-80 w-full max-w-xs">
              <AnimatePresence>
                {testimonialsList.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{ opacity: 0, scale: 0.9, y: 50, rotate: randomRotate() }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.5,
                      scale: isActive(index) ? 1 : 0.9,
                      y: isActive(index) ? 0 : 20,
                      zIndex: isActive(index) ? testimonialsList.length : testimonialsList.length - Math.abs(index - active),
                      rotate: isActive(index) ? '0deg' : randomRotate(),
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom transform-gpu will-change-transform"
                    style={{ perspective: '1000px' }}
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover shadow-2xl"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${testimonial.name.charAt(0)}`;
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
        </div>
        <div className="flex flex-col justify-center py-4 relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col justify-between transform-gpu will-change-transform"
            >
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{testimonialsList[active].name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{testimonialsList[active].designation}</p>
                    <motion.p className="mt-8 text-lg text-slate-700 dark:text-slate-300 transform-gpu will-change-transform">"{testimonialsList[active].quote}"</motion.p>
                </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12">
            <button onClick={handlePrev} aria-label="Previous" className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer">
              <ArrowLeft className="h-5 w-5 text-slate-800 transition-transform duration-300 group-hover:-translate-x-1 dark:text-slate-300" />
            </button>
            <button onClick={handleNext} aria-label="Next" className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer">
              <ArrowRight className="h-5 w-5 text-slate-800 transition-transform duration-300 group-hover:translate-x-1 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnimatedTestimonials;
