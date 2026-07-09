import './ebeauty.css';

const services = [
  { emoji: "✂️", name: "Strzyżenie", price: "od 350 zł" },
  { emoji: "💄", name: "Makijaż",    price: "od 600 zł" },
  { emoji: "💅", name: "Manicure",   price: "od 250 zł" },
  { emoji: "🧖", name: "Masaż",      price: "od 450 zł" },
];

export const EBeauty = () => {
  return (
    <div className="beauty-landing">

      <div className="beauty-landing__hero">
        <div className="beauty-landing__hero-overlay" />
        <div className="beauty-landing__hero-content">
          <p className="beauty-landing__hero-eyebrow">Tylko dla Ciebie</p>
          <h1 className="beauty-landing__hero-title">Salon Lumière</h1>
          <p className="beauty-landing__hero-sub">Salon piękności klasy premium</p>
        </div>
      </div>

      <div className="beauty-landing__promo">
        <p className="beauty-landing__promo-title">💅 20% zniżki na pierwszą wizytę!</p>
        <p className="beauty-landing__promo-sub">Pokaż ten ekran recepcjonistce</p>
      </div>

      <div className="beauty-landing__rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="beauty-landing__star">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        ))}
        <span className="beauty-landing__rating-text">5.0 • 312 opinii</span>
      </div>

      <div className="beauty-landing__description">
        <p>
          Oferujemy pełen zakres usług beauty: od strzyżenia i koloryzacji po
          manicure i masaż. Tylko certyfikowani specjaliści i kosmetyki premium.
        </p>
      </div>

      <div className="beauty-landing__services">
        <p className="beauty-landing__services-title">Nasze usługi</p>
        <div className="beauty-landing__services-grid">
          {services.map((s) => (
            <div className="beauty-service-card" key={s.name}>
              <div className="beauty-service-card__emoji">{s.emoji}</div>
              <p className="beauty-service-card__name">{s.name}</p>
              <p className="beauty-service-card__price">{s.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="beauty-landing__info">
        <div className="beauty-landing__info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="beauty-landing__info-icon">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>al. Jerozolimskie, 155, Warszawa</span>
        </div>
        <div className="beauty-landing__info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="beauty-landing__info-icon">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Pn–Sb: 9:00 – 20:00</span>
        </div>
      </div>

      <div className="beauty-landing__actions">
        <button className="beauty-landing__btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="beauty-landing__btn-icon">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Umów wizytę online
        </button>
        <button className="beauty-landing__btn-secondary">
          Zobacz wszystkie usługi
        </button>
      </div>

    </div>
  );
};