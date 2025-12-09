"use client";

import { useState } from "react";
import Image from "next/image";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  img?: string;
  bio: string;
}

interface TeamSectionProps {
  team: TeamMember[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  const [active, setActive] = useState<TeamMember>(team[0]);

  return (
    <section className="mt-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* RIGHT CARDS / MOBILE STACK */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {team.map((member) => {
            const isActive = active.id === member.id;
            return (
              <button
                key={member.id}
                onClick={() => setActive(member)}
                className={`bg-white/70 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border transition-all w-full
                  ${isActive ? "border-[#3E4772]/40 shadow-lg" : "border-transparent hover:shadow-md"}`}
              >
                <div className="w-36 h-36 mb-4 rounded-full overflow-hidden border border-gray-200">
                  {member.img && 
                  (
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  )
                }
                </div>

                <h3 className={`text-lg font-bold tracking-wide ${isActive ? "text-[#3E4772]" : "text-[#3E4772]/80"}`}>
                  {member.name.toUpperCase()}
                </h3>
                <p className="text-sm text-[#3E4772]/60 mt-1">{member.role}</p>

                {/* MOBILE BIO */}
                <p className="lg:hidden text-xs text-[#3E4772]/80 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </button>
            );
          })}
        </div>
        {/* LEFT PANEL (Desktop) */}
        <div className="hidden lg:block bg-white/70 p-8 rounded-2xl shadow-lg border border-[#99bffb]/20 h-fit">
          <h3 className="text-2xl font-bold text-[#3E4772]">{active.name}</h3>
          <p className="text-sm text-[#3E4772]/70 mt-1">{active.role}</p>
          <p className="mt-2 text-xs text-[#3E4772]/90 leading-relaxed">{active.bio}</p>
        </div>

      </div>
    </section>
  );
}