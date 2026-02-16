"use client";

import { motion } from "framer-motion";
import VideoSection from "@/components/VideoSection";
import CTAButton from "@/components/CTAButton";
import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-nwa-dark via-nwa-anthracite to-nwa-darker">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pt-2 leading-relaxed bg-gradient-to-r from-nwa-text via-nwa-highlight to-nwa-cyan bg-clip-text text-transparent">
            Üdvözöljük a NoWalls.AI-nál
          </h1>
        </motion.div>
      </section>

      {/* Important Video Section with Arrow */}
      <section className="container mx-auto px-4 md:px-8 text-center mb-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nwa-cyan mb-3">
            Első lépés
          </h2>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-12 h-12 text-nwa-cyan"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* First Video Section */}
      <VideoSection 
        placeholder={true}
      />

      {/* Second Video Section */}
      <VideoSection 
        placeholder={true}
      />

      {/* CTA Section */}
      <CTAButton href="/contact">
        Következő Lépés
      </CTAButton>

      {/* Logo Carousel */}
      <LogoCarousel />
    </main>
  );
}
