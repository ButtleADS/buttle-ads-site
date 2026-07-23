import './statsBanner.css';

const stats = [
  { value: "50K+", label: "Butelek miesięcznie" },
  { value: "15+", label: "Miejsca w mieście" },
  { value: "300K+", label: "Kontakty z marką" },
  { value: "98%", label: "Zadowoleni partnerzy", microLabel: "*wskaźnik docelowy na wzór rynków światowych" },
];

export const StatsBanner = () => {
  return (
    <section className="stats-banner">
      <div className="stats-banner__blob stats-banner__blob--top" />
      <div className="stats-banner__blob stats-banner__blob--bottom" />

      <div className="stats-banner__container">
        <div className="stats-banner__grid">
          {stats.map((s) => (
            <div className="stats-banner__item" key={s.label}>
              <div className="stats-banner__value">{s.value}</div>
              <div className="stats-banner__label">{s.label}</div>
              {/* {s.microLabel && <div className="stats-banner__label">{s.microLabel}</div> } */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
