"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Shield,
  MessageSquare,
  ArrowRight,
  Info,
  Award,
  Users,
  Stethoscope
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const services = [
  "Cosmetic Dentistry & Smile Design",
  "Advanced Orthodontics & Invisalign",
  "Precision Root Canal Therapy",
  "Neuromuscular Oral Sedation",
  "Preventative Bio-Telemetry Mapping",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

const trustPoints = [
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your information is protected",
  },
  {
    icon: Clock,
    title: "Quick Confirmation",
    description: "Get confirmed within 2 hours",
  },
  {
    icon: MessageSquare,
    title: "Easy Rescheduling",
    description: "Flexible cancellation policy",
  },
];

export default function BookAppointmentPage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Calendly confirmation target pipeline
    window.location.href = "https://calendly.com/venzorx-co/30min";
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
              Book Appointment
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6"
            >
              Schedule Your
              <br />
              <span className="text-gradient">Consultation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Book your appointment with Bethany Dental Care in just a few clicks.
              Choose your preferred service, date, and time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-10 sm:py-12 lg:py-20">
        <div className="container mx-auto container-gutter">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                {/* Service Selection */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                      1
                    </span>
                    Select Service
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={cn(
                          "p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer",
                          selectedService === service
                            ? "border-accent bg-accent/10 text-foreground"
                            : "border-border hover:border-accent/50 text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <span className="text-sm font-medium">{service}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                      2
                    </span>
                    Choose Date & Time
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date" className="text-foreground mb-2 block">
                        Preferred Date
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="pl-12 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-foreground mb-2 block">
                        Preferred Time
                      </Label>
                      <div className="grid grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "p-2 rounded-lg border text-xs font-medium transition-all duration-200 cursor-pointer",
                              selectedTime === time
                                ? "border-accent bg-accent/10 text-foreground"
                                : "border-border hover:border-accent/50 text-muted-foreground"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Patient Details */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                      3
                    </span>
                    Patient Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground mb-2 block">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="pl-12 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground mb-2 block">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (212) XXXXXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="pl-12 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email" className="text-foreground mb-2 block">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="pl-12 h-12"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="notes" className="text-foreground mb-2 block">
                      Additional Notes (Optional)
                    </Label>
                    <textarea
                      id="notes"
                      placeholder="Any specific concerns or information you'd like to share..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full min-h-[120px] rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto min-h-11 bg-primary hover:bg-primary/95 text-primary-foreground shadow-glow text-base px-10 sm:px-12"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Confirm Appointment
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    By booking, you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      terms
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </Link>
                    . All procedures are conducted inside our sterile state-of-the-art operatory suites.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Trust Points */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Why Book With Us
                </h4>
                <div className="space-y-4">
                  {trustPoints.map((point) => (
                    <div key={point.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                        <point.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {point.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-primary text-primary-foreground rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-semibold">Dr. Sarah Bethany</p>
                    <p className="text-sm text-primary-foreground/70">
                      DDS, DMD
                    </p>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Need immediate assistance or have questions? Call us directly.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="tel:+12125550199">
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (212) 555-0199
                  </Link>
                </Button>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm mb-2">
                      Cancellation Policy
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Free cancellation up to 4 hours before your appointment.
                      Same-day cancellations may incur a nominal fee.
                    </p>
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
