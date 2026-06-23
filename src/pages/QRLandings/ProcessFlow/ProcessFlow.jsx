import { Fragment } from "react";
import './processFlow.css';


const flowSteps = [
  { num: "1", text: "Людина бере пляшку безкоштовно" },
  { num: "2", text: "Сканує QR-код на пляшці" },
  { num: "3", text: "Потрапляє на ваш лендінг" },
  { num: "4", text: "Залишає контакт або робить замовлення" },
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