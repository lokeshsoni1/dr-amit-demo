"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, Calendar, ArrowRight, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

// 9 diverse real-world dental testimonials for the 3 columns
const col1 = [
  {
    text: "Invisalign treatment was flawless. My smile is completely straight and the process was virtually invisible.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop",
    name: "Liam Vance",
    role: "Creative Director"
  },
  {
    text: "Root canal was absolute zero pain. Dr. Sarah used advanced sedation and it was over before I knew it.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop",
    name: "Elena Rostova",
    role: "Product Manager"
  },
  {
    text: "The Preventative Bio-Telemetry Mapping saved my enamel. They caught my night friction early.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
    name: "Arthur Pendelton",
    role: "Financial Analyst"
  }
];

const col2 = [
  {
    text: "Cosmetic Smile Design exceeded all expectations. My confidence has skyrocketed!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&auto=format&fit=crop",
    name: "Chloe Henderson",
    role: "Marketing Lead"
  },
  {
    text: "State-of-the-art Rockefeller suite is spectacular. Zero anxiety dental care at its finest.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop",
    name: "David Kim",
    role: "Software Architect"
  },
  {
    text: "Advanced Orthodontics resolved my bite alignment issues. Outstanding clinical professionalism.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",
    name: "Sofia Martinez",
    role: "UX Designer"
  }
];

const col3 = [
  {
    text: "The Neuromuscular Oral Sedation is a game changer for dental phobia. Truly anxiety-free.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=120&auto=format&fit=crop",
    name: "James O'Connor",
    role: "Executive Director"
  },
  {
    text: "Clean, sterile suites and absolute scheduling precision. I was in the chair within 2 minutes.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&auto=format&fit=crop",
    name: "Yasmin Al-Fayed",
    role: "Managing Director"
  },
  {
    text: "Their emergency cosmetic reconstruction resolved my fractured crown on a Saturday afternoon.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=120&auto=format&fit=crop",
    name: "Marcus Brody",
    role: "Operations Lead"
  }
];

const stats = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Recommend Us" },
  { value: "15+", label: "Years of Trust" },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section (Biophilic backdrop & smoky white glass wrapper) */}
      <section 
        className="relative z-10 pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(9, 25, 44, 0.25), rgba(9, 25, 44, 0.25)), url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783632655/Biophilic_dental_clinic_interior__2K_202607100259_ml5l2w.jpg')"
        }}
      >
        <div className="container mx-auto container-gutter relative text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ y: [0, -6, 0] }}
            whileHover={{ scale: 1.015, y: -6 }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { type: "spring", stiffness: 350, damping: 22 },
              y_hover: { type: "spring", stiffness: 350, damping: 22 }
            }}
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(45px)",
              WebkitBackdropFilter: "blur(45px)",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow: "0 35px 70px -15px rgba(9, 29, 54, 0.2)",
              willChange: "transform, opacity, backdrop-filter"
            }}
            className="relative z-50 mx-auto max-w-4xl rounded-3xl border-2 border-white/40 bg-white/25 px-6 py-12 text-center shadow-2xl backdrop-blur-[45px] transform-gpu flex flex-col items-center justify-center text-white"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-black tracking-wide uppercase text-white mb-6 backdrop-blur-md">
              Testimonials
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 sm:mb-6 drop-shadow-sm">
              What Our Patients
              <br />
              Say About Us
            </h1>
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-black drop-shadow-sm">
              Real stories from real patients. Discover why thousands of
              professionals trust Bethany Dental Care for their elite oral healthcare needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto container-gutter">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding">
        <div className="container mx-auto container-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 lg:p-16 relative overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 text-accent/30 mx-auto mb-8" />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                &quot;Dr. Bethany is not just a dentist; she&apos;s a healer in the truest
                sense. Her dedication to patient care, combined with state-of-the-art dental
                technology, creates an unparalleled healthcare experience.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl font-semibold text-accent">
                  H
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">The Harrison Family</p>
                  <p className="text-primary-foreground/70">
                    Patients since 2016
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials - Infinite Column Marquee Track */}
      <section className="section-padding bg-muted/30 overflow-hidden relative">
        <div className="container mx-auto container-gutter relative z-20">
          <SectionHeading
            badge="Patient Stories"
            title="Continuous Dental Excellence"
            description="Our live scrolling reviews demonstrate the consistent results of our zero-anxiety clinical methodology."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[600px] overflow-hidden relative justify-center">
            {/* Top/Bottom Fade Overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background/90 via-background/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10 pointer-events-none" />

            <TestimonialsColumn testimonials={col1} duration={15} className="flex justify-center" />
            <TestimonialsColumn testimonials={col2} duration={19} className="flex justify-center" />
            <TestimonialsColumn testimonials={col3} duration={17} className="flex justify-center" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto container-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5 sm:mb-6 text-balance">
              Join Our Growing Family of Satisfied Patients
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
              Experience the difference of personalized, compassionate oral healthcare.
              Book your consultation today and become part of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="glass-dark text-primary-foreground shadow-glow w-full sm:w-auto"
              >
                <Link href="https://calendly.com/venzorx-co/30min">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group w-full sm:w-auto">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
