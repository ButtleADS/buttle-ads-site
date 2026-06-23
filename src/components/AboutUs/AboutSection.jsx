import './aboutSection.css';

export const AboutSection = () => {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      title: "Безкоштовна вода",
      text: "Людина отримує цінність — воду. Позитивні емоції автоматично асоціюються з вашим брендом",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Точне таргетування",
      text: "Вибираємо локації, де живе ваша цільова аудиторія: бізнес-центри, парки, заходи, спортзали",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" />
          <path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" />
          <path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" />
        </svg>
      ),
      title: "QR → ліди і заявки",
      text: "На кожній пляшці QR-код, що веде на міні-лендинг. Користувач може купити або записатися",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      title: "Реклама, що продає",
      text: "Не просто охоплення — реальні клієнти. Фізичний канал залучення, як офлайн-фейсбук",
    },
  ];

  return (
    <section className="about">
      <div className="about__container">
        <div className="about__header">
          <span className="label label--brand">Хто ми</span>
          <h2 className="about__title">
            Фізична реклама,<br />яка приводить клієнтів
          </h2>
          <p className="about__subtitle">
            ButtleADS — платформа, що перетворює взаємодію на вулиці в ліди і продажі.
            Ми роздаємо брендовану воду з QR-кодом — і приводимо реальних покупців.
          </p>
        </div>

        <div className="about__grid">
          {cards.map((card) => (
            <div className="feature-card" key={card.title}>
              <div className="feature-card__icon-wrap">
                {card.icon}
              </div>
              <h3 className="feature-card__title">{card.title}</h3>
              <p className="feature-card__text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};