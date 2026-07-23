import "./advertisersHero.css";

export const AdvertisersHero = () => {
  return (
    <section className="advertisers-hero">
      <div className="advertisers-hero__container">
        <span className="label label--brand">Dla reklamodawców</span>
        <h1 className="advertisers-hero__title">
          Reklama, która{" "}
          <span className="advertisers-hero__title-accent">działa</span>
        </h1>
        <h2 className="advertisers-hero__subtitle">
          Reklama, którą klienci trzymają w rękach. I nie dzielą się nią z
          nikim.
        </h2>
        <p className="advertisers-hero__text">
          Unikalny format, z którego korzystają wiodące marki na świecie. W
          naszej kampanii nie ma innych logo. Tylko Państwa produkt w rękach
          klienta, który spożywa go z wdzięcznością za prezent.
        </p>
      </div>
    </section>
  );
};
