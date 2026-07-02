"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Activity,
  Syringe,
  Droplets,
  Home,
  Wind,
  TestTube,
  Heart,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle2,
  Phone,
  Calendar,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";
import {
  ambientFloat,
  fadeUp,
  revealTransitionFast,
  sectionStagger,
  softFade,
  subtleHoverLift,
} from "@/lib/motion";

const services = [
  {
    icon: Stethoscope,
    title: "General Physician",
    description:
      "Comprehensive medical consultations for all ages with personalized treatment plans.",
  },
  {
    icon: Activity,
    title: "Diabetes Management",
    description:
      "Expert care and monitoring for diabetes with lifestyle guidance and medication management.",
  },
  {
    icon: Syringe,
    title: "Emergency Care",
    description:
      "Round-the-clock emergency medical services with rapid response protocols.",
    featured: true,
  },
  {
    icon: Droplets,
    title: "IV Fluids & Hydration",
    description:
      "Professional IV therapy for dehydration, vitamin infusions, and recovery support.",
  },
  {
    icon: Home,
    title: "Home Visit Support",
    description:
      "Convenient medical care at your doorstep across Manhattan and New York City.",
  },
  {
    icon: Wind,
    title: "Oxygen Support",
    description:
      "Comprehensive respiratory care with oxygen therapy and monitoring services.",
  },
  {
    icon: TestTube,
    title: "Diagnostics",
    description:
      "Advanced diagnostic testing with quick results and expert interpretation.",
  },
  {
    icon: Heart,
    title: "Wellness Consultations",
    description:
      "Preventive health checkups and wellness programs for optimal health.",
  },
];

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

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Patient since 2019",
    content:
      "Dr. Bethany's attention to detail and genuine concern for my dental health has made all the difference. The mobile care service during my recovery was exceptional.",
    rating: 5,
  },
  {
    name: "Robert Miller",
    role: "Preventative Care Patient",
    content:
      "Managing my oral health has become so much easier with Dr. Bethany's guidance. Her personalized approach and regular monitoring have transformed my health.",
    rating: 5,
    featured: true,
  },
  {
    name: "Emily Davis",
    role: "Family Healthcare",
    content:
      "Our entire family trusts Bethany Dental Care for all our dental needs. The clinic is modern, clean, and the staff is incredibly professional.",
    rating: 5,
  },
];

const stats = [
  { target: 5000, suffix: "+", label: "Happy Patients" },
  { target: 15, suffix: "+", label: "Years Experience" },
  { target: 10000, suffix: "+", label: "Consultations" },
  { target: 98, suffix: "%", label: "Patient Satisfaction" },
];

import CloudinarySlideshowMinimalHero from "@/components/sections/hero";
import { InfiniteServicesSlider } from "@/components/ui/services-infinite-loop";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <CloudinarySlideshowMinimalHero />

      {/* Stats Section */}
      <motion.section
        variants={sectionStagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="section-padding border-y border-border bg-muted/30"
      >
        <div className="container mx-auto container-gutter">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infinite Services Slider Section */}
      <InfiniteServicesSlider />

      {/* Why Choose Us Section */}
      <motion.section
        variants={sectionStagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="section-padding bg-primary text-primary-foreground relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto container-gutter relative">
          <SectionHeading
            badge="Why Choose Us"
            title="Healthcare You Can Trust"
            description="At Bethany Dental Care, we combine dental excellence with genuine compassion to deliver oral care that truly makes a difference."
            light
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary-foreground">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Doctor Section */}
      <motion.section
        variants={sectionStagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="section-padding"
      >
        <div className="container mx-auto container-gutter">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="https://images.pexels.com/photos/6129052/pexels-photo-6129052.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Portrait of a senior doctor in a premium private clinic"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 380px, 320px"
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 right-4 sm:-right-6 lg:right-6 bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-soft max-w-[240px] sm:max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">15+ Years</p>
                    <p className="text-sm text-muted-foreground">
                      Medical Experience
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">5000+</p>
                    <p className="text-sm text-muted-foreground">
                      Patients Treated
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-xs font-medium tracking-wide uppercase text-primary mb-4">
                Meet Your Doctor
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 sm:mb-6">
                Dr. Sarah Bethany
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 15 years of dedicated dental practice, Dr. Sarah
                Bethany brings a unique combination of clinical expertise and
                compassionate care to every patient interaction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                After completing her DDS and DMD from prestigious institutions,
                Dr. Bethany has been serving the New York City community with a
                patient-first philosophy. Her approach combines modern dental
                practices with personalized attention, ensuring each patient
                receives care tailored to their specific needs.
              </p>

              {/* Qualifications */}
              <div className="space-y-3 mb-8">
                {[
                  "DDS/DMD from Columbia University",
                  "Residency in General Dentistry",
                  "Fellowship in Cosmetic & Implant Dentistry",
                  "Member of American Dental Association",
                ].map((qual, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{qual}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="group">
                <Link href="/about">
                  Read Full Biography
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        variants={sectionStagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="section-padding bg-muted/30"
      >
        <div className="container mx-auto container-gutter">
          <SectionHeading
            badge="Testimonials"
            title="What Our Patients Say"
            description="Don't just take our word for it. Hear from families who have experienced the Bethany Dental Care difference."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                featured={testimonial.featured}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/testimonials">
                Read More Reviews
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={sectionStagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="section-padding"
      >
        <div className="container mx-auto container-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-primary via-primary to-navy rounded-3xl p-6 sm:p-8 lg:p-16 overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 sm:mb-6 text-balance">
                Ready to Experience Premium Healthcare?
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/80 mb-8 sm:mb-10 text-pretty">
                Schedule your consultation today and take the first step towards
                better health. Home visits available across Manhattan and New York City.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 w-full sm:w-auto"
                >
                  <Link href="/book-appointment">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 w-full sm:w-auto"
                >
                  <Link href="tel:+12125550199">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
