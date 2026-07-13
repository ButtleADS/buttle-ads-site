import './advantagesSection.css';

const advantages = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Pełna personalizacja",
    text: "Unikalny design butelki z Twoim brandingiem, kodami QR i materiałami promocyjnymi",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Wybór lokalizacji",
    text: "Wybierz punkty dystrybucji zgodnie z Twoją grupą docelową",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Szczegółowa analityka",
    text: "Raporty o liczbie dystrybucji, geografii i interakcjach z kodami QR",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Elastyczny harmonogram",
    text: "Planuj kampanie na wydarzenia, sezony lub stałą obecność",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Jakość premium",
    text: "Tylko certyfikowana woda i ekologiczne materiały butelek",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Szybki start",
    text: "Od pomysłu do dystrybucji w 5–7 dni roboczych",
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="advantages">
      <div className="advantages__container">
        <div className="advantages__header">
          <h2 className="advantages__title">Twoje korzyści</h2>
          <p className="advantages__subtitle">
            Wszystko, czego potrzebujesz do udanej kampanii reklamowej
          </p>
        </div>

        <div className="advantages__grid">
          {advantages.map((adv) => (
            <div className="adv-card" key={adv.title}>
              <div className="adv-card__icon-wrap">{adv.icon}</div>
              <h3 className="adv-card__title">{adv.title}</h3>
              <p className="adv-card__text">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};