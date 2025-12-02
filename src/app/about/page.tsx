"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className=" text-[#3E4772] font-Mont min-h-screen px-6 sm:px-12 md:px-20 pt-30 pb-20">
      <div className="flex flex-col items-center text-center mb-16">
        <Image
          src="/logo.png"
          alt="Studio Cucumber Logo"
          width={260}
          height={100}
          className="object-contain mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2  text-[#3E4772] uppercase">
          Studio Cucumber
        </h1>
        <p className="text-lg italic text-[#3E4772]/70 ">
          Stories that last forever.
        </p>
      </div>


      <div className="max-w-6xl mx-auto text-[#3E4772]/90 leading-relaxed text-justify space-y-6  bg-[#e6e6e6]/40 p-8 rounded-xl shadow-md border border-[#99bffb]/40">
        <p>
          It all began in New York City back in 2012. At the time, we were working on an independent documentary under the mentorship of multiple-Emmy award–winner <b>Rafael Parra</b>. The project took us deep into the Maha Kumbha Mela the largest human gathering on the planet. What started as an exploration of ancient traditions ended up sparking the idea for a new-age media label with storytelling at its core.
          <br /><br />
          Originally known as <b>Wander Wonder</b> and based in Bombay, the pandemic years pushed us to reimagine our identity. We streamlined our focus, honed in on what we truly loved <b>music and documentary filmmaking</b> and rebuilt our creative direction from the ground up.
          <br /><br />
          Along the way, we added <b>training modules</b> to the mix, driven by a belief that quality media education should be accessible. Whether in a classroom or across continents over the internet, we’re committed to sharing what we’ve learned and helping new creators find their voice.
        </p>
      </div>
    </section>
  );
};

export default About;
