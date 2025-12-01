"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    title: "“Absolutely blown away!”",
    text: "The team took our rough idea for a music video and turned it into something cinematic. Smooth communication, zero drama, and the final cut? Chef’s kiss.",
  },
  {
    title: "“Professional, creative, and fast.”",
    text: "We worked with them on a short documentary, and they handled everything from planning to editing with so much care. The storytelling was beyond what we expected.",
  },
  {
    title: "“They made the whole process fun.”",
    text: "I was nervous about being on camera, but the crew made me feel completely at ease. The final product looked slick and super polished.",
  },
  {
    title: "“Quality that feels way above the budget.”",
    text: "Our band’s first video with them looked like something straight off a major label release. We’re already planning the next one.",
  },
  {
    title: "“Reliable and ridiculously talented.”",
    text: "They delivered on time, kept us updated, and brought fresh ideas at every step. Couldn’t ask for a better production partner.",
  },
];

export default function Reviews() {
  return (
    <section className="w-full font-Mont bg-[#f8f8f8] px-6 sm:px-10 md:px-20 lg:px-24 pb-16">
      
      {/* HEADER */}
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-[#3E4772] pb-2 tracking-tight font-bold">
          Reviews
        </h2>
        <p className="text-base sm:text-lg uppercase text-[#d9a537]">
          What Clients Say
        </p>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 2 },
        }}
        speed={900}
        className="w-full"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
              <h3 className="text-[#3E4772] text-lg sm:text-xl font-semibold mb-3 tracking-wide">
                {r.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {r.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
