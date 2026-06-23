import './erestaurant.css';


const menuItems = [
  { name: "Піца \"Маргарита\"", price: "285 грн" },
  { name: "Паста Карбонара",    price: "320 грн" },
  { name: "Тірамісу",           price: "145 грн" },
];


export const ERestourant = () => {
  return (
    <div className="demo-landing">
      <div
        className="demo-landing__hero"
      >
        <div className="demo-landing__hero-overlay" />
        <div className="demo-landing__hero-content">
          <p className="demo-landing__hero-eyebrow">
            Ексклюзивна пропозиція для вас
          </p>
          <h1 className="demo-landing__hero-title">Ristorante Bella</h1>
          <p className="demo-landing__hero-sub">
            Автентична італійська кухня • Київ
          </p>
        </div>
      </div>

      <div className="demo-landing__promo">
        <p className="demo-landing__promo-title">
          🎁 Власнику пляшки — десерт у подарунок!
        </p>
        <p className="demo-landing__promo-sub">Покажіть цей екран офіціанту</p>
      </div>

      <div className="demo-landing__rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="demo-landing__star"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        ))}
        <span className="demo-landing__rating-text">4.9 • 847 відгуків</span>
      </div>

      <div className="demo-landing__description">
        <p>
          Ми готуємо страви з продуктів від місцевих фермерів. Кожна страва — це
          справжня подорож до Італії. Ідеально для романтичних вечерь та ділових
          зустрічей.
        </p>
      </div>

      <div className="demo-landing__menu">
        <p className="demo-landing__menu-title">Хіти меню</p>
        <div className="demo-landing__menu-list">
          {menuItems.map((item) => (
            <div className="demo-landing__menu-item" key={item.name}>
              <span className="demo-landing__menu-name">{item.name}</span>
              <span className="demo-landing__menu-price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-landing__info">
        <div className="demo-landing__info-row">
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
            className="demo-landing__info-icon"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>вул. Хрещатик, 15, Київ</span>
        </div>
        <div className="demo-landing__info-row">
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
            className="demo-landing__info-icon"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Пн–Нд: 11:00 – 23:00</span>
        </div>
      </div>

      <div className="demo-landing__actions">
        <button className="demo-landing__btn-primary">
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
            className="demo-landing__btn-icon"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Забронювати столик
        </button>
        <button className="demo-landing__btn-secondary">
          Переглянути повне меню
        </button>
      </div>
    </div>
  );
};
