"use client";

import { motion } from "framer-motion";
import PhoneCallSection from "@/components/PhoneCallSection";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-nwa-dark via-nwa-anthracite to-nwa-darker">
      {/* Page Title */}
      <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-nwa-text to-nwa-cyan bg-clip-text text-transparent">
            Lépj Kapcsolatba Velünk
          </h1>
          <p className="text-lg md:text-xl text-nwa-metal">
            Válassz időpontot vagy hívj minket közvetlenül
          </p>
        </motion.div>
      </section>

      {/* Phone Call Section */}
      <PhoneCallSection />

      {/* Divider */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-nwa-anthracite to-transparent" />
          <span className="px-4 text-nwa-metal text-sm uppercase tracking-wider">vagy</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-nwa-anthracite to-transparent" />
        </div>
      </div>

      {/* Calendly Section */}
      <CalendlyEmbed />
    </main>
  );
}
