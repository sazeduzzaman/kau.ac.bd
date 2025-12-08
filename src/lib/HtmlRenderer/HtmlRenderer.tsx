"use client";

import React from "react";

interface HtmlRendererProps {
  content?: string | null;
  className?: string; // optional additional class
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ content, className }) => {
  if (!content) return null;

  return (
    <div
      className={`html-renderer text-black ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default HtmlRenderer;
