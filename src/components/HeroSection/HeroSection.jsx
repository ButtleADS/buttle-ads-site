import "./heroSection.css";
import { Link } from "react-router-dom";
export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          Światowy trend w Warszawie. Twoja marka – jedyna na butelce.
        </h1>
        <p className="hero__subtitle">
          Na całym świecie tylko trzy firmy oferują ten format. Teraz jest on
          dostępny w Polsce. Żadnych billboardów przypominających cmentarze z
          dziesiątkami marek. Tylko Twój produkt, prezent dla klienta i 100%
          uwagi bez konkurencji.
        </p>
        <div className="hero__actions">
          <Link to="/Advertisers">
            <button className="btn btn--cream btn--lg">
              Zarezerwuj swoją kampanię
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
          <Link to="/Contact">
            <button className="btn btn--ghost-light btn--lg">
              Skontaktuj się z nami
            </button>
          </Link>
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
