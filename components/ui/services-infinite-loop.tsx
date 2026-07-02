"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Sparkles, ShieldAlert, Clock, HeartPulse, Activity } from "lucide-react";

export function InfiniteServicesSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1800); // 1.8 seconds rapid fluid loop timing

    return () => clearTimeout(timer);
  }, [api, current]);

  const servicesData = [
    {
      id: "92%",
      title: "Comfort & Care Protocols",
      desc: "Our exclusive sedation and clinical behavior architecture ensures patients feel absolute zero anxiety during visits.",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
      icon: <Sparkles className="h-5 w-5 text-cyan-400" />
    },
    {
      id: "24/7",
      title: "Emergency Dental Infrastructure",
      desc: "Experiencing sudden acute pain or cosmetic injury? Our specialized Manhattan emergency response team is standing by.",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
      icon: <ShieldAlert className="h-5 w-5 text-rose-400" />
    },
    {
      id: "7 Min",
      title: "Rapid Access Architecture",
      desc: "Zero waiting room fatigue. Our precision scheduling pipeline locks average wait times strictly under 7 minutes.",
      img: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=600&auto=format&fit=crop",
      icon: <Clock className="h-5 w-5 text-emerald-400" />
    },
    {
      id: "3/4",
      title: "Community Endorsed Excellence",
      desc: "Three out of every four new patients choose our Rockefeller Center suite via organic word-of-mouth professional referrals.",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop",
      icon: <HeartPulse className="h-5 w-5 text-blue-400" />
    },
    {
      id: "85%",
      title: "Advanced Healthy Habits Mapping",
      desc: "Deploying high-tech bio-tracking and preventative diagnostic telemetry to keep our corporate community ahead of dental friction.",
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop",
      icon: <Activity className="h-5 w-5 text-indigo-400" />
    }
  ];

  return (
    <div className="w-full py-20 lg:py-32 bg-[#09090b] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col gap-10">
          
          {/* Dynamic Core Header Section */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-left text-white max-w-4xl leading-[1.15]">
              Redefining Dental Excellence <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 block sm:inline">Through Trust and Clinical Innovation.</span>
            </h2>
            <p className="text-xs md:text-sm font-mono tracking-widest text-zinc-500 uppercase mt-1">
              // Data Diagnostics & Core Metrics Portfolio
            </p>
          </div>
          
          {/* Hardware-Accelerated 120FPS Carousel Grid System */}
          <Carousel setApi={setApi} className="w-full transform-gpu will-change-transform" opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-4 select-none">
              {servicesData.map((service) => (
                <CarouselItem key={service.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 transform-gpu">
                  <div 
                    className="group flex flex-col justify-end rounded-2xl aspect-[3/4] bg-cover bg-center relative overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${service.img})` }}
                  >
                    {/* Shadow Layer Gradient to protect glass text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-85 z-10 transition-opacity group-hover:opacity-95" />

                    {/* PREMIUM TARGETED GLASSMORPHISM TEXT BOX */}
                    <div className="relative z-20 p-5 bg-zinc-950/40 backdrop-blur-xl m-4 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:border-white/20">
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-lg font-black text-white tracking-tighter">
                          {service.id}
                        </span>
                        {service.icon}
                      </div>

                      <h3 className="text-base font-bold text-white font-sans tracking-tight mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-3 group-hover:text-white transition-colors">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
