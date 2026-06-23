import './heroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          Ваш бренд у<br />
          <span className="hero__title-accent">руках людей</span>
        </h1>
        <p className="hero__subtitle">
          Ми роздаємо безкоштовну воду на вулицях міста, а ваша реклама отримує
          тисячі органічних контактів щодня
        </p>
        <div className="hero__actions">
          <a href="/Advertisers">
            <button className="btn btn--cream btn--lg">
              Стати партнером
              <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
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

      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
};