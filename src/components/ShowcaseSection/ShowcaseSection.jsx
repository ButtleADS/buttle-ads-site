import { Banner } from "./Banner/Banner";
import "./showcaseSection.css";

import workCard1 from "./../../images/showcaseSection/workCard1.png";
import workCard2 from "./../../images/showcaseSection/workCard2.png";
import workCard3 from "./../../images/showcaseSection/workCard3.png";

import showCase1 from "./../../images/showcaseSection/showCase1.png";
import showCase2 from "./../../images/showcaseSection/showCase2.png";

const stats = [
  { value: "50K+", label: "Охоплення" },
  { value: "25+", label: "Локацій" },
  { value: "8K+", label: "QR-сканів" },
  { value: "12%", label: "Конверсій" },
];

const workCards = [
  {
    img: workCard1,
    alt: "QR-код на кожній пляшці",
    tag: "Технологія",
    title: "QR-код на кожній пляшці",
    text: "Кожна роздача — це клік. Пряме посилання на ваш сайт, акцію або соцмережу.",
  },
  {
    img: workCard2,
    alt: "Корпоративні заходи",
    tag: "Преміум",
    title: "Корпоративні заходи",
    text: "Присутність бренду на бізнес-подіях, конференціях та корпоративних вечорах.",
  },
  {
    img: workCard3,
    alt: "Спорт та рух",
    tag: "Активність",
    title: "Спорт та рух",
    text: "Бігуни, велосипедисти, відвідувачі фітнес-клубів — найбільш активна аудиторія.",
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
          <div className="showcase__photo-badge">
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
              50,000+ контактів/місяць
            </span>
          </div>
        </div>

        <div className="showcase__stats-col">
          <div className="showcase__sec">
            <span className="label label--brand">Масштаб</span>
          </div>
          <div className="showcase__sec">
            <h3 className="showcase__stats-title">
              Тисячі людей
              <br />
              щодня тримають
              <br />
              <span className="showcase__stats-title-accent">ваш бренд</span>
            </h3>
          </div>
          <div className="showcase__sec">
            <p className="showcase__stats-text">
              Ми роздаємо брендовану воду в найбільш людних місцях міста. Кожна
              пляшка — це живий рекламний носій, який людина бере добровільно.
            </p>
          </div>

          <div className="stat-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-card__value">{s.value}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Де та як ми працюємо */}
      <div className="showcase__work">
        <div className="showcase__work-container">
          <div className="showcase__work-header">
            <h2 className="showcase__work-title">Де та як ми працюємо</h2>
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
          <p className="showcase__cta-pretitle">
            Готові запустити свою кампанію?
          </p>
          <h3 className="showcase__cta-title">
            Ваш бренд заслуговує
            <br />
            на більше
          </h3>
          <div className="showcase__cta-actions">
            <a href="/Advertisers">
              <button className="btn btn--cream btn--lg">
                Переглянути пакети
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
            </a>
            <a href="/Contact">
              <button className="btn btn--ghost-light btn--lg">
                Зв'язатися з нами
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
