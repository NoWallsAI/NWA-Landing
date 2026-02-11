"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div
          className="calendly-inline-widget rounded-xl overflow-hidden shadow-2xl border-2 border-nwa-anthracite"
          data-url="https://calendly.com/nowallsai/nwa-ai-konzultacio?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=00b7d6&text_color=f2f2f2&background_color=1c1f24"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
