"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ComingSoon = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    let dest = new Date("Jan 16, 2026 23:59:59").getTime();

    const timer = setInterval(() => {
      let now = new Date().getTime();
      let diff = dest - now;

      // If countdown expired → set next month
      if (diff <= 0) {
        let next = new Date();
        next.setMonth(next.getMonth() + 1);
        dest = next.getTime();
        return;
      }

      let d = Math.floor(diff / (1000 * 60 * 60 * 24));
      let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({
        days: d < 10 ? "0" + d : `${d}`,
        hours: h < 10 ? "0" + h : `${h}`,
        minutes: m < 10 ? "0" + m : `${m}`,
        seconds: s < 10 ? "0" + s : `${s}`,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-white">
      <div className="w-full px-4 mx-auto max-w-7xl md:px-5 l:px-5">
        <div className="flex flex-col items-center w-full gap-10 px-10 pt-10 pb-10 bg-white md:px-16 md:pt-16 rounded-2xl">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-2.5">
              <h2 className="text-5xl font-bold text-site-primary md:text-6xl">
                Coming Soon
              </h2>
              <p className="text-base text-gray-400">
                Just days remaining until the big reveal of our new product!
              </p>
            </div>

            {/* Countdown */}
            <div className="flex items-start justify-center gap-2">
              {/* Days */}
              <div className="flex flex-col items-center gap-0.5">
                <h3 className="text-2xl font-bold text-site-primary">
                  {time.days}
                </h3>
                <p className="text-xs text-gray-500">DAYS</p>
              </div>
              <h3 className="text-2xl font-medium text-gray-500">:</h3>

              {/* Hours */}
              <div className="flex flex-col items-center gap-0.5">
                <h3 className="text-2xl font-bold text-site-primary">
                  {time.hours}
                </h3>
                <p className="text-xs text-gray-500">HRS</p>
              </div>
              <h3 className="text-2xl font-medium text-gray-500">:</h3>

              {/* Minutes */}
              <div className="flex flex-col items-center gap-0.5">
                <h3 className="text-2xl font-bold text-site-primary">
                  {time.minutes}
                </h3>
                <p className="text-xs text-gray-500">MINS</p>
              </div>
              <h3 className="text-2xl font-medium text-gray-500">:</h3>

              {/* Seconds */}
              <div className="flex flex-col items-center gap-0.5">
                <h3 className="text-2xl font-bold text-site-primary">
                  {time.seconds}
                </h3>
                <p className="text-xs text-gray-500">SECS</p>
              </div>
            </div>

            {/* Email input */}
            <div className="flex flex-col items-center w-full gap-5">
              <h6 className="text-base font-semibold text-site-primary">
                Launch Date: January 23, 2026
              </h6>

              <div className="flex sm:flex-row flex-col gap-2.5 items-center">
                <Link
                  href="/"
                  className="px-3.5 py-2 bg-site-primary hover:bg-emerald-600 rounded-lg text-white font-medium shadow transition-all"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
