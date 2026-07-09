import './qrLandingCta.css'; 

export const QrLandingsCta = () => {
  return (
    <section className="qr-cta">
      <div className="qr-cta__container">
        <div className="qr-cta__content">

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
            className="qr-cta__icon"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>

          <h2 className="qr-cta__title">Chcesz uruchomić swoją stronę docelową?</h2>

          <p className="qr-cta__subtitle">
            Opracujemy spersonalizowaną mini-stronę landingową i uruchomimy kampanię z
            butelkami z logo marki w ciągu 5–7 dni roboczych.
          </p>

          <a href="/Contact">
            <button className="btn btn--cream btn--lg">
              Rozpocząć kampanię
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};