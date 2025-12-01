"use client";
import { useState } from "react";
import Image from "next/image";

export interface VideoCategory {
  [key: string]: string[];
}

export const videoCategories: VideoCategory = {
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
  MusicVideos: [
    "https://youtu.be/DgCulfCj__g?si=E7pyyg_p8vTYq9WO",
    "https://youtu.be/VAQDi04xMs0?si=yPW4jMOMxmW9kZLU",
    "https://youtu.be/epFuCyC745k?si=cm9aFcCSEX1zCrAy",
    "https://youtu.be/XIIqGGZrp9Q?si=6dGCnvFPBYOHHTvu",
  ],
};


function extractId(url: string): string {
  try {
    const u = new URL(url);

    // 1) Standard watch URL: ?v=ID
    const v = u.searchParams.get("v");
    if (v) return v;

    // 2) youtu.be/ID
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "").split("?")[0];
    }

    // 3) youtube.com/embed/ID
    if (u.pathname.includes("/embed/")) {
      return u.pathname.split("/embed/")[1].split("?")[0];
    }
  } catch {}

  return "";
}


export default function VideoGallery() {
  const categories = Object.keys(videoCategories);
  const [active, setActive] = useState<string>(categories[0]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat: string) => (
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

      {/* Video Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {videoCategories[active].map((url: string, index: number) => {
          const id = extractId(url);
          const thumbnail = id
          ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
          : "/fallback-thumbnail.jpg";


          return (
            <button
              key={index}
              onClick={() => setActiveVideo(id)}
              className="group relative bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="relative w-full h-40">
                <Image
                  src={thumbnail}
                  alt="YouTube Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

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
