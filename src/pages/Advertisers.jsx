import { AdvantagesSection } from "./Advertisers/AdvantagesSection/AdvantagesSection";
import { AdvertisersHero } from "./Advertisers/AdvertisersHero/AdvertisersHero";
import Pricing from "./Advertisers/Pricing/Pricing";
import QuestionsCta from "./Advertisers/QuestionsCta/QuestionsCta";
import WarsawMap from "./Advertisers/WarsawMap/WarsawMap";

export const Advertisers = () => {
  return (
    <>
      <AdvertisersHero />
      <WarsawMap />
      <AdvantagesSection />
      <Pricing />
      <QuestionsCta />
    </>
  );
};
