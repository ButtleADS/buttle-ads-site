// import { useState } from 'react'

import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutUs/AboutSection";

import "./index.css";
import { HowItWorksSection } from "./components/HowItWorksSection/HowItWorksSection";
import { ProblemSection } from "./components/ProblemSection/ProblemSection";
import { ResultsSection } from "./components/ResaultSection/ResaultSection";
import { ShowcaseSection } from "./components/ShowcaseSection/ShowcaseSection";
import { StatsBanner } from "./components/StatsBanner/StatsBanner";
import { FinalCtaSection } from "./components/FinalCtaSection/FinalCtaSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="container">
        <div className="min">
          <HeroSection />
          <AboutSection />
          <HowItWorksSection />
          <ProblemSection />
          <ResultsSection />
          <ShowcaseSection />
          <StatsBanner />
          <FinalCtaSection />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
