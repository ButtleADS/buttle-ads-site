import { useState } from "react";
import './landingExamplesSection.css';
import { ERestourant } from "./_examples/ERestaurant/ERestaurant";

const categories = [
  { id: "restaurant", emoji: "🍽️", label: "Ресторан" },
  { id: "beauty",     emoji: "💅", label: "Салон краси" },
  { id: "auto",       emoji: "🚗", label: "Авто салон" },
  { id: "construction", emoji: "🏗️", label: "Будівництво" },
  { id: "fitness",    emoji: "💪", label: "Фітнес" },
];

const features = [
  "Унікальний дизайн під ваш бренд",
  "Спеціальна пропозиція для власника пляшки",
  "Форма захоплення контактів",
  "Кнопка дзвінка / запису / замовлення",
  "Аналітика переходів та конверсій",
];

export const LandingExamplesSection = () => {
  const [activeCategory, setActiveCategory] = useState("restaurant");

  return (
    <section className="landing-examples">
      <div className="landing-examples__container">

        <div className="landing-examples__header">
          <h2 className="landing-examples__title">Приклади лендінгів</h2>
          <p className="landing-examples__subtitle">
            Оберіть тип бізнесу, щоб побачити як виглядатиме ваш міні-лендінг
          </p>
        </div>

        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tabs__btn ${
                activeCategory === cat.id ? "category-tabs__btn--active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="landing-examples__demo">

          {/* Телефон-мокап */}
          <div className="phone-mockup">
            <div className="phone-mockup__frame">
              <div className="phone-mockup__notch" />
              <div className="phone-mockup__screen">
                <div className="phone-mockup__scroll">

                  {activeCategory === "restaurant" && <ERestourant/>}

                  {/* TODO: контент для beauty / auto / construction / fitness */}

                </div>
              </div>
            </div>
            <div className="phone-mockup__shadow" />
          </div>

          {/* Список фіч праворуч */}
          <div className="landing-examples__info">
            <div className="landing-examples__info-header">
              <span className="landing-examples__info-emoji">🍽️</span>
              <h3 className="landing-examples__info-title">Ресторан</h3>
            </div>
            <p className="landing-examples__info-text">
              Ваш персональний лендінг містить усе необхідне: опис бізнесу,
              спеціальна пропозиція для власника пляшки, контакти та кнопку дії.
              Всі лендінги адаптовані під мобільний телефон та завантажуються
              миттєво.
            </p>
            <ul className="feature-list">
              {features.map((f) => (
                <li className="feature-list__item" key={f}>
                  <div className="feature-list__dot-wrap">
                    <div className="feature-list__dot" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <a href="/Contact">
              <button className="btn btn--dark btn--md">
                Замовити лендінг для мого бізнесу
                <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};