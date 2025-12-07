"use client";

const reviews = [
  {
    title: "Absolutely blown away!",
    text: "We came in with nothing but a half-baked idea and a song we loved. The team jumped in with such enthusiasm and turned it into a full-blown cinematic experience. From planning the shots to the final colour grade, everything felt intentional and stylish. Smooth communication, zero drama, and the final cut? The song is at almost 6 million hits now and still growing.",
    reviewer: "- Chintamani (Folk artist)",
  },
  {
    title: "A film that truly captured who we are.",
    text: "Working with the team was an absolute pleasure from start to finish. They took the time to understand our legacy, our people, and the care that goes into every metre of fabric we produce at Prem Textiles. The final corporate film showcased our manufacturing process with such clarity and elegance, but what impressed us most was how beautifully they highlighted our values craftsmanship, quality, and reliability. Our global partners have already responded with overwhelmingly positive feedback.",
    reviewer: "- Saurabh Jain (Prem Textiles)",
  },
  {
    title: "The Himalayas, exactly the way we feel them.",
    text: "Partnering with Studio Cucumber for our high-altitude expedition film was an incredible experience. They kept up with us through snow, gravel, thin air, and some of the highest motorable roads on the planet, and pulled off breathtaking footage at every turn. The film perfectly reflects the spirit of Blue Mountain Expeditions: resilience, adventure, and a deep love for the mountains. Truly outstanding work in some of the toughest conditions imaginable.",
    reviewer: "- Dheeraj Bambroo (Blue Mountain Expeditions)",
  },
];

export default function Reviews() {
  return (
    <section className="w-full font-Mont bg-[#f8f8f8] px-6 sm:px-10 md:px-20 lg:px-24 pb-16">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-[#3E4772] tracking-tight font-bold">
          Testimonials
        </h2>
      </div>

      {/* STATIC GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-[#3E4772] text-lg sm:text-xl font-semibold mb-3 tracking-wide">
              {r.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              {r.text}
            </p>

            <p className="text-gray-500 text-sm mt-3 font-semibold">
              {r.reviewer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
