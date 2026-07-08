"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="hero-padding bg-transparent relative">
        <div className="container mx-auto container-gutter max-w-4xl relative z-10 py-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-8">
            Terms of Service & Clinical Governance
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-muted-foreground space-y-6">
            <p className="text-xs uppercase tracking-wider text-primary font-bold">
              Last Updated: July 9, 2026 | Effective Immediately
            </p>
            <p>
              Welcome to the Bethany Dental Care clinical portal. By accessing this platform, scheduling appointment slots, or interacting with our digital bio-telemetry interfaces, you agree to comply with and be bound by the following terms, conditions, and clinical governance protocols.
            </p>
            
            <h2 className="text-lg font-bold text-foreground pt-4">1. Scope of Digital Services</h2>
            <p>
              This website serves as an administrative communication pipeline for Bethany Dental Care. Content provided here is for informational and educational purposes only and does not constitute primary medical or dental advice. Online assessments, scanned diagnostics, or scheduler selections do not initiate an official doctor-patient relationship until a formal clinical examination is conducted in person by a credentialed clinician within our sterile suites.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">2. Scheduling, Cancellation, and Check-In Protocols</h2>
            <p>
              Appointments booked through this portal are subject to check-in confirmation within our operatory database. Patients are required to arrive at least 10 minutes prior to scheduled slots to allow for real-time bio-telemetry calibration and medical history updates. Cancellation of scheduled surgeries or advanced cosmetic smile design sessions must be conducted at least 4 hours in advance to avoid institutional holding charges.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">3. Code of Conduct and Sterile Environment</h2>
            <p>
              Bethany Dental Care operates high-value, sterile clinical suites. Patients must comply with all sanitary and clinical safety directives issued by the operatory team. Verbal or physical harassment directed towards our clinical staff or administrative specialists will result in immediate termination of the doctor-patient contract and cancellation of all future diagnostic roadmaps.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">4. Intellectual Property and Clinical Diagnostics</h2>
            <p>
              All software models, digital scans, dental radiograph telemetry, website assets, and smile design rendering systems featured on this platform are the sole intellectual property of Bethany Dental Care. Reproduction, scraping, or utilization of these assets for external marketing or commercial applications is strictly prohibited.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">5. Limitation of Liability and Jurisdiction</h2>
            <p>
              Bethany Dental Care, its officers, clinicians, and affiliates shall not be liable for any direct or indirect damages arising out of your utilization of this website, online scheduling modules, or external Calendly redirects. These terms are governed by the laws of the State of New York, without regard to conflict of law principles.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
