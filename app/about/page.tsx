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

      {/* Hero Section & Background Swap (Module 10 / Module 1 Glassmorphic Box) */}
      <section 
        className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783660908/Dental_operatory_with_plant_walls_202607101051_iyoets.jpg')"
        }}
      >
        <div className="container mx-auto container-gutter relative z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "20px",
              padding: "2.5rem",
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              willChange: "transform, opacity, backdrop-filter"
            }}
            className="max-w-4xl transform-gpu"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase text-white mb-6 backdrop-blur-md">
              About Bethany Dental Care
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-md">
              Redefining Clinical
              <br />
              <span className="text-cyan-200">Dental Excellence</span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-100 max-w-3xl leading-relaxed drop-shadow-md mx-auto font-medium">
              For over two decades, Bethany Dental Care has delivered elite oral healthcare and anxiety-free dentistry to the regional community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION A: Clinic Origins Narrative (Module 2 plant-wall continuation & frosted card shield) */}
      <section 
        className="py-20 sm:py-28 relative z-10 bg-cover bg-center bg-fixed text-white border-b border-white/10"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783660908/Dental_operatory_with_plant_walls_202607101051_iyoets.jpg')"
        }}
      >
        <div className="container mx-auto container-gutter max-w-4xl text-center">
          <div 
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              willChange: "transform, opacity, backdrop-filter"
            }}
            className="space-y-6 text-base sm:text-lg text-slate-200 leading-relaxed font-medium transform-gpu"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Origins & Vision</h2>
            <p>
              Bethany Dental Care was engineered over twenty years ago with a singular objective: to combine state-of-the-art digital dental mapping with a zero-anxiety clinical methodology. Located in the heart of Manhattan at 45 Rockefeller Plaza, our practice has grown from a single treatment room into a premier multi-disciplinary clinic serving thousands of professionals.
            </p>
            <p>
              Under the clinical leadership of Dr. Sarah Bethany, our team has pioneered the use of preventative bio-telemetry, enabling us to diagnose and address tooth wear and occlusal friction points before they result in pain or structural failure. We believe in high-efficiency, evidence-based treatments administered in premium sterile suites.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION B: The Chronological Dots Timeline Chart (Module 9 Bidirectional) */}
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

      {/* SECTION C: The Clinical Team Grid Mesh Architecture (Module 3 - 1-2-2 Balanced Geometry) */}
      <section 
        className="relative overflow-hidden py-20 sm:py-28 z-10 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(9, 25, 44, 0.4), rgba(9, 25, 44, 0.4)), url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783632655/Biophilic_dental_clinic_interior__2K_202607100259_ml5l2w.jpg')"
        }}
      >
        <div className="container mx-auto container-gutter relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-4">Our Clinical Specialist Team</h2>
          <p className="text-center text-zinc-300 max-w-xl mx-auto mb-20 text-base sm:text-lg">
            A collaborative panel of elite clinicians, each holding credentials from leading institutions.
          </p>

          <div className="max-w-6xl mx-auto flex flex-col space-y-8">
            
            {/* Top row: Centralized Lead Doctor (Sarah Bethany) */}
            <div className="flex justify-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "24px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                }}
                className="w-full max-w-md overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 transform-gpu group"
              >
                <div className="w-full h-[420px] overflow-hidden bg-zinc-900 rounded-t-2xl relative">
                  <img 
                    src={team[0].image} 
                    alt={team[0].name} 
                    className="w-full h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500 rounded-t-2xl" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{team[0].name}</h3>
                  <p 
                    style={{ color: "#115e59" }} 
                    className="text-xs font-bold tracking-widest uppercase mb-3 text-teal-800"
                  >
                    {team[0].title}
                  </p>
                  <p className="text-xs text-zinc-300">{team[0].degree}</p>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Two doctors side-by-side (Chang & Rostova) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
              {team.slice(1, 3).map((doctor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "24px",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                  }}
                  className="overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 transform-gpu group"
                >
                  <div className="w-full h-[420px] overflow-hidden bg-zinc-900 rounded-t-2xl relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500 rounded-t-2xl" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-1">{doctor.name}</h3>
                    <p 
                      style={{ color: "#115e59" }} 
                      className="text-xs font-bold tracking-widest uppercase mb-2 text-teal-800"
                    >
                      {doctor.title}
                    </p>
                    <p className="text-xs text-zinc-300">{doctor.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: Two doctors side-by-side (Al-Fayed & Brody) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
              {team.slice(3, 5).map((doctor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "24px",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                  }}
                  className="overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 transform-gpu group"
                >
                  <div className="w-full h-[420px] overflow-hidden bg-zinc-900 rounded-t-2xl relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500 rounded-t-2xl" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-1">{doctor.name}</h3>
                    <p 
                      style={{ color: "#115e59" }} 
                      className="text-xs font-bold tracking-widest uppercase mb-2 text-teal-800"
                    >
                      {doctor.title}
                    </p>
                    <p className="text-xs text-zinc-300">{doctor.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION D: Alternating Careers Matrix with Bidirectional Scroll Active Pop Reveal (Module 4) */}
      <section 
        ref={careerRef} 
        className="py-20 sm:py-32 bg-cover bg-center relative z-10 overflow-visible"
        style={{
          backgroundImage: "linear-gradient(rgba(9, 25, 44, 0.4), rgba(9, 25, 44, 0.4)), url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783632655/Biophilic_dental_clinic_interior__2K_202607100259_ml5l2w.jpg')"
        }}
      >
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

              // Bind scaling inputs to scroll progress for bidirectional pop reveal
              const cardStart = idx * 0.28;
              const cardEnd = cardStart + 0.3;

              const y = useTransform(
                careerScrollProgress,
                [0, cardStart, Math.min(cardStart + 0.08, 1), Math.min(cardEnd, 1), Math.min(cardEnd + 0.08, 1)],
                ["300px", "300px", "0px", "0px", "-20px"]
              );

              // active is scale 1.05 and opacity 1, filter blur 0px. alternate is scale 0.95, opacity 0.2, filter blur 2px
              const scale = useTransform(
                careerScrollProgress,
                [0, cardStart - 0.05, cardStart, Math.min(cardStart + 0.08, 1), Math.min(cardEnd, 1), Math.min(cardEnd + 0.05, 1)],
                [0.95, 0.95, 1.05, 1.05, 0.95, 0.95]
              );
              const opacity = useTransform(
                careerScrollProgress,
                [0, cardStart - 0.05, cardStart, Math.min(cardStart + 0.08, 1), Math.min(cardEnd, 1), Math.min(cardEnd + 0.05, 1)],
                [0.2, 0.2, 1, 1, 0.2, 0.2]
              );
              const filter = useTransform(
                careerScrollProgress,
                [0, cardStart - 0.05, cardStart, Math.min(cardStart + 0.08, 1), Math.min(cardEnd, 1), Math.min(cardEnd + 0.05, 1)],
                ["blur(2px)", "blur(2px)", "blur(0px)", "blur(0px)", "blur(2px)", "blur(2px)"]
              );

              return (
                <motion.div
                  key={idx}
                  style={{
                    y,
                    scale,
                    opacity,
                    filter,
                    background: "rgba(245, 250, 255, 0.08)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(245, 250, 255, 0.12)",
                    willChange: "transform, opacity, filter, backdrop-filter",
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

      {/* SECTION E: High-Density Sweet Light Blue Recognition Marquee (Module 5) */}
      <section className="py-20 bg-sky-50 border-t border-sky-100 overflow-hidden relative z-10">
        <div className="container mx-auto container-gutter mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900">Clinical Recognitions & Credentials</h2>
        </div>

        {/* Seamless horizontal infinite loop marquee sliding from left to right */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-8 py-4 select-none transform-gpu">
            {/* Render 3 duplicate sets of cards to create seamless infinite illusion */}
            {[...credentials, ...credentials, ...credentials].map((cred, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(14, 165, 233, 0.25)",
                  borderRadius: "28px",
                  boxShadow: "0 20px 40px rgba(14, 165, 233, 0.06)",
                }}
                className="inline-flex items-center gap-8 p-8 rounded-[28px] min-w-[380px] sm:min-w-[480px] select-none pointer-events-none transform-gpu"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-white">
                  <img src={cred.image} alt={cred.title} className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex flex-col text-left whitespace-normal">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">{cred.title}</h3>
                  <p className="text-sm text-slate-700 font-sans leading-relaxed">{cred.desc}</p>
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

