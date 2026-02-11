"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-nwa-dark/80 backdrop-blur-md border-b border-nwa-anthracite">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="NoWalls.AI"
            width={180}
            height={60}
            className="h-12 w-auto hover:opacity-80 transition-opacity"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
