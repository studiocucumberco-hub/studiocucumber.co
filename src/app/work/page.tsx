import PortfolioCard from "@/components/ui/Card";

const Portfolio = () => {
  return (
    <section className=" text-[#3E4772] font-Mont min-h-screen px-6 sm:px-12 md:px-20 mt-30 md:mt-46 pb-20">
      <div className="mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold uppercase tracking-tight">
          Our Work
        </h2>
        <p className="mt-4 text-center text-sm sm:text-base text-[#555] w-full ">
          At Studio Cucumber, we bring visuals to life stories that linger, stir, and leave an imprint. Whether it’s a renowned film or a striking series, our work is driven by a devotion to cinematic artistry.
        </p>
      </div>
      <PortfolioCard />
    </section>
  );
};

export default Portfolio;
