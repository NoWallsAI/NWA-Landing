import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoWalls.AI - AI Megoldások Vállalkozásoknak",
  description: "Prémium AI konzultáció és megoldások vállalkozásoknak. Ingyenes audit és személyre szabott AI stratégia.",
  keywords: ["AI", "mesterséges intelligencia", "vállalkozás", "konzultáció", "NoWalls.AI"],
  authors: [{ name: "NoWalls.AI" }],
  openGraph: {
    title: "NoWalls.AI - AI Megoldások Vállalkozásoknak",
    description: "Prémium AI konzultáció és megoldások vállalkozásoknak",
    type: "website",
    locale: "hu_HU",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={inter.className}>
        <AnnouncementBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
