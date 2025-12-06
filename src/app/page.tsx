import Hero from "@/components/landing/Hero";
import ClientLogos from "@/components/landing/BrandWork";
import Portfolio from "@/components/landing/Portfolio";
import FAQ from "@/components/landing/Faq";
import Reviews from "@/components/landing/Review";
export default function Home() {
  return (
    <div className="h-auto">
      <Hero />
      <Portfolio />
      <ClientLogos/>
      <Reviews />
      <FAQ />
    </div>
  );
}
