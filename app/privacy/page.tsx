"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="hero-padding bg-transparent relative">
        <div className="container mx-auto container-gutter max-w-4xl relative z-10 py-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-8">
            Privacy Policy & HIPAA Disclosure
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-muted-foreground space-y-6">
            <p className="text-xs uppercase tracking-wider text-primary font-bold">
              Last Updated: July 9, 2026 | Effective Immediately
            </p>
            <p>
              At Bethany Dental Care, we are committed to maintaining the confidentiality, integrity, and security of your Protected Health Information (PHI) and Personal Identification Information (PII). This document outlines our institutional policies, technical safeguards, and compliance workflows designed to align with the Health Insurance Portability and Accountability Act (HIPAA), the Health Information Technology for Economic and Clinical Health (HITECH) Act, and applicable state regulations.
            </p>
            
            <h2 className="text-lg font-bold text-foreground pt-4">1. Collection and Storage of Patient Information</h2>
            <p>
              We collect and process health information to provide comprehensive clinical care, coordinate administrative scheduling pipelines, and handle billing protocols. Collected data includes but is not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Demographic identifiers (Full name, date of birth, contact details, social security numbers where applicable).</li>
              <li>Clinical records, dental radiographs, orthodontic scans, and bio-telemetry occlusal pressure maps.</li>
              <li>Medical histories, prescription logs, pharmacological profiles, and sedation tolerances.</li>
              <li>Insurance billing codes, payment records, and transaction histories.</li>
            </ul>

            <h2 className="text-lg font-bold text-foreground pt-4">2. Technical and Administrative Safeguards</h2>
            <p>
              All clinical records and scan files are stored in an encrypted electronic health record (EHR) database utilizing AES-256 encryption at rest and TLS 1.3 protocol for all transmission pipelines. Access permissions are strictly managed via Role-Based Access Control (RBAC) protocols, ensuring only credentialed clinical personnel can retrieve individual PHI layers. Audit logs are continuously generated and monitored for unauthorized access attempts.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">3. Disclosure and Use of Health Data</h2>
            <p>
              Your Protected Health Information is disclosed strictly for the purposes of Treatment, Payment, and Healthcare Operations (TPO). We do not distribute, sell, or license patient contact pipelines or clinical data to external third-party marketing networks. Disclosure to external medical laboratories, specialist surgeons, or insurance agencies is conducted via secure, HIPAA-compliant communication channels.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">4. Patient Rights and Access</h2>
            <p>
              Patients retain the right to inspect, copy, or amend their clinical and billing records. Requests for medical record releases must be submitted in writing through our secure contact pathways. Under HIPAA rules, you have the right to request restrictions on certain uses and disclosures of your health information, as well as to receive a list of all disclosures made for purposes other than treatment or operations.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">5. Disclaimer on Demo Environment</h2>
            <p className="border-l-4 border-accent pl-4 text-xs italic bg-accent/5 py-3">
              Notice: All forms, appointment schedulers, and contact mechanisms featured on this demonstration website (dr-amit-demo.vercel.app) are mockups deployed strictly for UI/UX showcase purposes. No actual clinical patient data is harvested, and no live medical services are established via this interface.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
