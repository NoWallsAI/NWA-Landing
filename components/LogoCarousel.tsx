"use client";

import Image from "next/image";

const referenceLogos = [
  "/references/ag-300x300.png",
  "/references/alphadent2-300x300.jpg",
  "/references/biokert-300x300.jpg",
  "/references/TheMasterMind-Partner-300x300.png",
  "/references/totheszter-300x300.jpg",
  "/references/536270836_122129527688906365_4977882242779823765_n-300x300.jpg",
];

export default function LogoCarousel() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-nwa-dark to-nwa-darker overflow-hidden relative">
      <div className="absolute inset-0 gradient-fade-left pointer-events-none z-10" />
      
      <div className="flex whitespace-nowrap">
        {/* First set of logos */}
        <div className="animate-scroll-reverse inline-flex items-center gap-12 md:gap-16 pr-12 md:pr-16">
          {referenceLogos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="animate-scroll-reverse inline-flex items-center gap-12 md:gap-16 pr-12 md:pr-16">
          {referenceLogos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
