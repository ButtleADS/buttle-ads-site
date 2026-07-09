import './eauto.css';

const cars = [
  { name: "BMW 3 Series 2024",    badge: "W magazynie", price: "od $42,000" },
  { name: "Mercedes C-Class 2024", badge: "Top sprzedaży", price: "od $48,000" },
  { name: "BMW X5 2023",           badge: "Rabat 5%",    price: "od $65,000" },
];

const highlights = [
  { emoji: "🏆", label: "Dealer #1" },
  { emoji: "🔒", label: "Gwarancja 3l" },
  { emoji: "⚡", label: "Kredyt 0%" },
];

export const EAuto = () => {
  return (
    <div className="auto-landing">

      <div className="auto-landing__hero">
        <div className="auto-landing__hero-overlay" />
        <div className="auto-landing__hero-content">
          <p className="auto-landing__hero-eyebrow">Oferta ekskluzywna</p>
          <h1 className="auto-landing__hero-title">AutoPrime Warszawa</h1>
          <p className="auto-landing__hero-sub">Oficjalny dealer BMW & Mercedes</p>
        </div>
      </div>

      <div className="auto-landing__promo">
        <p className="auto-landing__promo-title">🚗 Bezpłatna jazda próbna dla Ciebie!</p>
        <p className="auto-landing__promo-sub">Zapisz się teraz — miejsc jest mało</p>
      </div>

      <div className="auto-landing__highlights">
        {highlights.map((h) => (
          <div className="auto-highlight" key={h.label}>
            <div className="auto-highlight__emoji">{h.emoji}</div>
            <p className="auto-highlight__label">{h.label}</p>
          </div>
        ))}
      </div>

      <div className="auto-landing__description">
        <p>
          Ponad 200 samochodów w magazynie. Oficjalna gwarancja producenta,
          własne centrum serwisowe i elastyczne warunki finansowania.
          Trade-in po korzystnym kursie.
        </p>
      </div>

      <div className="auto-landing__cars">
        <p className="auto-landing__cars-title">Gorące oferty</p>
        <div className="auto-landing__cars-list">
          {cars.map((car) => (
            <div className="auto-car-item" key={car.name}>
              <div className="auto-car-item__info">
                <p className="auto-car-item__name">{car.name}</p>
                <span className="auto-car-item__badge">{car.badge}</span>
              </div>
              <p className="auto-car-item__price">{car.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="auto-landing__info">
        <div className="auto-landing__info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auto-landing__info-icon">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>ul. Nowy Świat, 42, Warszawa</span>
        </div>
        <div className="auto-landing__info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auto-landing__info-icon">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Codziennie: 9:00 – 20:00</span>
        </div>
      </div>

      <div className="auto-landing__actions">
        <button className="auto-landing__btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auto-landing__btn-icon">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Umów jazdę próbną
        </button>
        <button className="auto-landing__btn-secondary">
          Zobacz wszystkie samochody
        </button>
      </div>

    </div>
  );
};