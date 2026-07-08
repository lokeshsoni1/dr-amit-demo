"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, ChevronDown, ChevronUp, CheckCircle, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Cosmetic Dentistry & Smile Design: The Science of Visual Harmony",
    category: "Cosmetic Dentistry",
    readTime: "4 min read",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=200&auto=format&fit=crop"
    ],
    content: `Cosmetic dentistry is far more than a collection of aesthetic treatments; it is a highly specialized clinical discipline that combines the physics of light, the chemistry of modern ceramic materials, and the biological principles of periodontal health. Smile design is a structured methodology used to analyze, diagnose, and construct visually harmonious smiles that complement an individual's unique facial features. 

The process begins with digital smile mapping telemetry. High-resolution intraoral scanners capture the exact coordinates of the dental arch, while facial photographs analyze the interpupillary line, the lip line, and the dental midline. Achieving visual harmony requires strict adherence to golden proportion ratios. The width of the central incisor, lateral incisor, and canine must relate mathematically to project a balanced profile.

Porcelain veneers represent the gold standard in cosmetic smile design. These ultra-thin shells of feldspathic porcelain or lithium disilicate are bonded directly to the enamel using advanced adhesive resins. The preparation requires microscopic tooth reduction, ensuring the conservation of healthy tooth structure while creating adequate room for the ceramic layer to mimic natural light transmission. Translucency, chroma, and value are carefully calculated to prevent a chalky, artificial appearance.

Furthermore, periodontal aesthetics are crucial. A visual smile design must address the gingival architecture, correcting uneven gum lines using precision tissue contouring lasers. This ensures that the gingival zenith—the highest point of the gum line on each tooth—is correctly positioned relative to the clinical crown. By aligning the soft tissues and the hard ceramic structures, cosmetic dentistry delivers stable, biological, and stunning smiles that stand the test of time, improving oral function and patient self-confidence simultaneously.`
  },
  {
    id: 2,
    title: "Advanced Orthodontics & Invisalign: Aligning Bites and Enamel Profiles",
    category: "Orthodontics",
    readTime: "5 min read",
    images: [
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512224855767-d8c9f5ae8f4e?q=80&w=200&auto=format&fit=crop"
    ],
    content: `Orthodontic treatment has evolved from rigid metal wires to highly predictable clear aligner therapy. Invisalign represents a breakthrough in digital biomechanics, allowing dentists to resolve complex malocclusions with minimal impact on a patient's lifestyle. The core of this system is SmartTrack material, a proprietary medical-grade thermoplastic engineered to deliver constant, gentle orthodontic forces to the dentition.

The biomechanical planning is executed through virtual CAD/CAM software. The software maps the movement of each tooth in increments of 0.25 millimeters per stage. This level of microscopic control allows clinicians to plan root movement, rotation, and intrusion with clinical safety, avoiding the risk of root resorption. Attachments—small, tooth-colored composite shapes—are bonded to the enamel to act as force anchors, allowing the clear aligners to execute complex movements like bodily root translation.

Correcting the bite involves optimizing the relationship between the maxillary and mandibular arches. Malocclusions such as overbites, underbites, crossbites, and crowding are not merely cosmetic concerns; they cause enamel attrition, temporomandibular joint (TMJ) stress, and increase the risk of periodontal disease. By aligning the teeth, the masticatory forces are distributed evenly across the dental arch, protecting the enamel from premature wear.

Compliance is a critical factor in Invisalign success. Aligners must be worn for 20 to 22 hours per day, removed only for meals and oral hygiene. Advanced monitoring systems allow patients and doctors to track progress virtually, reducing clinical visit times while maintaining exceptional alignment quality. The final outcome is a stable, well-aligned occlusion that supports speech, chewing, and a lifelong balanced dental arch.`
  },
  {
    id: 3,
    title: "Precision Root Canal Therapy: Modern Sedation and Microscopic Endodontics",
    category: "Endodontics",
    readTime: "4 min read",
    images: [
      "https://images.unsplash.com/photo-1476137682422-ee53857e4e1a?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504813184591-015556c5c50f?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=200&auto=format&fit=crop"
    ],
    content: `Root canal therapy is one of the most misunderstood procedures in dentistry, often associated with pain. However, modern endodontic techniques, high-powered surgical microscopes, and advanced sedation options have transformed this procedure into a precise, comfortable, and highly successful method for saving infected teeth. Endodontic therapy addresses inflammation or infection within the pulp tissue, which contains the nerves and blood vessels of the tooth.

The primary cause of pulpal infection is deep dental caries or structural fractures that allow oral bacteria to breach the protective dentin layer. Once bacteria enter the pulp chamber, the tissue becomes inflamed. If left untreated, the infection can progress to the surrounding alveolar bone, forming a painful abscess. Precision diagnostics, including 3D Cone Beam Computed Tomography (CBCT), allow dentists to map the root canals in three dimensions before starting treatment.

During the procedure, the endodontist uses a surgical microscope to locate all canal orifices, which can be as narrow as a hair. Specialized nickel-titanium rotary instruments are used to clean, shape, and debride the canals, removing all necrotic tissue and bacterial biofilms. High-velocity chemical irrigants, activated by ultrasonic waves, sanitize the microscopic accessory canals that mechanical instruments cannot reach.

Once sterile, the canals are obturated—or sealed—using a biocompatible material called gutta-percha combined with a resin-based sealer. This hermetic seal prevents future bacterial colonization. Finally, the tooth is restored with a custom crown to protect its weakened structure. With neuromuscular oral sedation, patients experience a zero-pain environment, changing root canal therapy into a routine, comfortable visit.`
  },
  {
    id: 4,
    title: "Neuromuscular Oral Sedation: Eliminating Dental Anxiety and Gag Reflexes",
    category: "Anesthesiology",
    readTime: "5 min read",
    images: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=200&auto=format&fit=crop"
    ],
    content: `Dental phobia is a significant barrier to oral health, causing millions of individuals to avoid essential treatment. Neuromuscular oral conscious sedation is a highly effective pharmacological approach designed to eliminate fear, suppress overactive gag reflexes, and create a calm state during complex dental procedures. Unlike general anesthesia, oral sedation keeps the patient conscious, cooperative, and able to respond to verbal cues.

The sedation process involves the administration of oral sedative medications, typically from the benzodiazepine family, taken shortly before the appointment. These medications target GABA-A receptors in the brain, enhancing inhibitory pathways that reduce anxiety and induce muscle relaxation. Because these agents have strong amnestic properties, patients frequently have little to no memory of the procedure.

For patients with a hyperactive gag reflex, oral sedation relaxes the neuromuscular pathways responsible for this involuntary response. This allows the clinical team to perform procedures like impressions, scanning, and endodontics with ease, ensuring high clinical accuracy and patient comfort. Throughout the entire appointment, the patient's vital signs, including oxygen saturation, heart rate, and blood pressure, are continuously monitored.

Additionally, oral sedation allows for "treatment consolidation," where multiple procedures (such as root canals, crowns, and implants) are completed in a single session. This saves valuable hours for busy professionals, ensuring high-efficiency care in a safe environment. By eliminating pain and anxiety, neuromuscular sedation helps patients rebuild their trust in dental care and maintain healthy smiles.`
  },
  {
    id: 5,
    title: "Preventative Bio-Telemetry Mapping: Catching Friction Points Before Pain Occurs",
    category: "Preventative Dentistry",
    readTime: "4 min read",
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=200&auto=format&fit=crop"
    ],
    content: `Preventative bio-telemetry mapping represents the future of preventative dentistry. Rather than waiting for dental structures to break, decay, or become painful, this digital methodology utilizes force-sensing sensors and structural telemetry to analyze bite forces and protect enamel integrity. By identifying micro-friction points and stress zones, dentists can intervene before structural damage occurs.

The core technology of bio-telemetry mapping is the digital occlusal analysis system. When a patient bites down on a thin, electronic sensor strip, the system measures force distribution and timing in real-time. It records which teeth contact first, how much force is applied to each tooth, and how the bite shifts during movement. Traditional bite paper only shows *where* teeth touch; digital telemetry shows *when* and with *how much force* they touch.

Micro-friction points—areas of excessive pressure or friction during jaw movement—are primary causes of enamel wear, cracked teeth, and TMJ disorders. If a single molar bears double its share of bite pressure, the enamel will eventually crack or erode at the gum line. Catching these stress points early allows for minor adjustments (occlusal equilibration) or the design of a custom protective nightguard.

Furthermore, bio-telemetry mapping is invaluable for patients receiving restorations like crowns or implants. It ensures that new restorations are perfectly integrated into the existing bite mechanics, preventing premature failure or discomfort. By shifting the clinical focus from reactive restoration to proactive force balance, preventative telemetry safeguards the dentition, ensuring a healthy, functional smile for life.`
  }
];

