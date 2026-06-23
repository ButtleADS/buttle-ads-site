import "./howItWorksSection.css";
import howItWorks from "./../../images/howItWorks/how_it_works1.jpg";
const steps = [
  {
    num: "01",
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Аналіз аудиторії",
    text: "Визначаємо, де саме живе ваша цільова аудиторія — парки, бізнес-центри, спортивні заходи.",
  },
  {
    num: "02",
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
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    title: "Підготовка кампанії",
    text: "Розробляємо дизайн пляшок, QR-коди та міні-лендинг під вашу пропозицію.",
  },
  {
    num: "03",
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
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Таргетована роздача",
    text: "Команда ButtleADS роздає пляшки у конкретних точках міста серед потрібних людей.",
  },
  {
    num: "04",
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
        <path d="M14 4.1 12 6" />
        <path d="m5.1 8-2.9-.8" />
        <path d="m6 12-1.9 2" />
        <path d="M7.2 2.2 8 5.1" />
        <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
      </svg>
    ),
    title: "Переходи через QR",
    text: "Користувач сканує QR → потрапляє на ваш лендинг → залишає заявку або купує.",
  },
  {
    num: "05",
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
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Ліди і продажі",
    text: "Ви отримуєте реальних зацікавлених клієнтів — не покази, а апруви.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="how">
      <div className="how__container">
        <div className="how__grid">
          <div className="how__image-col">
            <div className="how__image-wrap">
              <img
                src={howItWorks}
                alt="ButtleADS backpack"
                className="how__image"
              />
              <div className="how__image-badge">
                <p className="how__badge-num">12%</p>
                <p className="how__badge-text">середня конверсія QR → заявка</p>
              </div>
            </div>
          </div>

          <div className="how__content">
            <span className="label label--brand">Як це працює</span>
            <h2 className="how__title">
              5 кроків до
              <br />
              <span className="how__title-accent">реальних клієнтів</span>
            </h2>

            <div className="steps">
              {steps.map((step) => (
                <div className="step" key={step.num}>
                  <div className="step__icon-wrap">{step.icon}</div>
                  <div className="step__body">
                    <div className="step__meta">
                      <span className="step__num">{step.num}</span>
                      <h3 className="step__title">{step.title}</h3>
                    </div>
                    <p className="step__text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/Advertisers" className="how__cta">
              <button className="btn btn--dark btn--lg">
                Запустити кампанію
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
          </div>
        </div>
      </div>
    </section>
  );
};
