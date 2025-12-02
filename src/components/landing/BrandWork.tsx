"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

  // Duplicate for seamless loop
  const loop = [...logos, ...logos];

  return (
    <section className="w-full font-Mont bg-[#f8f8f8] px-6 sm:px-10 md:px-20 lg:px-24 pb-16">

      {/* HEADER */}
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-[#3E4772] pb-2 tracking-tight font-bold">
          Brands We Worked With
        </h2>
        <p className="text-base sm:text-lg uppercase text-[#e1a730]">
          Trusted by Clients
        </p>
      </div>

      {/* FRAMER MOTION MARQUEE */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,      // adjust speed here
            ease: "linear",
          }}
        >
          {loop.map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt="logo"
              width={140}
              height={60}
              className="opacity-80 hover:opacity-100 transition object-contain"
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
}
