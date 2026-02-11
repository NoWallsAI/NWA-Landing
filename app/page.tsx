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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-nwa-text via-nwa-highlight to-nwa-cyan bg-clip-text text-transparent">
            Üdvözöljük a NoWalls.AI-nál
          </h1>
          <p className="text-lg md:text-xl text-nwa-metal mb-8">
            AI megoldások, amelyek átformálják vállalkozását
          </p>
        </motion.div>
      </section>

      {/* Introduction Video Section */}
      <VideoSection 
        title="Bemutatkozás"
        placeholder={true}
      />

      {/* Product Demo Video Section */}
      <VideoSection 
        title="Termék Bemutató"
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
