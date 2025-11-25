import React from "react";
import ImportantLinksSection from "../HomePage/ImportantLinksSection/ImportantLinksSection";
import { Link2 } from "lucide-react";

const APA = () => {
  return (
    <div>
      <div
        className="relative px-4 py-16 text-white bg-emerald-900 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url("/images/skyblue-footer-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 opacity-100 bg-site-primary/50"></div>

        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-emerald-800/80 backdrop-blur-sm">
            <Link2 className="w-8 h-8 text-emerald-200" />
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            Academic Policy Agreement
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white md:text-xl">
            (APA) is a comprehensive document that outlines the academic
            policies.
          </p>
        </div>
      </div>
      <ImportantLinksSection />
    </div>
  );
};

export default APA;
