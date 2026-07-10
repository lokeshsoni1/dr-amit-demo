"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Award, 
  Briefcase, 
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const milestones = [
  {
    year: "2006",
    title: "Clinic Foundation",
    description: "Bethany Dental Care was founded at 45 Rockefeller Plaza, setting a new benchmark for elite oral healthcare in NYC."
  },
  {
    year: "2012",
    title: "Advanced Orthodontics & Invisalign",
    description: "Integrated clear aligner workflows, becoming a premier provider of customized Invisalign treatments."
  },
  {
    year: "2018",
    title: "Bio-Telemetry Occlusal Mapping",
    description: "Adopted T-Scan force telemetry mapping to proactively balance bite alignment and protect natural enamel profiles."
  },
  {
    year: "2026",
    title: "Sterile Operatory Expansion",
    description: "Expanded our clinical facility with state-of-the-art sterile surgical suites and neuromuscular oral sedation suites."
  }
];

const team = [
  {
    name: "Dr. Sarah Bethany, DDS, DMD",
    title: "Clinical Director & Lead Executive",
    degree: "Columbia University Dental Medicine",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783536399/ChatGPT_Image_Jul_9_2026_12_14_21_AM_hspagz.png",
    featured: true
  },
  {
    name: "Dr. Michael Chang, DDS",
    title: "Lead Orthodontics Specialist - Harvard",
    degree: "Harvard School of Dental Medicine",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783658573/Male_orthodontist_smiling_confid__2K_202607101005_bfveuh.jpg",
    featured: false
  },
  {
    name: "Dr. Elena Rostova, DMD",
    title: "Precision Endodontics Operator - Penn",
    degree: "Penn Dental Medicine",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783658581/Woman_giving_thumbs-up_2K_202607101007_un9k6k.jpg",
    featured: false
  },
  {
    name: "Dr. Yasmin Al-Fayed, DDS",
    title: "Periodontal & Biomaterial Specialist - NYU",
    degree: "NYU College of Dentistry",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783658575/Female_dental_specialist_smiling_2K_202607101010_ickmnv.jpg",
    featured: false
  },
  {
    name: "Dr. Marcus Brody, DDS",
    title: "Oral & Maxillofacial Surgeon - Columbia",
    degree: "Columbia University Dental Medicine",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783658573/Oral_surgeon_giving_thumbs-up_2K_202607101012_omslfe.jpg",
    featured: false
  }
];

const jobs = [
  {
    title: "Lead Orthodontics Operator",
    type: "Full-Time | Rockefeller Center",
    salary: "$180,000 - $240,000 / Year",
    description: "Orchestrate high-velocity Invisalign and advanced orthodontic treatments inside our luxury operatory suites.",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783659829/Hands_holding_orthodontic_aligne__2K_202607101022_elxzj4.jpg"
  },
  {
    title: "Clinical Dental Assistant",
    type: "Full-Time | Tribeca",
    salary: "$35 - $45 / Hour",
    description: "Provide precision assistance during endodontic and neuromuscular oral sedation procedures in sterile zones.",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783659820/Dental_instruments_on_tray_2K_202607101031_dgug4j.jpg"
  },
  {
    title: "Head Medical Receptionist",
    type: "Full-Time | Rockefeller Center",
    salary: "$65,000 - $80,000 / Year",
    description: "Manage elite patient relations, scheduling pipelines, and coordinate intake for corporate accounts.",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783659820/Dental_clinic_reception_desk_wai__202607101033_n5gihz.jpg"
  }
];

