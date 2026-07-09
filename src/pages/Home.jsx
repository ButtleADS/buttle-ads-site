import { HeroSection } from "./../components/HeroSection/HeroSection";
import { AboutSection } from "./../components/AboutUs/AboutSection";

import { HowItWorksSection } from "./../components/HowItWorksSection/HowItWorksSection";
import { ProblemSection } from "./../components/ProblemSection/ProblemSection";
import { ResultsSection } from "./../components/ResaultSection/ResaultSection";
import { ShowcaseSection } from "./../components/ShowcaseSection/ShowcaseSection";
// import { StatsBanner } from "./../components/StatsBanner/StatsBanner";
import { FinalCtaSection } from "./../components/FinalCtaSection/FinalCtaSection";

export const Home = () => {
  return (
    <>
      <main className="container">
        <div className="min">
          <HeroSection />
          <AboutSection />
          <HowItWorksSection />
          <ProblemSection />
          <ResultsSection />
          <ShowcaseSection />
          {/* <StatsBanner /> це сторінка зі статистикою*/}
          <FinalCtaSection />
        </div>
      </main>
    </>
  );
};
