"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ClientLogos() {
  const logos = [
    "/logo-png/1.png",
    "/logo-png/2.png",
    "/logo-png/3.png",
    "/logo-png/4.png",
    "/logo-png/5.png",
    "/logo-png/6.png",
    "/logo-png/7.png",
    "/logo-png/8.png",
    "/logo-png/9.png",
    "/logo-png/10.png",
    "/logo-png/11.png",
    "/logo-png/12.png",
    "/logo-png/13.png",
    "/logo-png/14.png",
    "/logo-png/15.png",
    "/logo-png/16.png",
    "/logo-png/17.png",
  ];

  const loop = [...logos, ...logos];
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 768) {
        setDuration(5);
      } else {
        setDuration(30);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <section className="w-full font-Mont bg-[#f8f8f8] px-6 sm:px-10 md:px-20 lg:px-24 pb-16">
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-[#3E4772] pb-2 tracking-tight font-bold">
          Brands We Worked With
        </h2>
        <p className="text-base sm:text-lg uppercase text-[#e1a730]">
          Trusted by Clients
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <motion.div
          key={duration}     // 🔥 FIX: re-run animation on duration change
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          }}
        >
          {loop.map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt="logo"
              width={160}
              height={80}
              className="opacity-80 hover:opacity-100 transition object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
