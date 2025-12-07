import PortfolioCard from "@/components/ui/Card";

const Portfolio = () => {
  return (
    <section className=" text-[#3E4772] font-Mont min-h-screen px-6 sm:px-12 md:px-20 mt-30 md:mt-46 pb-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold uppercase tracking-tight">
          Our Work
        </h2>
      </div>
      <PortfolioCard />
    </section>
  );
};

export default Portfolio;
