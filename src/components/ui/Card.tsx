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
  "Society -History": [
    "https://youtu.be/mJhduSU7QYw",
    "https://youtu.be/c1HR1UsVNYA",
    "https://youtu.be/cAK-mddzw00",
    "https://youtu.be/aCU8v1NSPZ8",
    "https://youtu.be/wN7r4w36gik",
  ],
  CorporateVideos: [
    "https://youtu.be/MUK6WBDuoTM?si=j1dtxbXZ70wwCvBx",
    "https://youtu.be/qSPbWp1ZPNw?si=5sAPj7QXLJKUX07e",
    "https://youtu.be/LmOTGLf412Y",
    "https://youtu.be/NESo7Npee5E",
    "https://youtu.be/Z1PRST1v65U",
    "https://youtu.be/XZLvUS1sACI",
    "https://youtu.be/U4ybwJVPhPc",
  ],
};

export const videoMeta: Record<string, { title: string; desc: string }[]> = {
  MusicVideos: [
    { title: "Antariksh - Bandish Projekt feat. MC Mawali", desc: "This is the first track taken from the Bandish projekt collaboration with Swadesi from the Ep Khulle Naagde out on Aazadi records x Bhejafry records. Its a 6 track Ep consisting of rap in 4 different languages. This is the 2nd collaboration between Bandish Projekt & Swadesi after Katal Kalaa Ep." },
    { title: "Papletwali - Chintamani", desc: `"Papletwaali" is an adaptation of the Marathi folk song "Ago Sargewali" by Chintamani, a Koli singer-songwriter-composer for Pehli Pehel, a series of songs released by Zubaan, which is a music project that has been working to connect indie artists from different parts of the country.` },
    { title: "O Hansini - Aninda Bose", desc: "Jersey based crooner Aninda Bose brings back a classic, but set in New York City. From the OST Zehreela Insaan, originally sung by Kishore Kumar and composed by R.D. Burman." },
    {
      title: "Kya Yehi Pyaar Hai - Aninda Bose", desc: `Aninda’s back with another Kishore Kumar classic. This time aided by the lovely Aishwarya Majumdar. Originally sung by Lata Mangeshkar, and Kishore Kumar; composed by Rahul Dev Burman and written by Anand Bakshi. 
    Original Soundtrack from the film Rocky. Original Music released by Sa Re Ga Ma` },
  ],
  Trailers: [
    { title: "Sangam: The Confluence", desc: "Exploring the mythologies behind the biggest congregation in the world, the Maha Kumbha! Under the guidance of multiple Emmy Award winner Rafael Parra, this deep look into the eternal was screened in 20 festivals worldwide." },
    { title: "Sanatan", desc: "Reminiscing over ageless learnings from an encounter with a learned man, I walk the ancient ghats of Banaras or Varanasi, pondering life, humanity, the universe and the meaning of it all." },
    { title: "Elevate", desc: "No road too high for Dheeraj and his vehicle, as man and machine traverse ten of the highest roads in the world on a dizzying journey over some of the most remote landscapes in the high Himalayas." },
    { title: "Elevate (Extended)", desc: `The extended trailer for 'Elevate', formerly titled 'Aspire to Inspire'. We follow Dheeraj and his vehicle as they traverse some of the toughest and highest roads in the world.` },
    { title: "High Riders", desc: "Three men on motorcycles ride 3125 kilometres over some of the highest terrains in search of high-altitude lakes." },
  ],
  "Society -History": [
    { title: "Of Anarchy", desc: "Acclaimed Scottish historian, William Darlymple introduces his latest book, 'The Anarchy' based on the British East India Company, at an event for the Museum of Art and Photography, Bangalore." },
    { title: "The Sound of Silence", desc: "Gyanendra and Monica Purohit are real life heroes who are fighting the odds to bring joy to countless special children." },
    { title: "Aastha", desc: "A family away from their real families, these seniors have found their bliss in Astha Old Age Home." },
    { title: "A City Runs", desc: "The cleanest city of India came together to celebrate healthy living and kickstart a series of annual marathons. Clean Indore! Green Indore! This is the Indore Marathon!" },
    { title: "Leela", desc: "3D Projection Mapping on the facade of the City Palace in Jaipur. Watch Krishna and Radha like you've never seen before." },
  ],
  CorporateVideos: [
    { title: "Prem Textiles", desc: "Prem Textiles is one of Central India's most prominent export houses. We trace a strand of cotton and its journey to the finished product." },
    { title: "Universal Transformers", desc: "Renowned industrial appliance manufacturer, Universal Transformers, showcase their range of products and state-of-the-art facilities" },
    { title: "Diaspark", desc: "With operations spanning the globe, Diaspark is a leading global services provider and stands poised for a dynamic future." },
    { title: "Healthy Hearts", desc: "The annual edition of Cardiology Society of India's Cardio Conference." },
    { title: "Brut Force", desc: "Dheeraj and his expedition rely on the toughest friends on the toughest terrains. Brut Force: Made Tough" },
    { title: "Cleuz", desc: "Cleuz showcases their Wearable and Mobility solutions." },
    { title: "UAVIO", desc: "UAVIO showcase the cutting edge of aerial solutions." },
  ],
};

function extractId(url: string): string {
  try {
    const u = new URL(url);
    const v = u.searchParams.get("v");
    if (v) return v;
    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "").split("?")[0];
    if (u.pathname.includes("/embed/")) return u.pathname.split("/embed/")[1].split("?")[0];
  } catch { }
  return "";
}

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
            className={`px-4 py-2 rounded-lg text-xs md:text-sm tracking-wide transition-all border ${active === cat
                ? "bg-gray-900 text-white border-black"
                : "border-gray-300 hover:border-black hover:bg-black/5"
              }`}
          >
            {cat.replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>

      <div className={`grid gap-6 ${isWork ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2"}`}>
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
              {/* FIXED: REAL YOUTUBE STYLE 16:9 ASPECT RATIO */}
              <div className="relative w-full aspect-video">
                <Image
                  src={thumbnail}
                  alt="YouTube Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {meta && (
                isWork ? (
                  /* BEAUTIFUL /WORK LAYOUT */
                  <div className="px-5 py-6 text-left bg-white border-t border-gray-200">
                    <h3 className="font-semibold text-xl tracking-tight mb-3">
                      {meta.title}
                    </h3>

                    <p className="text-[15px] text-gray-700 leading-relaxed opacity-90">
                      {meta.desc}
                    </p>
                  </div>
                ) : (
                  /* DEFAULT NON-WORK LAYOUT */
                  <div className="p-4 text-left">
                    <h3 className="font-medium text-sm md:text-base mb-1">{meta.title}</h3>
                  </div>
                )
              )}


              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm tracking-widest">▶ PLAY</span>
              </div>
            </button>
          );
        })}
      </div>

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
