"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  AlertCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const branches = [
  {
    name: "Rockefeller Center Suite",
    address: "45 Rockefeller Plaza, Suite 200, New York, NY 10111",
    phone: "+1 (212) 555-0199",
    hours: "Mon - Sat: 9:00 AM - 8:00 PM | Sun: Emergency Only",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783538213/Modern_dental_operatory_interior__2K_202607090041_ukinvc.jpg"
  },
  {
    name: "Upper East Side Clinic",
    address: "820 Fifth Avenue, Suite 105, New York, NY 10065",
    phone: "+1 (212) 555-0180",
    hours: "Mon - Fri: 8:00 AM - 7:00 PM | Sat: 9:00 AM - 4:00 PM",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783538213/Modern_dental_operatory_interior__2K_202607090041_ukinvc.jpg"
  },
  {
    name: "Tribeca Operatory Suite",
    address: "200 Chambers Street, Suite A, New York, NY 10007",
    phone: "+1 (212) 555-0177",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM | Sun: Closed",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783538213/Modern_dental_operatory_interior__2K_202607090041_ukinvc.jpg"
  }
];

const inquiryTypes = [
  { id: "general", label: "General Inquiry", icon: MessageSquare },
  { id: "appointment", label: "Appointment", icon: Calendar },
  { id: "emergency", label: "Emergency", icon: AlertCircle },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("general");
  const [activeBranch, setActiveBranch] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBranch((prev) => (prev + 1) % branches.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ type: selectedType, ...formData });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto container-gutter relative">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-xs font-medium tracking-wide uppercase text-primary mb-6"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6"
            >
              Get in Touch
              <br />
              <span className="text-gradient">We&apos;re Here to Help</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Have questions or need assistance? Reach out to us through any of
              our premium operatory suites in NYC.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Branch Carousel */}
      <section className="py-10 sm:py-12 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto container-gutter max-w-4xl">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-foreground mb-10">
            Our Elite NYC Branches
          </h2>

          <div className="relative h-[280px] sm:h-[220px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranch}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full max-w-2xl bg-card border border-primary/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-soft transform-gpu will-change-transform relative z-10"
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                    {branches[activeBranch].name}
                  </h3>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                      <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                      {branches[activeBranch].address}
                    </p>
                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                      <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                      {branches[activeBranch].phone}
                    </p>
                    <p className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4 text-teal-500 shrink-0" />
                      {branches[activeBranch].hours}
                    </p>
                  </div>
                </div>
                
                <Link href="/book-appointment">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 rounded-full cursor-pointer whitespace-nowrap">
                    Book Here <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2.5 mt-8">
            {branches.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveBranch(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeBranch === i ? "w-8 bg-primary" : "w-2.5 bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-10 sm:py-12 lg:py-20">
        <div className="container mx-auto container-gutter">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-5 sm:mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <Label className="text-foreground mb-3 block">
                    Type of Inquiry
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                          selectedType === type.id
                            ? "border-accent bg-accent/10"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <type.icon
                          className={`w-5 h-5 mx-auto mb-1 ${
                            selectedType === type.id
                              ? "text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={`text-xs font-medium ${
                            selectedType === type.id
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {type.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (212) XXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full min-h-[150px] rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto min-h-11 bg-primary hover:bg-primary/95 text-primary-foreground shadow-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Embedded Google Map */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative shadow-soft">
                <iframe
                  title="Bethany Dental Care Location - Rockefeller Plaza NYC"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2599723659223!2d-73.98083838459385!3d40.75895427932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ffb4be61a9%3A0xe54e3d37a8b4b1a4!2s45%20Rockefeller%20Plaza%2C%20New%20York%2C%20NY%2010111!5e0!3m2!1sen!2sus!4v1700000000000"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing 45 Rockefeller Plaza, Suite 200, New York, NY 10111"
                />
              </div>

              {/* Emergency Card */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Dental Emergency?
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you&apos;re experiencing a dental emergency, please call
                      our dedicated lines immediately.
                    </p>
                    <Button
                      asChild
                      variant="destructive"
                      size="sm"
                      className="bg-destructive hover:bg-destructive/90"
                    >
                      <Link href="tel:+12125550199">
                        <Phone className="w-4 h-4 mr-2" />
                        Emergency Line
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
