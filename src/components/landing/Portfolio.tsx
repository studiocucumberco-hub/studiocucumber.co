import PortfolioCard from "@/components/ui/Card";
const Portfolio = () => {
  return (
    <section className="w-full font-Mont bg-[#f8f8f8] px-6 sm:px-10 md:px-20 lg:px-24 pb-16">
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  uppercase text-[#3E4772] pb-2 tracking-tight font-bold">
          Our Portfolio
        </h2>
        <p className="text-base sm:text-lg uppercase text-[#e1a730]">
          Stories That Speak
        </p>
      </div>

      <PortfolioCard/>
    </section>
  );
};

export default Portfolio;
