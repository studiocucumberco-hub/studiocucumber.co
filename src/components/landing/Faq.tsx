"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What kind of stories does Studio Cucumber tell?",
    a: "We work at the junction of music and history, two worlds that shape human culture and memory. Our projects range from music videos charged with energy and identity to documentary films that explore people, places, and the echoes they leave behind. Whether it’s a short-form portrait or a full-bodied narrative, we look for stories that carry heart, rhythm, and a sense of time.",
  },
  {
    q: "How long does a Studio Cucumber production take?",
    a: "Every story has its own tempo. Music videos usually move fast, around 2–4 weeks from idea spark to final cut. Documentaries unfold at their own pace, sometimes over weeks, sometimes months, depending on the depth and distance of the journey. No matter the scale, we sketch a clear roadmap early on so you always know exactly where the project is headed.",
  },
  {
    q: "Can you help find the creative direction or tone of the project?",
    a: "Absolutely. This is where we dive deep. If you arrive with just a mood, a memory, a song, or a scattering of references, we help uncover the narrative spine. We build treatments, visual language, story flow, and the emotional beats that will define the final piece. Our goal is to make the project feel lived-in, intentional, and uniquely yours.",
  },
  {
    q: "What shapes the budget for a project?",
    a: "Budgets shift depending on the scope: crew size, locations, equipment, travel, post-production, and the ambition of the idea itself. Music videos can start compact and grow with the vision. Documentaries depend on research, interviews, logistics, and the length of the journey. We share a transparent breakdown from the start, so your resources align perfectly with the story you want to tell.",
  },
  {
    q: "Do you handle everything from shoot to the final cut?",
    a: "The entire pipeline stays in our hands. From cinematography and sound to editing, colour, music-driven pacing, and final mastering, we keep the process seamless and the vision cohesive. When everything flows through one creative house, the story stays true to its heartbeat from the first frame to the last.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full font-Mont bg-[#f8f8f8] px-6 sm:px-10 md:px-20 lg:px-24 pb-16">
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-[#3E4772] pb-2 tracking-tight font-bold">
          FAQs
        </h2>
        <p className="text-base sm:text-lg uppercase text-[#e1a730]">
          Answers You Need
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-medium text-[#3E4772] text-sm sm:text-base tracking-wide">
                {item.q}
              </span>

              <span className="text-[#3E4772] text-xl transition-transform duration-300"
                style={{
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}>
                +
              </span>
            </button>

            <div
              className={`text-justify overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 sm:max-h-40 opacity-100 p-4 pt-0" : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
