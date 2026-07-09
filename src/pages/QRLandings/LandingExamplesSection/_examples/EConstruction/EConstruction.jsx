import './econstruction.css';

const works = [
  "Budowa domów i rezydencji",
  "Kompleksowy remont mieszkań",
  "Ocieplenie i prace elewacyjne",
  "Projektowanie wnętrz i architektura",
];

const stats = [
  { value: "150+", label: "obiektów" },
  { value: "12",   label: "lat doświadczenia" },
  { value: "98%",  label: "zadowolonych" },
];

export const EConstruction = () => {
  return (
    <div className="construction-landing">

      <div className="construction-landing__hero">
        <div className="construction-landing__hero-overlay" />
        <div className="construction-landing__hero-content">
          <p className="construction-landing__hero-eyebrow">Budujemy Twoje marzenie</p>
          <h1 className="construction-landing__hero-title">BudPro Group</h1>
          <p className="construction-landing__hero-sub">Budowa i remonty pod klucz</p>
        </div>
      </div>

      <div className="construction-landing__promo">
        <p className="construction-landing__promo-title">🏗️ Bezpłatny wyjazd i kosztorys!</p>
        <p className="construction-landing__promo-sub">Tylko dla posiadaczy butelki ButtleADS</p>
      </div>

      <div className="construction-landing__stats">
        {stats.map((s) => (
          <div className="construction-stat" key={s.label}>
            <p className="construction-stat__value">{s.value}</p>
            <p className="construction-stat__label">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="construction-landing__description">
        <p>
          Realizujemy pełny cykl prac budowlanych: od projektowania do oddania
          obiektu. Własna ekipa, certyfikowane materiały, gwarancja na wszystkie
          prace.
        </p>
      </div>

      <div className="construction-landing__works">
        <p className="construction-landing__works-title">Nasze usługi</p>
        <div className="construction-landing__works-list">
          {works.map((w) => (
            <div className="construction-work-item" key={w}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="construction-work-item__icon">
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span className="construction-work-item__text">{w}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="construction-landing__info">
        <div className="construction-landing__info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="construction-landing__info-icon">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>ul. Puławska, 7, Warszawa</span>
        </div>
        <div className="construction-landing__info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="construction-landing__info-icon">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Pn–Pt: 8:00 – 18:00</span>
        </div>
      </div>

      <div className="construction-landing__actions">
        <button className="construction-landing__btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="construction-landing__btn-icon">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Zamów bezpłatny kosztorys
        </button>
        <button className="construction-landing__btn-secondary">
          Zobacz nasze realizacje
        </button>
      </div>

    </div>
  );
};