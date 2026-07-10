"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Shield,
  Activity,
  Award,
  Zap,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Advanced Prosthodontics & Implantology",
    shortDescription:
      "Restoring structural chewing vectors via premium titanium mapping.",
    description:
      "Engineered mapping protocols targeting precise bite occlusion and custom tooth morphology. Implants are designed using bio-compatible medical titanium vectors for 100% chew load tolerance.",
    features: [
      "Titanium implant anchors",
      "Full arches restorative mapping",
      "Precision porcelain crowns",
      "Digital bite load testing",
      "Neuromuscular bite adjustments",
      "Structural chewing optimization",
    ],
  },
  {
    icon: Zap,
    title: "Laser Periodontal Therapy",
    shortDescription:
      "High-efficiency microbiological soft tissue sanitization.",
    description:
      "Advanced water laser energy targeting pockets of infection to perform surgical sanitization of gums without drills or incisions. Drastically minimizes healing downtime and mitigates blood loss.",
    features: [
      "Laser micro-organism target",
      "Non-surgical soft tissue repair",
      "Deep root decontamination",
      "Accelerated recovery timeline",
      "Zero incision protocols",
      "Precision pocket depth shrink",
    ],
    featured: true,
  },
  {
    icon: Activity,
    title: "3D Digital Orthodontic Scanning",
    shortDescription:
      "Engineered diagnostic telemetry for precision occlusion adjustment.",
    description:
      "High-fidelity intraoral optical scanners that map tooth positions down to the micron. Deploys simulation engines to preview alignment trajectories before initializing custom aligner runs.",
    features: [
      "Micron-precision scanning",
      "Zero dental mold discomfort",
      "Real-time visual simulations",
      "Custom Invisalign sequencing",
      "Bite displacement analytics",
      "Digital progression archives",
    ],
  },
  {
    icon: Shield,
    title: "Neuromuscular Orofacial Rejuvenation",
    shortDescription:
      "Mitigating structural masseter load and friction failure points.",
    description:
      "Focused therapeutic treatments designed to neutralize TMJ friction, alleviate deep jaw strain, and resolve chronic dental grinding patterns by tracking facial muscle load limits.",
    features: [
      "TMJ compression relief",
      "Masseter muscle diagnostic scan",
      "Bite alignment balancing",
      "Night splint stabilization",
      "Nerve pathway calming",
      "Preventive enamel wear block",
    ],
  },
  {
    icon: Award,
    title: "Elite Esthetic Smile Reconstruction",
    shortDescription:
      "Veneer smile designs using premium translucent ceramic overlays.",
    description:
      "Master-crafted ultra-thin porcelain veneers customized for your specific facial symmetry. Deploys light-refracting ceramic matrices that mimic natural enamel translucency perfectly.",
    features: [
      "Custom translucent ceramics",
      "Facial symmetry smile design",
      "Ultra-thin cosmetic overlays",
      "High stain-resistant glazes",
      "Precision enamel prep guides",
      "Instant alignment makeover",
    ],
    featured: true,
  },
];

export default function ServicesPage() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  // Auto interval engine for mobile spatial zoom pop-up sequencing
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMobileIdx((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783661877/Medical_clinic_lobby_web_background_202607101107_gr0wsb.jpg')"
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden z-10">
        <div className="container mx-auto container-gutter relative text-center">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase text-white mb-6 backdrop-blur-md"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg"
            >
              Specialized
              <br />
              <span className="text-cyan-200">Dental Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl text-slate-100 max-w-3xl leading-relaxed mx-auto font-medium drop-shadow-md"
            >
              From custom smile redesigns to high-precision implant diagnostics, we offer cutting-edge dental mapping inside NYC.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-12 border-y border-white/10 bg-[#09192c]/80 backdrop-blur-md relative z-10 text-white">
        <div className="container mx-auto container-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Extended Hours",
                description: "Mon-Sat: 9AM-8PM",
              },
              {
                icon: Sparkles,
                title: "Specialized Orthodontics",
                description: "Advanced custom digital telemetry",
              },
              {
                icon: Shield,
                title: "Sterile Operatory",
                description: "Safe neuromuscular sedation suites",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List - Desktop Zoom-Pop Reveal Engine (Viewport > 1024px) */}
      <section className="hidden lg:block py-24 relative z-10">
        <div className="container mx-auto container-gutter">
          <div className="space-y-24 max-w-5xl mx-auto">
            {services.map((service, index) => {
              // Stable desktop zoom-pop reveal mappings: expands/scales up out of viewport center
              const stableZoomPopVariant = {
                hidden: { opacity: 0, scale: 0.85, filter: "blur(4px)" },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                }
              };

              return (
                <motion.div
                  key={service.title}
                  variants={stableZoomPopVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    willChange: "transform, opacity, backdrop-filter",
                  }}
                  className="rounded-3xl p-10 flex flex-row items-center justify-between gap-12 transform-gpu shadow-2xl"
                >
                  <div className="flex flex-col space-y-6 flex-grow text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-cyan-300" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-base text-zinc-200 leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                          <span className="text-zinc-100 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild size="lg" className="w-fit bg-cyan-500 hover:bg-cyan-600 text-black font-bold h-12 rounded-xl mt-4">
                      <Link href="/book-appointment">
                        Book Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List - Mobile Zoom-Pop Sequence Engine (Viewport <= 1024px) */}
      <section className="lg:hidden py-16 px-4 relative z-10">
        <div className="w-full max-w-[94vw] mx-auto h-[480px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            {services.map((service, index) => {
              if (index !== activeMobileIdx) return null;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    willChange: "transform, opacity, backdrop-filter",
                  }}
                  className="absolute inset-0 flex flex-col p-6 rounded-3xl justify-between h-full transform-gpu shadow-2xl"
                >
                  <div className="flex flex-col space-y-4 text-white flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-cyan-300" />
                      </div>
                      <h2 className="text-xl font-bold tracking-tight leading-tight">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-xs text-zinc-200 leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                          <span className="text-zinc-100 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 mt-4">
                    <Button asChild size="lg" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold h-12 rounded-xl">
                      <Link href="/book-appointment">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative z-10 bg-[#09192c]/80 border-t border-white/10 text-white mt-12">
        <div className="container mx-auto container-gutter text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase text-white mb-6 backdrop-blur-md">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-base sm:text-lg text-slate-200 mb-8 sm:mb-10">
              Book an appointment today and experience the difference of personalized, compassionate healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold h-12 rounded-xl w-full sm:w-auto"
              >
                <Link href="/book-appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 rounded-xl w-full sm:w-auto">
                <Link href="tel:+12125550199">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (212) 555-0199
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

