import { LandingExamplesSection } from "./QRLandings/LandingExamplesSection/LandingExamplesSection";
import { ProcessFlow } from "./QRLandings/ProcessFlow/ProcessFlow";
import { QrLandingsCta } from "./QRLandings/QrLandingCta/QrLandingCta";
import { QrLandingsHero } from "./QRLandings/QrLandingHero/QrLandingHero";

export const QRLandings = () => {
  return (
    <>
      <QrLandingsHero />
      <ProcessFlow />
      <LandingExamplesSection />
      <QrLandingsCta />
    </>
  );
};
