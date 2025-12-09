"use client";

import TeamSection from "@/components/ui/Team";
import { TeamMember } from "@/components/ui/Team";
const team1: TeamMember[] = [
  {
    id: 1,
    name: "Shan",
    role: "Founder · Filmmaker · Writer · Voice Artist",
    img: "/profile/Shan.jpg",
    bio: "Combining his passion of the outdoors with the visual arts, Shán studied film in New York and has previously worked across Radio, TV, Telecom, Sports, Social Media, Tech, UAVs and Film Production domains across continents. His core interests lie in music, history, cinema and the great outdoors. He is based in sunny Goa!",
  },
  {
    id: 2,
    name: "Divya",
    role: "Finance",
    img: "/profile/Divya.jpeg",
    bio: "A highly acclaimed yoga coach and nutrition expert, Divya brings her sharp mind to the fore managing our finances and ensuring the production never stops.",
  },
];
const team2: TeamMember[] = [
  {
    id: 1,
    name: "Salil",
    role: "Development",
    img: "/profile/salil.jpg",
    bio: "A marine engineer, sailor, sportsman and traveller, Salil is constantly scanning the globe for outdoor activities and adventure sports. He is our logistics ninja and sorts all our shoots and campaigns.",
  },
  {
    id: 2,
    name: "Avinash",
    role: "Business",
    bio: "A serial entrepreneur and consultant, Avinash handles the business side of Studio Cucumber. His diverse portfolio has interests spanning Real Estate, Finance, Franchising, Brand Management, Hospitality, Food & Beverage, Organic & Hemp Products, Beauty & Luxury Products",
  }
];

const About = () => {
  return (
    <section className="text-[#3E4772] font-Mont min-h-screen px-6 sm:px-12 md:px-20 mt-30 md:mt-46 pb-20">
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
          <b>Keepin’ it cool,<br/> Keepin’ it light,<br/> Keepin’ it refreshing<br/> Frame by frame.</b> 
        </p>

        <hr className="text-gray-300"/>
        <h2 className="text-3xl font-bold text-center text-[#3E4772]">
          Meet Our Team
        </h2>

        <TeamSection team={team1}/>
        <TeamSection team={team2}/>
      </div>
    </section>
  );
};

export default About;