const credentials = [
  {
    title: "NDA Excellence Badge",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783660436/Dental_award_and_certificate_on_202607101036_e566yf.jpg",
    desc: "Recognized for clinical precision and implementation of sterile operatory safeguards."
  },
  {
    title: "Cosmetic Design Registry Asset",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783660430/Cosmetic_design_certificate_and___202607101038_fz5n09.jpg",
    desc: "Certified for elite achievements in digital smile design and porcelain veneers."
  },
  {
    title: "Invisalign Elite Credential",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783660451/Orthodontic_award_and_certificate_2K_202607101043_bha5n2.jpg",
    desc: "Awarded to the top 1% of dental practices demonstrating high-volume orthodontic excellence."
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  
  // Bidirectional Milestones Script: Re-engineer tracker logic dynamically on every continuous scroll change
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Mobile Fading Interval spring transition loop for career section (Module 7)
  const [activeCareerIdx, setActiveCareerIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCareerIdx((prev) => (prev + 1) % jobs.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Career scroll scaling stack hook
  const { scrollYProgress: careerScrollProgress } = useScroll({
    target: careerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Hero Section & Background Swap (Module 10) */}
      <section 
        className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783660908/Dental_operatory_with_plant_walls_202607101051_iyoets.jpg')"
        }}
      >
        <div className="container mx-auto container-gutter relative z-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-zinc-950/20 text-xs font-semibold tracking-wide uppercase text-zinc-950 mb-6 backdrop-blur-md"
            >
              About Bethany Dental Care
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 mb-6 drop-shadow-sm"
            >
              Redefining Clinical
              <br />
              <span className="text-zinc-900">Dental Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl text-zinc-950 max-w-3xl leading-relaxed drop-shadow-sm mx-auto font-black"
            >
              For over two decades, Bethany Dental Care has delivered elite oral healthcare and anxiety-free dentistry to the regional community.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION A: Clinic Origins Narrative (Module 10 Clean Viewport Style with rich black text) */}
      <section className="py-16 sm:py-20 lg:py-24 relative z-10 bg-zinc-50 text-zinc-950 border-b border-zinc-200">
        <div className="container mx-auto container-gutter max-w-4xl text-center">
          <div className="space-y-6 text-base sm:text-lg text-zinc-900 leading-relaxed font-semibold">
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 mb-6">Our Origins & Vision</h2>
            <p>
              Bethany Dental Care was engineered over twenty years ago with a singular objective: to combine state-of-the-art digital dental mapping with a zero-anxiety clinical methodology. Located in the heart of Manhattan at 45 Rockefeller Plaza, our practice has grown from a single treatment room into a premier multi-disciplinary clinic serving thousands of professionals.
            </p>
            <p>
              Under the clinical leadership of Dr. Sarah Bethany, our team has pioneered the use of preventative bio-telemetry, enabling us to diagnose and address tooth wear and occlusal friction points before they result in pain or structural failure. We believe in high-efficiency, evidence-based treatments administered in premium sterile suites.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION B: The Chronological Dots Timeline Chart (Module 9 Bidirectional, re-themed bg to deep corporate dark blue) */}
      <section ref={containerRef} className="py-20 sm:py-28 bg-[#09192c] border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto container-gutter max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">Our Chronological Milestones</h2>
          
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-8 space-y-12">
            {/* Scroll reactive progress line overlay tracking scroll inputs interactively via frame tracking */}
            <motion.div 
              className="absolute left-0 top-0 w-0.5 bg-cyan-400 origin-top transform-gpu will-change-[height]"
              style={{ height: pathHeight }}
            />
            
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#09192c] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                </div>
                
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-cyan-400/40 transition-all duration-300 transform-gpu hover:-translate-y-0.5">
                  <span className="inline-block text-sm font-bold text-cyan-400 mb-1">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: The Clinical Team Grid Mesh Architecture (Module 6) */}
      <section 
        className="relative overflow-hidden py-20 sm:py-28 z-10 bg-[#09192c]"
      >
        <div className="container mx-auto container-gutter relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-4">Our Clinical Specialist Team</h2>
          <p className="text-center text-zinc-400 max-w-xl mx-auto mb-20 text-base sm:text-lg">
            A collaborative panel of elite clinicians, each holding credentials from leading institutions.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {team.map((doctor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                }}
                className="overflow-hidden shadow-2xl transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 transform-gpu group"
              >
                {/* Apply strict aspect frame calculations w-full h-[420px] object-cover object-top rounded-2xl */}
                <div className="w-full h-[420px] overflow-hidden bg-zinc-900 rounded-t-2xl relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500 rounded-t-2xl" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
                  <p 
                    style={{ color: "#115e59" }} 
                    className="text-xs font-bold text-teal-800 tracking-widest uppercase mb-3"
                  >
                    {doctor.title}
                  </p>
                  <p className="text-xs text-zinc-300">{doctor.degree}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: Alternating Careers Matrix with Dual-Motion Layouts (Module 7) */}
      <section ref={careerRef} className="py-20 sm:py-32 bg-[#09192c] relative z-10 overflow-visible">
        {/* Background glow ambient */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-cyan-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-500 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto container-gutter max-w-6xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Join Our Practice</h2>
            <p className="text-slate-300 text-sm sm:text-base">
              We are looking for dedicated clinical specialists and support operators.
            </p>
          </div>

          {/* Desktop Stack-and-Reveal Scrolling Engine (Viewport > 1024px) */}
          <div className="hidden lg:flex flex-col space-y-24">
            {jobs.map((job, idx) => {
              const isOdd = idx % 2 !== 0;

              // Bind scaling inputs to scroll progress
              const cardStart = idx * 0.28;
              const cardEnd = cardStart + 0.3;

              const y = useTransform(
                careerScrollProgress,
                [0, cardStart, Math.min(cardStart + 0.08, 1), Math.min(cardEnd, 1), Math.min(cardEnd + 0.08, 1)],
                ["300px", "300px", "0px", "0px", "-20px"]
              );
              const scale = useTransform(
                careerScrollProgress,
                [0, cardStart, Math.min(cardStart + 0.08, 1), Math.min(cardEnd, 1), Math.min(cardEnd + 0.08, 1)],
                [0.94, 0.94, 1, 1, 0.94]
              );
              const opacity = useTransform(
                careerScrollProgress,
                [0, cardStart, Math.min(cardStart + 0.08, 1), Math.min(cardEnd, 1), Math.min(cardEnd + 0.08, 1)],
                [0.4, 0.4, 1, 1, 0.6]
              );

              return (
                <motion.div
                  key={idx}
                  style={{
                    y,
                    scale,
                    opacity,
                    background: "rgba(245, 250, 255, 0.08)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(245, 250, 255, 0.12)",
                    willChange: "transform, opacity, backdrop-filter",
                    zIndex: idx + 1,
                  }}
                  className={`rounded-3xl p-8 flex flex-row items-center justify-between w-full gap-12 transform-gpu shadow-2xl ${
                    isOdd ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2 h-[350px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shrink-0">
                    <img src={job.image} alt={job.title} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="flex flex-col space-y-6 justify-between flex-grow text-white">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-xs text-cyan-300 font-semibold mb-4 tracking-wider uppercase">{job.type}</p>
                      <p className="text-sm text-slate-200 leading-relaxed max-w-md">{job.description}</p>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-lg font-bold text-white">{job.salary}</span>
                      <Link href="/contact" className="text-sm font-bold text-cyan-400 flex items-center gap-1 hover:underline">
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Auto-Fade Spring Interval Transition Loop (Viewport <= 1024px) */}
          <div className="lg:hidden relative w-full h-[520px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {jobs.map((job, idx) => {
                if (idx !== activeCareerIdx) return null;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background: "rgba(245, 250, 255, 0.08)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(245, 250, 255, 0.12)",
                      willChange: "transform, opacity, backdrop-filter",
                    }}
                    className="absolute inset-0 flex flex-col p-6 rounded-3xl justify-between h-full transform-gpu"
                  >
                    <div className="w-full h-[200px] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 mb-4 shrink-0">
                      <img src={job.image} alt={job.title} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="text-white flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <p className="text-xs text-cyan-300 font-semibold mb-3">{job.type}</p>
                        <p className="text-xs text-slate-200 leading-relaxed line-clamp-3">{job.description}</p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                        <span className="text-sm font-bold">{job.salary}</span>
                        <Link href="/contact" className="text-xs font-bold text-cyan-400 flex items-center gap-1 hover:underline">
                          Apply <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION E: Infinite Marquee for Clinical Recognitions & Credentials (Module 8) */}
      <section className="py-20 bg-[#09192c] border-t border-white/10 overflow-hidden relative z-10">
        <div className="container mx-auto container-gutter mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">Clinical Recognitions & Credentials</h2>
        </div>

        {/* Seamless horizontal infinite loop marquee sliding from left to right */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-8 py-4 select-none transform-gpu">
            {/* Render 3 duplicate sets of cards to create seamless infinite illusion */}
            {[...credentials, ...credentials, ...credentials].map((cred, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                className="inline-flex items-center gap-6 p-6 rounded-2xl min-w-[320px] sm:min-w-[420px] backdrop-blur-xl border border-white/10 select-none pointer-events-none"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-zinc-900">
                  <img src={cred.image} alt={cred.title} className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex flex-col text-left whitespace-normal">
                  <h3 className="text-lg font-bold text-white mb-1 font-sans">{cred.title}</h3>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">{cred.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

