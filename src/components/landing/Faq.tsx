"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What types of projects do you produce?",
    a: "We specialise in music videos, documentary films, branded content, and short-form storytelling. If it involves a camera and a story, we’re probably into it.",
  },
  {
    q: "What’s your typical production timeline?",
    a: "Music videos take around 2–4 weeks. Documentaries vary widely — from a few weeks to several months depending on complexity.",
  },
  {
    q: "Do you help with creative direction and concept development?",
    a: "Absolutely. Bring a rough idea, a mood board, or just a feeling — we’ll shape it into something shoot-ready.",
  },
  {
    q: "What’s the budget range for your projects?",
    a: "We work across a wide range of budgets. Music videos start at indie levels and scale with complexity. Documentary budgets depend heavily on travel, crew, and duration.",
  },
  {
    q: "Do you offer editing and post-production services?",
    a: "Yes — editing, colour grading, sound design, VFX (when needed), and mastering. We don’t leave you hanging with raw footage.",
  },
  {
    q: "Can you work with artists or brands outside our city/country?",
    a: "Definitely. Remote collaboration is standard for us. We work with clients across states and countries.",
  },
  {
    q: "Do you provide gear and crew?",
    a: "Yes. We can assemble a full production team plus pro-grade equipment tailored to your project.",
  },
  {
    q: "Can we use our own crew or equipment?",
    a: "Of course. We’re happy to collaborate with your team or blend crews — we play well with others.",
  },
  {
    q: "What’s your revision policy?",
    a: "Each project includes a defined number of revision rounds depending on the package. We keep it balanced — perfection without endless loops.",
  },
  {
    q: "How do we get started?",
    a: "Reach out with a brief description of your project. We’ll schedule a call, understand your needs, quote it, and move into pre-production.",
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
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-40 opacity-100 p-4 pt-0" : "max-h-0 opacity-0"
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
