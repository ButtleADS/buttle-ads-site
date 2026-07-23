import "./problemSection.css";
import problemSection from "./../../images/problemSection/problem_section1.jpg";

const problems = [
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
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
      </svg>
    ),
    text: "Aukcje Google i Meta są przegrzane. Koszt reklamy cyfrowej rośnie z miesiąca na miesiąc, pochłaniając Twoją marżę.",
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
        <path d="m4.9 4.9 14.2 14.2" />
      </svg>
    ),
    text: "Całkowita ślepota na banery. Użytkownicy nauczyli się automatycznie ignorować reklamy na smartfonach i billboardach.",
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
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    text: "Ciągły wzrost kosztu pozyskania klienta. Koszt pozyskania nowego klienta (CAC) rośnie, a skuteczność standardowych kreacji spada.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="problem">
      <div className="problem__container">
        <div className="problem__grid">
          <div className="problem__content">
            <span className="label label--brand">Problem</span>
            <h2 className="problem__title">
              Tradycyjne kanały marketingowe
              <br />
              <span className="problem__title-accent">
                już się nie opłacają
              </span>
            </h2>

            <div className="problem__list">
              {problems.map((p) => (
                <div className="problem-item" key={p.text}>
                  <div className="problem-item__icon-wrap">{p.icon}</div>
                  <p className="problem-item__text">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="problem__quote">
              <p className="problem__quote-text">
                A nawet jeśli ktoś zauważy wasz billboard — wasza reklama musi
                dzielić uwagę odbiorców z pięcioma innymi konkurentami na tym
                samym nośniku. Płacicie za to, by was ignorowano.
              </p>
            </div>
          </div>

          <div className="problem__visual">
            <div className="problem__img-wrap">
              <img
                src={problemSection}
                alt="ButtleADS bottles"
                className="problem__img"
              />
              <div className="problem__img-overlay" />
              <div className="problem__img-caption">
                <p className="problem__img-caption-title">
                  Fizyczny kanał pozyskiwania klientów.
                </p>
                <p className="problem__img-caption-text">
                  Reklama offline, która działa jak Facebook online.
                </p>
              </div>
            </div>
            <div className="problem__badge">
              <p className="problem__badge-title">
                Marketing efektywnościowy <br /> nowej generacji
              </p>
              {/* <p className="problem__badge-sub">— ми приводимо клієнтів</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
