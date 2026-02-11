"use client";

export default function AnnouncementBar() {
  const text = "Ingyenes Audit";
  const repeatedText = Array(20).fill(text).join("  •  ");

  return (
    <div className="bg-gradient-to-r from-nwa-darker via-nwa-anthracite to-nwa-darker py-3 overflow-hidden relative z-50">
      <div className="flex whitespace-nowrap">
        <div className="animate-ticker inline-block">
          <span className="text-nwa-cyan font-semibold text-sm md:text-base tracking-wider">
            {repeatedText}
          </span>
        </div>
        <div className="animate-ticker inline-block">
          <span className="text-nwa-cyan font-semibold text-sm md:text-base tracking-wider">
            {repeatedText}
          </span>
        </div>
      </div>
    </div>
  );
}
