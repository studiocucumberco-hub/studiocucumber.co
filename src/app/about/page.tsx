"use client";

import { useState } from "react";
import Image from "next/image";

const team = [
  {
    id: 1,
    name: "Shan",
    role: "Founder · Filmmaker · Writer · Voice Artist",
    img: "/profile/Shan.jpg",
    info: `Combining his passion for the outdoors with the visual arts, Shan studied film in New York 
    and has previously worked across Radio, TV, Telecom, Sports, Social Media, Tech, UAVs and Film 
    Production domains across continents. His core interests lie in music, history, cinema and the 
    great outdoors. He is based in sunny Goa!`
  },
  {
    id: 2,
    name: "Salil",
    role: "Development",
    img: "/profile/salil.jpg",
    info: `A marine engineer, sailor, sportsman and traveller, Salil is constantly scanning the globe 
    for outdoor activities and adventure sports. He is our logistics ninja and sorts all our shoots 
    and campaigns.`
  },
  {
    id: 3,
    name: "Divya",
    role: "Finance",
    img: "/profile/Divya.jpeg",
    info: `A highly acclaimed yoga coach and nutrition expert, Divya brings her sharp mind to the fore 
    managing our finances and ensuring the production never stops.`
  },
  {
    id: 4,
    name: "Avinash",
    role: "Business",
    img: "/profile/Shan.jpg",
    info: `A serial entrepreneur and consultant, Avinash handles the business side of Studio Cucumber. 
    His diverse portfolio spans Real Estate, Finance, Franchising, Brand Management, Hospitality, 
    Food & Beverage, Organic & Hemp Products, and Beauty & Luxury Products.`
  }
];

const About = () => {
  const [open, setOpen] = useState<typeof team[0] | null>(null);

  return (
    <section className="text-[#3E4772] font-Mont min-h-screen px-6 sm:px-12 md:px-20 mt-30 md:mt-46 pb-20">

      {/* HEADER */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 uppercase">
          Studio Cucumber
        </h1>
        <p className="text-lg italic text-[#3E4772]/70">
          Stories that last forever.
        </p>
      </div>

      {/* ABOUT TEXT */}
      <div className="max-w-6xl mx-auto text-[#3E4772]/90 leading-relaxed text-justify space-y-6 bg-[#e6e6e6]/40 p-8 rounded-xl shadow-md border border-[#99bffb]/40">

        <p>
          It all began in <b>New York City</b> back in 2012. At the time, we were working on an independent
          documentary under the mentorship of <b>multiple-Emmy award–winner Rafael Parra</b>. The project took
          us deep into the <b>Maha Kumbha Mela</b>, the largest human gathering on the planet. What started as
          an exploration of ancient traditions ended up sparking the idea for a new-age media label with
          storytelling at its core.
          <br /><br />
          Originally known as Wander Wonder and based in Mumbai, the pandemic years pushed us to reimagine
          our identity. We streamlined our focus, honed in on what we truly loved music and documentary
          filmmaking and rebuilt our creative direction from the ground up.
          <br /><br />
          Along the way, we added training modules to the mix, driven by a belief that quality media
          education should be accessible. Whether in a classroom or across continents over the internet,
          we’re committed to sharing what we’ve learned and helping new creators find their voice.
          <br /><br />
          <b>Why Cucumber?</b>
          <br />
          Because filmmaking doesn’t always have to feel heavy. We firmly believe stories hit harder when
          the process stays light, refreshing, and cool-headed just like a cucumber.
          <br />
          While our work dives into music, memory, and history themes that can get complex and emotional
          our approach remains calm, playful, and uncomplicated. Whether we explore ancient mythologies
          or quantum theory, we keep it light, fresh, and easy.
          <br />
          In a world where studios are named after storms, creatures, and cosmic events, someone had to
          bring something refreshing to the table.
          <br /><br />
          <b>Keepin’ it cool, keepin’ it light, keepin’ it refreshing frame by frame.</b> 
        </p>

        {/* TEAM SECTION */}
        <section className="py-12 mt-10 rounded-xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#3E4772]">Meet Our Team</h2>
            <div className="w-24 h-[3px] bg-gray-300 mx-auto mt-4 mb-12"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center"
                >
                  <div className="w-38 h-38 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      style={member.name === "Salil" ? {
                        objectPosition: "left top", 
                      } : undefined}
                    />
                  </div>

                  <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-500 font-medium text-sm">{member.role}</p>

                  <p className="mt-4 text-sm text-[#3E4772]/70 line-clamp-3 text-center">
                    {member.info}
                  </p>

                  <button
                    className="text-[#3E4772] text-sm mt-2 hover:opacity-70 cursor-pointer"
                    onClick={() => setOpen(member)}
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-6 z-50">
          <div className="bg-white max-w-lg p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">{open.name}</h3>
            <p className="text-[#3E4772]/80 text-sm leading-relaxed">
              {open.info}
            </p>

            <button
              className="mt-4 px-4 py-2 bg-[#3E4772] text-white rounded-lg cursor-pointer"
              onClick={() => setOpen(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default About;
