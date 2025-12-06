"use client";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface VideoCategory {
  [key: string]: string[];
}

export const videoCategories: VideoCategory = {
  MusicVideos: [
    "https://youtu.be/DgCulfCj__g?si=E7pyyg_p8vTYq9WO",
    "https://youtu.be/VAQDi04xMs0?si=yPW4jMOMxmW9kZLU",
    "https://youtu.be/epFuCyC745k?si=cm9aFcCSEX1zCrAy",
    "https://youtu.be/XIIqGGZrp9Q?si=6dGCnvFPBYOHHTvu",
  ],
  Trailers: [
    "https://youtu.be/cWD9WhcekXQ?si=ozNtX7GqNgupM5qM",
    "https://youtu.be/J-zqmQYD29s?si=woV_gcYwwpPkPo7P",
    "https://youtu.be/g_CZ-6lL6Jw?si=3I3W5iKmFwlY-kJ3",
    "https://youtu.be/ZVSMkHV81GQ?si=BUhHUfPp_M92Dv5g",
    "https://youtu.be/PkmOa3M69kg",
  ],
  SocietyHistory: [
    "https://youtu.be/mJhduSU7QYw",
    "https://youtu.be/c1HR1UsVNYA",
    "https://youtu.be/cAK-mddzw00",
    "https://youtu.be/aCU8v1NSPZ8",
    "https://youtu.be/wN7r4w36gik",
  ],
  Corporate: [
    "https://youtu.be/MUK6WBDuoTM?si=j1dtxbXZ70wwCvBx",
    "https://youtu.be/qSPbWp1ZPNw?si=5sAPj7QXLJKUX07e",
    "https://youtu.be/LmOTGLf412Y",
    "https://youtu.be/NESo7Npee5E",
    "https://youtu.be/Z1PRST1v65U",
    "https://youtu.be/XZLvUS1sACI",
    "https://youtu.be/U4ybwJVPhPc",
  ],
};

/* --------------------- TITLES + DESCRIPTIONS ---------------------- */

export const videoMeta: Record<
  string,
  { title: string; desc: string }[]
> = {
  MusicVideos: [
    {
      title: "Antariksh - Bandish Projekt feat. MC Mawali",
      desc:
        "Track from Bandish Projekt x Swadesi EP Khulle Naagde. A multilingual experimental rap collaboration.",
    },
    {
      title: "Papletwali - Chintamani",
      desc:
        "Adaptation of Marathi folk ‘Ago Sargewali’, part of Zubaan’s indie artist series Pehli Pehel.",
    },
    {
      title: "O Hansini - Aninda Bose",
      desc:
        "A New York–shot revival of the Kishore Kumar classic from Zehreela Insaan.",
    },
    {
      title: "Kya Yehi Pyaar Hai - Aninda Bose",
      desc:
        "Another Kishore-Lata classic recreated with Aishwarya Majumdar; originally from the film Rocky.",
    },
  ],

  Trailers: [
    {
      title: "Sangam: The Confluence",
      desc:
        "A deep exploration of Maha Kumbh mythologies. Screened in 20+ festivals worldwide.",
    },
    {
      title: "Sanatan",
      desc:
        "A spiritual walk along the ancient ghats of Banaras exploring timeless questions of life.",
    },
    {
      title: "Elevate",
      desc:
        "Man and machine conquer ten of the highest Himalayan roads in a gripping adventure.",
    },
    {
      title: "Elevate (Extended)",
      desc:
        "Extended version of the Himalayan journey, previously titled 'Aspire to Inspire'.",
    },
    {
      title: "High Riders",
      desc:
        "A 3125 km motorcycle expedition to remote high-altitude lakes.",
    },
  ],

  SocietyHistory: [
    {
      title: "Of Anarchy",
      desc:
        "William Dalrymple introduces his book on the rise of the East India Company.",
    },
    {
      title: "The Sound of Silence",
      desc:
        "The Purohits bring joy to special children while battling societal odds.",
    },
    {
      title: "Aastha",
      desc:
        "A glimpse into seniors finding family at Aastha Old Age Home.",
    },
    {
      title: "A City Runs",
      desc:
        "Indore celebrates healthy living with its iconic city marathon.",
    },
    {
      title: "Leela",
      desc:
        "3D projection mapping on Jaipur City Palace showcasing divine stories in new form.",
    },
  ],

  Corporate: [
    {
      title: "Prem Textiles",
      desc:
        "Journey of cotton through one of Central India’s leading export houses.",
    },
    {
      title: "Universal Transformers",
      desc:
        "A showcase of their industrial manufacturing excellence.",
    },
    {
      title: "Diaspark",
      desc:
        "A global services provider poised for major growth.",
    },
    {
      title: "Healthy Hearts",
      desc:
        "Coverage of the annual Cardiology Society of India conference.",
    },
    {
      title: "Brut Force",
      desc:
        "How Dheeraj’s expedition relies on tough gear in extreme terrains.",
    },
    {
      title: "Cleuz",
      desc:
        "Their wearable and mobility solutions for modern industry.",
    },
    {
      title: "UAVIO",
      desc:
        "A look at cutting-edge aerial solutions and drone tech.",
    },
  ],
};

/* ---------------------- Extract YouTube IDs ---------------------- */

function extractId(url: string): string {
  try {
    const u = new URL(url);

    const v = u.searchParams.get("v");
    if (v) return v;

    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "").split("?")[0];
    }

    if (u.pathname.includes("/embed/")) {
      return u.pathname.split("/embed/")[1].split("?")[0];
    }
  } catch {}

  return "";
}

/* ---------------------------- MAIN UI ---------------------------- */

export default function VideoGallery() {
  const categories = Object.keys(videoCategories);
  const [active, setActive] = useState<string>(categories[0]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const pathname = usePathname();

  const isWork = pathname === "/work";

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm tracking-wide transition-all border ${
              active === cat
                ? "bg-gray-900 text-white border-black"
                : "border-gray-300 hover:border-black hover:bg-black/5"
            }`}
          >
            {cat.replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        className={`grid gap-6 ${
          isWork
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-2 md:grid-cols-3"
        }`}
      >
        {videoCategories[active].map((url, index) => {
          const id = extractId(url);
          const thumbnail = id
            ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
            : "/fallback-thumbnail.jpg";

          const meta = videoMeta[active][index];

          return (
            <button
              key={index}
              onClick={() => setActiveVideo(id)}
              className="group relative bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="relative w-full h-40 md:h-60">
                <Image
                  src={thumbnail}
                  alt="YouTube Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* TITLE + DESCRIPTION only on /work */}
              {isWork && meta && (
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-base mb-1">
                    {meta.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {meta.desc}
                  </p>
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm tracking-widest">
                  ▶ PLAY
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
