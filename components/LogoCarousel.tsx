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
        <div className="animate-scroll inline-flex items-center space-x-12 md:space-x-16">
          {referenceLogos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
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
        
        <div className="animate-scroll inline-flex items-center space-x-12 md:space-x-16">
          {referenceLogos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
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
