"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    title: "Absolutely blown away!",
    text: "We came in with nothing but a half-baked idea and a song we loved. The team jumped in with such enthusiasm and turned it into a full-blown cinematic experience. From planning the shots to the final colour grade, everything felt intentional and stylish. Smooth communication, zero drama, and the final cut? The song is at almost 6 million hits now and still growing.",
    reviewer: "- Chintamani (Folk artist)",
  },
  {
    title: "A film that truly captured who we are.",
    text: "Working with the team was an absolute pleasure from start to finish. They took the time to understand our legacy, our people, and the care that goes into every metre of fabric we produce at Prem Textiles. The final corporate film showcased our manufacturing process with such clarity and elegance, but what impressed us most was how beautifully they highlighted our values craftsmanship, quality, and reliability. Our global partners have already responded with overwhelmingly positive feedback. This film has become a proud representation of our brand.",
    reviewer: "- Saurabh Jain (Prem Textiles)",
  },
  {
    title: "The Himalayas, exactly the way we feel them.",
    text: "Partnering with Studio Cucumber for our high-altitude expedition film was an incredible experience. They kept up with us through snow, gravel, thin air, and some of the highest motorable roads on the planet, and pulled off breathtaking footage at every turn. The film perfectly reflects the spirit of Blue Mountain Expeditions: resilience, adventure, and a deep love for the mountains. Truly outstanding work in some of the toughest conditions imaginable.",
    reviewer: "- Dheeraj Bambroo (Blue Mountain Expeditions)",
  },
  {
    title: "Quality that feels way above the budget.",
    text: "Our band's first video with them looked like something straight off a major label release. We're already planning the next one.",
    reviewer: "",
  },
  {
    title: "Reliable and ridiculously talented.",
    text: "They delivered on time, kept us updated, and brought fresh ideas at every step. Couldn't ask for a better production partner.",
    reviewer: "",
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
              <div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.text}
                </p>
                <p className="text-gray-500 text-xs mt-3 font-medium">
                  {r.reviewer}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
