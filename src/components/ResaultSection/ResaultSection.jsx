import "./resaultSection.css";

const results = [
  {
    emoji: "🤝",
    title: "Bezpośredni kontakt",
    sub: "Gwarantowana interakcja z marką w realnym świecie.",
  },
  {
    emoji: "🎯",
    title: "Czysty monopol",
    sub: "Tylko Twoja marka, zero konkurencji o uwagę klienta",
  },
  {
    emoji: "📋",
    title: "Precyzyjna analityka",
    sub: "Przejrzyste śledzenie każdego zgłoszenia za pomocą unikalnego kodu QR.",
  },
  {
    emoji: "📈",
    title: "Zwrot z inwestycji",
    sub: "Nowy, skuteczny kanał sprzedaży o wysokiej konwersji.",
  },
];

export const ResultsSection = () => {
  return (
    <section className="results">
      <div className="results__container">
        <div className="results__header">
          <span className="label label--brand">Rezultat</span>
          <h2 className="results__title">Co zyskuje Twoja firma</h2>
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