export default function BlogPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16 overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto container-gutter relative">
          <div className="max-w-4xl">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-accent mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6">
              Bethany Medical
              <br />
              <span className="text-gradient">Journal & Blog</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Explore scientific articles and diagnostic methodologies curated by Dr. Sarah Bethany. 
              High-value insights into advanced endodontics, smile design, and bio-telemetry.
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-10 sm:py-16 bg-muted/20 relative z-10">
        <div className="container mx-auto container-gutter max-w-4xl">
          <div className="space-y-8">
            {articles.map((article) => {
              const isExpanded = expandedId === article.id;
              return (
                <div 
                  key={article.id}
                  className="bg-card border border-border rounded-3xl p-6 sm:p-8 hover:border-accent/40 shadow-soft transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-snug">
                    {article.title}
                  </h2>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {article.images.map((imgUrl, i) => (
                      <div key={i} className="aspect-video rounded-xl overflow-hidden bg-muted relative">
                        <img 
                          src={imgUrl} 
                          alt={`${article.title} img ${i}`} 
                          className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isExpanded ? "auto" : "80px", 
                        opacity: 1 
                      }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-sm sm:text-base leading-relaxed text-muted-foreground mb-6"
                    >
                      {isExpanded ? (
                        <div className="whitespace-pre-line space-y-4">
                          {article.content}
                        </div>
                      ) : (
                        <p>{article.content.substring(0, 180)}...</p>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <button
                    onClick={() => toggleExpand(article.id)}
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        Close Article <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read Full Article <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
