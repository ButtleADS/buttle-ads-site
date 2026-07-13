import { Link } from "react-router-dom";
import "./questionsCta.css";

export default function QuestionsCta() {
  return (
    <section className="questions-cta">
      <div className="container">
        <div className="questions-cta-wrapper">
          <h2>Masz pytania?</h2>
          <p>
            Nasz zespół chętnie odpowie na wszystkie pytania i pomoże wybrać
            optymalne rozwiązanie dla Twojej firmy
          </p>
          <Link to="/Contact" className="btn-cta-main">
          Skontaktuj się z nami
          <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16663 10H15.8333"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 5L15.8333 10L10.8333 15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}