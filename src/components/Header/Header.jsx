import "./header.css";
import logo from "./../../images/Logo_ButtleADS.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = () => {
    if (window.scrollY === 0) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };
  return (
    <header
      className={
        scrolled ? "header header__bg-trasparent" : "header header__bg-white"
      }
    >
      <div className="header__container">
        <div className="header__inner">
          {/* Логотип */}
          <a href="/Home" className="header__logo">
            <img src={logo} alt="ButtleADS" className="header__logo-img" />
            <span className="header__logo-text">ButtleADS</span>
          </a>
          {/* header__nav-link--active */}
          {/* Навігація — десктоп */}
          <nav className="header__nav">
            <NavLink to="/Home" className="header__nav-link">
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  Головна
                </span>
              )}
            </NavLink>
            <NavLink to="/Advertisers" className="header__nav-link">
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  Для рекламодавців
                </span>
              )}
            </NavLink>
            <NavLink to="/QRLandings" className="header__nav-link">
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  QR Лендінги
                </span>
              )}
            </NavLink>
            <NavLink to="/Contact" className="header__nav-link">
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  Контакти
                </span>
              )}
            </NavLink>
            <NavLink to="/Contact">
              <button className="header__cta-btn">Зв'язатися</button>
            </NavLink>
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
