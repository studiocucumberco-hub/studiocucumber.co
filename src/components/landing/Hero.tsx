import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="font-Mont pb-16 bg-[#f8f8f8]">
      {/* HERO SECTION — Premium Cinematic Layout */}
      <header className="relative w-full h-screen pt-16 md:pt-20 text-white overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Film production backdrop"
          fill
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          priority
        />

        {/* Gold gradient wash */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 sm:px-14 md:px-24 text-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight text-[#F4F4F4]">
              We Shape <br /><span className="text-[#d9a537]">Stories</span> That <br />
              Stay.
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
              Films, campaigns, and cinematic narratives designed to move peopleand move culture.
            </p>

            <div className="flex gap-4 mt-8 md:hidden">
              <Link
                href="/portfolio"
                className="border border-[#d9a537] px-6 py-3 uppercase tracking-wide hover:bg-[#d9a537] hover:text-black transition-all"
              >
                View Work
              </Link>
              <Link
                href="/about"
                className="border border-white px-6 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition-all"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
