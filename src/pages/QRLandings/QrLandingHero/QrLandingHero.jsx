import './qrLandingHero.css';

export const QrLandingsHero = () => {
  return (
    <section className="qr-hero">
      <div className="qr-hero__container">
        <div className="qr-hero__content">

          <div className="qr-hero__badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="qr-hero__badge-icon">
              <rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" />
              <path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" />
              <path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" />
            </svg>
            QR → Персональний лендінг
          </div>

          <h1 className="qr-hero__title">
            Сканування — і клієнт{" "}
            <span className="qr-hero__title-accent">вже у вас</span>
          </h1>

          <p className="qr-hero__subtitle">
            Кожна пляшка містить унікальний QR-код, який веде на персональний міні-лендінг — розроблений спеціально під ваш бізнес. Оберіть нижче, щоб побачити приклад.
          </p>

        </div>
      </div>
    </section>
  );
};