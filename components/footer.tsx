"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { fadeUp, revealTransitionFast, subtleHoverLift } from "@/lib/motion";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/book-appointment", label: "Book Appointment" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Cosmetic Dentistry & Smile Design",
  "Advanced Orthodontics & Invisalign",
  "Precision Root Canal Therapy",
  "Neuromuscular Oral Sedation",
  "Preventative Bio-Telemetry Mapping",
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://x.com/",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-gutter relative">
        {/* Main Footer */}
        <div className="py-14 sm:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={revealTransitionFast}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-xl">B</span>
              </div>
              <div>
                <span className="font-semibold text-xl text-primary-foreground">
                  Bethany Dental Care
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Excellence in personalized dental care. Providing compassionate,
              world-class oral healthcare to families across New York City.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  whileHover={subtleHoverLift}
                  transition={revealTransitionFast}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ ...revealTransitionFast, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ ...revealTransitionFast, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/70 hover:text-accent text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ ...revealTransitionFast, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  45 Rockefeller Plaza, Suite 200,
                  <br />
                  New York, NY 10111
                </span>
              </li>
              <li>
                <a
                  href="tel:+12125550199"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  +1 (212) 555-0199
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@bethanydentalnyc.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  hello@bethanydentalnyc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="text-primary-foreground/70 text-sm">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Emergency Only</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 sm:py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Bethany Dental Care. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-primary-foreground/50 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-primary-foreground/50 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
