import './problemSection.css';
import problemSection from './../../images/problemSection/problem_section1.jpg';

const problems = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>,
    text: "Онлайн-реклама дорожчає і менш ефективна",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /></svg>,
    text: "Люди ігнорують банери та рекламу",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
    text: "Вартість ліда постійно росте",
  },
];

export const ProblemSection = () => {
  return (
    <section className="problem">
      <div className="problem__container">
        <div className="problem__grid">
          <div className="problem__content">
            <span className="label label--brand">Проблема</span>
            <h2 className="problem__title">
              Бізнесу потрібен<br />
              <span className="problem__title-accent">новий канал</span>
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
                Бізнесу потрібен новий канал, який реально приводить клієнтів.
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
                <p className="problem__img-caption-title">Фізичний канал залучення</p>
                <p className="problem__img-caption-text">Офлайн-реклама, що працює як онлайн-фейсбук</p>
              </div>
            </div>
            <div className="problem__badge">
              <p className="problem__badge-title">Не просто реклама</p>
              <p className="problem__badge-sub">— ми приводимо клієнтів</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};