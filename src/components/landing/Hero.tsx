"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="font-Mont pb-16 bg-[#f8f8f8]">
      <header className="relative w-full h-screen pt-16 md:pt-20 overflow-hidden ">
        {/* Background */}
        <Image
          src="/banner.jpg"
          alt="Film production backdrop"
          fill
          className="absolute inset-0 object-cover brightness-[0.4] scale-105 animate-zoomSlow"
          priority
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 sm:px-14 md:px-24 text-center">
          <div className="max-w-2xl animate-fadeUp">
            <p className="text-3xl md:text-6xl font-semibold leading-tight tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              “If it can be written, or thought, it can be filmed”
            </p>

            <p className="mt-4 text-lg font-medium text-[#d9a537] tracking-widest opacity-90">
              - Stanley Kubrick
            </p>

            <div className="flex justify-center gap-4 mt-10 text-white md:hidden">
              <Link
                href="/work"
                className="border border-[#d9a537] p-3 uppercase tracking-widest transition-all duration-300"
              >
                View Work
              </Link>

              <Link
                href="/about"
                className="border border-white p-3 uppercase tracking-widest transition-all duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Animations */}
      <style jsx>{`
        .animate-zoomSlow {
          animation: zoomSlow 12s ease-in-out infinite alternate;
        }
        @keyframes zoomSlow {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.1);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease-out both;
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
