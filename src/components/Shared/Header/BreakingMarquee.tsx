"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

export interface MarqueePropsItem {
  title: string;
  href: string;
}

interface BreakingMarqueeProps {
  items: MarqueePropsItem[];
  speed?: number; // pixels per frame
}

const BreakingMarquee: React.FC<BreakingMarqueeProps> = ({
  items,
  speed = 1,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    if (!marqueeRef.current) return;
    setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
  }, [items]);

  useEffect(() => {
    if (!marqueeWidth) return;
    let animationFrame: number;

    const step = () => {
      if (!paused) {
        setOffset((prev) => (prev + speed >= marqueeWidth ? 0 : prev + speed));
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [marqueeWidth, paused, speed]);

  if (!items.length) return null;

  return (
    <div
      className="relative w-full overflow-hidden text-white bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center">
        <div className="flex items-center gap-2 px-5 py-2 text-sm font-semibold shadow-lg breaking-tag bg-site-accent ">
          LATEST NEWS
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center whitespace-nowrap"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {duplicatedItems.map((news, i) => (
              <Link
                key={i}
                href={`/news/${news.href.split("/").pop()}`}
                className="flex items-center gap-1 mx-8 text-xs cursor-pointer text-white/90 hover:text-site-primary whitespace-nowrap"
              >
                <span className="animate-blink text-site-primary">●</span>
                {/* <span>{news.title}</span> */}
                <span>{`/news/${news.href.split("/").pop()}`}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingMarquee;
