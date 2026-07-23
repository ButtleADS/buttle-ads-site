import { Banner } from "./Banner/Banner";
import "./showcaseSection.css";

import workCard1 from "./../../images/showcaseSection/workCard1.png";
import workCard2 from "./../../images/showcaseSection/workCard2.png";
import workCard3 from "./../../images/showcaseSection/workCard3.png";

import showCase1 from "./../../images/showcaseSection/showCase1.png";
import showCase2 from "./../../images/showcaseSection/showCase2.png";
import { Link } from "react-router-dom";

const stats = [
  { value: "50K+", label: "Butelki to dla nas żaden problem" },
  { value: "25+", label: "Dostępnych lokalizacji w Warszawie" },
  { value: "100%", label: "Wyłączność marki na partii" },
  { value: "12%", label: "Prognozowana konwersja na lead", detail: "wskaźnik docelowy na wzór rynków światowych" },
];

const workCards = [
  {
    img: workCard1,
    alt: "Kod QR na każdej butelce",
    tag: "Technologia",
    title: "Kod QR na każdej butelce",
    text: "Każda rozdana butelka stanowi bezpośredni punkt wejścia na Twoją stronę internetową, do mediów społecznościowych lub na mobilną stronę docelową z Twoją unikalną ofertą.",
  },
  {
    img: workCard2,
    alt: "Wydarzenia biznesowe i korporacyjne",
    tag: "Premium",
    title: "Wydarzenia biznesowe i korporacyjne",
    text: "Bezpośrednia obecność Twojej marki na zamkniętych wydarzeniach biznesowych, dużych konferencjach IT, forach oraz ekskluzywnych wieczorach korporacyjnych.",
  },
  {
    img: workCard3,
    alt: "Sport i aktywny wypoczynek",
    tag: "Aktywność",
    title: "Sport i aktywny wypoczynek",
    text: "Biegacze, rowerzyści, bywalcy klubów fitness i stref rekreacyjnych — to najbardziej aktywna grupa odbiorców, która najbardziej potrzebuje wody i jest otwarta na nowe marki.",
  },
];

export const ShowcaseSection = () => {
  return (
    <section className="showcase">
      <Banner />
      {/* Роздача + статистика */}
      <div className="showcase__split">
        <div className="showcase__photo-col">
          <img
            src={showCase1}
            alt="Street distribution"
            className="showcase__photo"
          />
          {/* <div className="showcase__photo-badge">
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
              className="showcase__photo-badge-icon"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="showcase__photo-badge-text">
              50,000+ kontaktów/miesiąc
            </span>
          </div> */}
        </div>

        <div className="showcase__stats-col">
          <div className="showcase__sec">
            <span className="label label--brand">Skala</span>
          </div>
          <div className="showcase__sec">
            <h3 className="showcase__stats-title">
              Konkretne dane
              <br />
              dotyczące
              <br />
              <span className="showcase__stats-title-accent">
                Państwa przyszłej kampanii
              </span>
            </h3>
          </div>
          <div className="showcase__sec">
            <p className="showcase__stats-text">
              Zapewniamy systematyczną dystrybucję wody markowej w miejscach o
              największym natężeniu ruchu pieszego w mieście. Każda kampania
              podlega kompleksowej analizie i monitorowaniu.
            </p>
          </div>

          <div className="stat-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-card__value">{s.value}</div>
                <div className="stat-card__label">{s.label}</div>
            {s.detail && <div className="stat-card__det">*wskaźnik docelowy na wzór rynków światowych</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Де та як ми працюємо */}
      <div className="showcase__work">
        <div className="showcase__work-container">
          <div className="showcase__work-header">
            <h2 className="showcase__work-title">
              Gdzie i jak działa Twoja reklama
            </h2>
          </div>
          <div className="work-grid">
            {workCards.map((card) => (
              <div className="work-card" key={card.title}>
                <div className="work-card__img-wrap">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="work-card__img"
                  />
                  <div className="work-card__tag">{card.tag}</div>
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">{card.title}</h3>
                  <p className="work-card__text">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA-банер */}
      <div className="showcase__cta-banner animate-on-scroll">
        <img src={showCase2} alt="event" className="showcase__cta-bg" />
        <div className="showcase__cta-overlay" />
        <div className="showcase__cta-content">
          <p className="showcase__cta-pretitle">Gotowi na wielką premierę?</p>
          <h3 className="showcase__cta-title">
            Zamień przechodniów
            <br />w stałych klientów
          </h3>
          <div className="showcase__cta-actions">
            <Link to="/Advertisers">
              <button className="btn btn--cream btn--lg">
                Zobacz pakiety
                <svg
                  className="btn__icon"
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
            <Link to="/Contact">
              <button className="btn btn--ghost-light btn--lg">
                Skontaktuj się z nami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
