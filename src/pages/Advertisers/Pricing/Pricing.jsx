import { Link } from "react-router-dom";
import "./pricing.css";

const plans = [
  {
    name: "Starter",
    desc: "Idealny do testów",
    number: "1000",
    unit: "butelek",
    features: [
      "Brandowana etykieta",
      "1 lokalizacja do wyboru",
      "Podstawowy raport",
      "Wsparcie opiekuna",
    ],
    featured: false,
  },
  {
    name: "Business",
    desc: "Najpopularniejszy wybór",
    number: "1500",
    unit: "butelek",
    features: [
      "Pełny design butelki",
      "Do 5 lokalizacji",
      "Szczegółowa analityka",
      "Integracja kodu QR",
      "Raporty foto/wideo",
      "Priorytetowe wsparcie",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Maksymalny zasięg",
    number: "2600",
    unit: "butelek",
    features: [
      "Ekskluzywny design",
      "Nieograniczona liczba lokalizacji",
      "Dashboard w czasie rzeczywistym",
      "Integracja z CRM",
      "Osobisty opiekun",
      "Wydarzenia specjalne",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2>Pakiety współpracy</h2>
          <p>Wybierz optymalny wariant dla swojej firmy</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`price-card${plan.featured ? " featured" : ""}`}
            >
              {plan.featured && <div className="badge-featured">Polecane</div>}
              <div className="price-content">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-value">
                  <span className="number">{plan.number}</span>
                  <span className="unit">{plan.unit}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <Link
                to="/Contact"
                className={
                  plan.featured ? "btn-price-fill" : "btn-price-outline"
                }
              >
                Zamów konsultację
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
