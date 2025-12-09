"use client";

import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ClientLogos() {
  const logos = [
    { url: "/logo-png/1.png", link: "https://www.uncrushedleaves.com/" },
    { url: "/logo-png/2.png", link: "https://satnpaper.com/" },
    { url: "/logo-png/3.png", link: "https://0dot1.live/" },
    { url: "/logo-png/4.png", link: "https://www.instagram.com/herbsutra/" },
    { url: "/logo-png/5.png", link: "https://premtextiles.com/" },
    { url: "/logo-png/6.png", link: "https://www.instagram.com/pizzatoindore/" },
    { url: "/logo-png/7.png", link: "https://www.motilaloswal.com/" },
    { url: "/logo-png/8.png", link: "https://cleuz.com/" },
    { url: "/logo-png/9.png", link: "https://map-india.org/" },
    { url: "/logo-png/10.png", link: "https://www.aiwc.org.in/" },
    { url: "/logo-png/11.png", link: "https://www.instagram.com/herbsutra/" },
    { url: "/logo-png/12.png", link: "https://www.edelweissfin.com/" },
    { url: "/logo-png/13.png", link: "https://campusmall.in/" },
    { url: "/logo-png/14.png", link: "https://boldoutline.in/" },
    { url: "/logo-png/15.png", link: "https://www.instagram.com/bluemountainexpeditions/?hl=en" },
    { url: "/logo-png/16.png", link: "https://www.instagram.com/bandishprojekt" },
    { url: "/logo-png/17.png", link: "" },
  ];

  const [speed, setSpeed] = useState(50);
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // 🟦 Responsiveness
  useEffect(() => {
    const updateSpeed = () => {
      setSpeed(window.innerWidth < 768 ? 120 : 50);
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  // 🔥 Core infinite loop logic
  useAnimationFrame((t, delta) => {
    if (isHovering) return;
    const move = (delta / 1000) * speed;
    baseX.set(baseX.get() - move);
  });

  return (
    <section className="w-full font-Mont bg-[#f8f8f8] px-6 sm:px-10 md:px-20 lg:px-24 pb-16">
      <div className="text-left mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center uppercase text-[#3E4772] tracking-tight font-bold">
          Brands We Work With
        </h2>
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden w-full relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          style={{ x: baseX }}
          onUpdate={() => {
            const width = containerRef.current?.scrollWidth ?? 0;
            if (width && baseX.get() < -width / 2) baseX.set(0);
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <a key={idx} href={logo.link || "#"} target="_blank" className="shrink-0 block">
              <Image
                src={logo.url}
                alt="logo"
                width={160}
                height={80}
                className="opacity-80 hover:opacity-100 transition object-contain"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
