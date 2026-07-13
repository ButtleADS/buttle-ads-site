import "./finalCtaSection.css";
import { Link } from "react-router-dom";

export const FinalCtaSection = () => {
  return (
    <section className="final-cta">
      <div className="final-cta__bg-overlay" />

      <div className="final-cta__container">
        <div className="final-cta__content">
          <div className="final-cta__badge">
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
              className="final-cta__badge-icon"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <span className="final-cta__badge-text">Zacznij już dziś</span>
          </div>

          <h2 className="final-cta__title">
            Gotowi, by zdominować <br />
            <span className="final-cta__title-accent">ulice miasta?</span>
          </h2>

          <p className="final-cta__subtitle">
            Zarezerwujcie ekskluzywny nakład startowy Buttle ADS i zamieńcie
            zwykłą wodę w najskuteczniejszy nośnik reklamowy dla Waszej
            firmy.{" "}
          </p>

          <div className="final-cta__actions">
            {/* <a href="/Designer">
              <button className="btn btn--dark btn--lg">
                Створити дизайн
                <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </a> */}
            <Link to="/Сontact" className="my-button-style">
              <button className="btn btn--ghost-dark btn--lg">
                Skontaktuj się z nami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
