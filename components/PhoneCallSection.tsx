"use client";

import { motion } from "framer-motion";

export default function PhoneCallSection() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.a
          href="tel:+36309596017"
          className="inline-block group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative mb-6">
            {/* 3D Phone Icon with Glow */}
            <div className="relative inline-block">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-nwa-cyan to-nwa-cyan-bright opacity-30 blur-2xl scale-110 group-hover:opacity-50 transition-opacity duration-300" />
              
              {/* Icon container */}
              <div className="relative bg-gradient-to-br from-nwa-cyan to-nwa-cyan-bright p-8 rounded-full shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300">
                <svg
                  className="w-20 h-20 md:w-24 md:h-24 text-white transform group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-bold text-nwa-text group-hover:text-nwa-cyan transition-colors duration-300">
              Hívjon minket 08:00-tól 17:00-ig
            </p>
            <p className="text-xl md:text-2xl text-nwa-cyan font-semibold">
              +36 30 959 6017
            </p>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
