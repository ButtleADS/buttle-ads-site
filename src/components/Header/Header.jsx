import "./header.css";
import logo from "./../../images/Logo_ButtleADS.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = () => {
    if(window.scrollY === 0) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  }
  return (
    <header
      className={
        scrolled
          ? "header header__bg-trasparent"
          : "header header__bg-white"
      }
    >
      <div className="header__container">
        <div className="header__inner">
          {/* Логотип */}
          <a href="/Home" className="header__logo">
            <img src={logo} alt="ButtleADS" className="header__logo-img" />
            <span className="header__logo-text">ButtleADS</span>
          </a>

          {/* Навігація — десктоп */}
          <nav className="header__nav">
            <Link to="/"> </Link>
            <Link to="/"> </Link>
            <Link to="/"> </Link>
            <Link to="/"> </Link>
            <Link to="/"> </Link>
            <a
              href="/Home"
              className="header__nav-link header__nav-link--active"
            >
              Головна
            </a>
            <a href="/Advertisers" className="header__nav-link">
              Для рекламодавців
            </a>
            <a href="/QRLandings" className="header__nav-link">
              QR Лендінги
            </a>
            <a href="/Contact" className="header__nav-link">
              Контакти
            </a>

            <a href="/Contact" className="header__cta">
              <button className="header__cta-btn">Зв'язатися</button>
            </a>
          </nav>
          
          {/* Бургер — мобільний */}
          <button className="header__burger">
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
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
