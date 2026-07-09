import "./aboutSection.css";

export const AboutSection = () => {
  const cards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      title: "Naturalna lojalność",
      text: "Twój klient otrzymuje realną wartość w upalny dzień. Pozytywne emocje związane z ugaszeniem pragnienia automatycznie kojarzą się z Twoją marką.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Hiperlokalne targetowanie ",
      text: "Dostarczamy wodę tam, gdzie skupia się właśnie Twoja grupa docelowa: centra biznesowe, centra IT, ekskluzywne kluby fitness czy zamknięte wydarzenia biznesowe.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="5" height="5" x="3" y="3" rx="1" />
          <rect width="5" height="5" x="16" y="3" rx="1" />
          <rect width="5" height="5" x="3" y="16" rx="1" />
          <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
          <path d="M21 21v.01" />
          <path d="M12 7v3a2 2 0 0 1-2 2H7" />
          <path d="M3 12h.01" />
          <path d="M12 3h.01" />
          <path d="M12 16v.01" />
          <path d="M16 12h1" />
          <path d="M21 12v.01" />
          <path d="M12 21v-1" />
        </svg>
      ),
      title: "Cyfrowy kontakt",
      text: "Każda butelka posiada unikalny kod QR, który prowadzi do Twojej mobilnej strony docelowej. Użytkownik skanuje kod i natychmiast dokonuje zakupu lub rejestruje się w usłudze.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      title: "Przejrzysta analityka",
      text: "Zapomnij o nieefektywnych billboardach. Zyskujesz nowy, mierzalny kanał pozyskiwania klientów z przejrzystą analityką każdego skanowania.",
    },
  ];

  return (
    <section className="about">
      <div className="about__container">
        <div className="about__header">
          <span className="label label--brand">kim jesteśmy</span>
          <h2 className="about__title">
            Marketing fizyczny,
            <br />
            generujący leady
          </h2>
          <p className="about__subtitle">
            Buttle ADS to pierwsza platforma medialna, która przekształca zwykłą
            dystrybucję wody w skuteczne narzędzie sprzedaży. Łączymy wysokiej
            jakości kontakt offline z konwersją cyfrową.
          </p>
        </div>

        <div className="about__grid">
          {cards.map((card) => (
            <div className="feature-card" key={card.title}>
              <div className="feature-card__icon-wrap">{card.icon}</div>
              <h3 className="feature-card__title">{card.title}</h3>
              <p className="feature-card__text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
