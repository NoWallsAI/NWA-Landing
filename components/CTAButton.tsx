"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <div className="flex justify-center py-12 md:py-16">
      <Link href={href}>
        <motion.button
          className="px-12 py-5 bg-gradient-to-r from-nwa-cyan to-nwa-cyan-bright text-white font-bold text-lg md:text-xl rounded-full shadow-lg glow-cyan-hover transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.button>
      </Link>
    </div>
  );
}
