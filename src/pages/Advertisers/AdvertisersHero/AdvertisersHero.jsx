import './advertisersHero.css';

export const AdvertisersHero = () => {
  return (
    <section className="advertisers-hero">
      <div className="advertisers-hero__container">
        <span className="label label--brand">Dla reklamodawców</span>
        <h1 className="advertisers-hero__title">
          Reklama, która <span className="advertisers-hero__title-accent">działa</span>
        </h1>
        <p className="advertisers-hero__subtitle">
          Przedstaw swoją markę dosłownie w rękach tysięcy potencjalnych klientów.
          Naturalny kontakt, pozytywne emocje, zapadanie w pamięć.
        </p>
      </div>
    </section>
  );
};