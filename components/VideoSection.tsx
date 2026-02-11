"use client";

import { motion } from "framer-motion";

interface VideoSectionProps {
  videoUrl?: string;
  title?: string;
  placeholder?: boolean;
}

export default function VideoSection({ 
  videoUrl = "", 
  title = "",
  placeholder = false 
}: VideoSectionProps) {
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    
    // YouTube URL conversion
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("youtu.be") 
        ? url.split("/").pop()?.split("?")[0]
        : new URLSearchParams(new URL(url).search).get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Loom URL conversion
    if (url.includes("loom.com")) {
      const videoId = url.split("/").pop()?.split("?")[0];
      return `https://www.loom.com/embed/${videoId}`;
    }
    
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 md:px-8 py-12 md:py-16"
    >
      <div className="container mx-auto max-w-6xl">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-nwa-text">
            {title}
          </h2>
        )}
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-2 border-nwa-anthracite bg-nwa-darker">
          <div className="aspect-video">
            {placeholder || !embedUrl ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-nwa-darker to-nwa-anthracite">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-nwa-cyan opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-nwa-metal text-lg">Videó hamarosan...</p>
                </div>
              </div>
            ) : (
              <iframe
                src={embedUrl}
                title={title || "Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
