import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { LazyMotion, domMax } from "framer-motion";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bethany Dental Care - Premium New York City Dental Clinic",
    template: "%s | Bethany Dental Care",
  },
  description:
    "Experience world-class personalized oral healthcare at Bethany Dental Care. We offer comprehensive dental services including general dentistry, cosmetic dentistry, emergency dental care, and cleanings at 45 Rockefeller Plaza, New York City.",
  keywords: [
    "Bethany Dental Care",
    "Manhattan dentist",
    "Rockefeller Plaza dentist",
    "NYC dental clinic",
    "private dentist New York",
    "cosmetic dentistry NYC",
    "emergency dentist NYC",
    "New York dentist",
  ],
  authors: [{ name: "Bethany Dental Care" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {/* Preload critical hero backgrounds (desktop config default sizes) */}
        <link 
          rel="preload" 
          as="image" 
          href="https://res.cloudinary.com/dbpdexty8/image/upload/f_auto,q_auto:good,w_1920/v1783661877/Medical_clinic_lobby_web_background_202607101107_gr0wsb.jpg" 
        />
        <link 
          rel="preload" 
          as="image" 
          href="https://res.cloudinary.com/dbpdexty8/image/upload/f_auto,q_auto:good,w_1920/v1783632651/Luxury_dental_clinic_interior_2K_202607100300_flsexz.jpg" 
        />
      </head>
      <body className={`${inter.variable} ${caveat.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <LazyMotion features={domMax}>
            {children}
            <MobileCtaBar />
          </LazyMotion>
        </SmoothScrollProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
