import { Fragment } from "react";
import './processFlow.css';


const flowSteps = [
  { num: "1", text: "Osoba otrzymuje butelkę za darmo" },
  { num: "2", text: "Skanuje kod QR na butelce" },
  { num: "3", text: "Trafia na waszą stronę docelową" },
  { num: "4", text: "Nawiązuje kontakt lub składa zamówienie" },
];

export const ProcessFlow = () => {
  return (
    <section className="process-flow">
      <div className="process-flow__container">
        <div className="process-flow__list">
          {flowSteps.map((step, index) => (
            <Fragment key={step.num}>
              <div className="process-flow__item">
                <div className="process-flow__num">{step.num}</div>
                <span className="process-flow__text">{step.text}</span>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="process-flow__arrow">→</div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};