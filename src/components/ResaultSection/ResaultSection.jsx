import './resaultSection.css';

const results = [
  { emoji: "🤝", title: "Живий контакт",  sub: "з реальною аудиторією" },
  { emoji: "🎯", title: "Зацікавлені",    sub: "клієнти, а не покази" },
  { emoji: "📋", title: "Ліди і апруви",  sub: "конкретні заявки" },
  { emoji: "📈", title: "Продажі",        sub: "реклама, що продає" },
];

export const ResultsSection = () => {
  return (
    <section className="results">
      <div className="results__container">
        <div className="results__header">
          <span className="label label--brand">Результат</span>
          <h2 className="results__title">Що отримує клієнт</h2>
        </div>
        <div className="results__grid">
          {results.map((r) => (
            <div className="result-card" key={r.title}>
              <div className="result-card__emoji">{r.emoji}</div>
              <h3 className="result-card__title">{r.title}</h3>
              <p className="result-card__sub">{r.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};