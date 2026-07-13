import { useState } from "react";
import "./landingExamplesSection.css";
import { ERestourant } from "./_examples/ERestaurant/ERestaurant";
import { EBeauty } from "./_examples/EBeauty/EBeauty";
import { EAuto } from "./_examples/EAuto/EAuto";
import { EConstruction } from "./_examples/EConstruction/EConstruction";
import { Link } from "react-router-dom";

const categories = [
  { id: "restaurant", emoji: "🍽️", label: "Restauracja" },
  { id: "beauty", emoji: "💅", label: "Salon urody" },
  { id: "auto", emoji: "🚗", label: "Salon samochodowy" },
  { id: "construction", emoji: "🏗️", label: "Budownictwo" },
  // { id: "fitness",   emoji: "💪", label: "Fitness" },
];

const features = [
  "Unikalny design dopasowany do Twojej marki",
  "Specjalna oferta dla posiadacza butelki",
  "Formularz zbierania kontaktów",
  "Przycisk połączenia / rezerwacji / zamówienia",
  "Analityka wejść i konwersji",
];

export const LandingExamplesSection = () => {
  const [activeCategory, setActiveCategory] = useState("restaurant");

  return (
    <section className="landing-examples">
      <div className="landing-examples__container">
        <div className="landing-examples__header">
          <h2 className="landing-examples__title">Przykłady landing page’ów</h2>
          <p className="landing-examples__subtitle">
            Wybierz rodzaj działalności, aby zobaczyć, jak będzie wyglądać Twoja
            mini-strona docelowa
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
                  {activeCategory === "restaurant" && <ERestourant />}

                  {activeCategory === "beauty" && <EBeauty />}

                  {activeCategory === "auto" && <EAuto />}

                  {activeCategory === "construction" && <EConstruction />}

                  {/* fitness */}
                </div>
              </div>
            </div>
            <div className="phone-mockup__shadow" />
          </div>

          {/* Список фіч праворуч */}
          <div className="landing-examples__info">
            <div className="landing-examples__info-header">
              {/* <span className="landing-examples__info-emoji"></span> */}
              <h3 className="landing-examples__info-title">Landing</h3>
            </div>
            <p className="landing-examples__info-text">
              Twoja osobista strona docelowa zawiera wszystko, co niezbędne:
              opis działalności, specjalną ofertę dla właściciela butelki, dane
              kontaktowe oraz przycisk działania. Wszystkie strony docelowe są
              dostosowane do urządzeń mobilnych i ładują się natychmiast.
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
            <Link to="/Contact">
              <button className="btn btn--dark btn--md">
                Zamów stronę docelową dla mojej firmy
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
