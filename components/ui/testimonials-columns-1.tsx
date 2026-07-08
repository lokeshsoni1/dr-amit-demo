"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: { className?: string; testimonials: any[]; duration?: number; }) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration: props.duration || 10, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="p-10 rounded-3xl border border-primary/10 dark:border-white/10 shadow-lg bg-white dark:bg-zinc-900/80 backdrop-blur-md max-w-xs w-full transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform" 
                key={`${index}-${i}`}
              >
                <div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">"{text}"</div>
                <div className="flex items-center gap-2 mt-5">
                  <img 
                    width={40} 
                    height={40} 
                    src={image} 
                    alt={name} 
                    className="h-10 w-10 rounded-full object-cover" 
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/100x100/e2e8f0/64748b?text=${name.charAt(0)}`;
                      e.currentTarget.onerror = null;
                    }}
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-white leading-5">{name}</div>
                    <div className="text-xs text-zinc-500 leading-5 opacity-80 tracking-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
