import "./headerHomePage.css";
import logo from "./../../images/Logo_ButtleADS.svg";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const HeaderHomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrolled = () => {
    if (window.scrollY === 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <header
      className={
        isScrolled ? "header header__bg-white" : "header header__bg-trasparent"
      }
    >
      <div className="header__container">
        <div className="header__inner">
          {/* Логотип */}
          <Link to="/Home" className="header__logo">
            <img src={logo} alt="ButtleADS" className="header__logo-img" />
            <span
              className={
                isScrolled
                  ? "header__logo-text-transparent"
                  : "header__logo-text"
              }
            >
              ButtleADS
            </span>
          </Link>
          {/* header__nav-link--active */}
          {/* Навігація — десктоп */}
          <nav className="header__nav">
            <NavLink
              to="/Home"
              className={
                isScrolled ? "header__nav-link" : "header__nav-link-transpared"
              }
            >
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  Головна
                </span>
              )}
            </NavLink>
            {/* <NavLink
              to="/Advertisers"
              className={
                isScrolled ? "header__nav-link" : "header__nav-link-transpared"
              }
            >
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  Для рекламодавців
                </span>
              )}
            </NavLink> */}
            <NavLink
              to="/QRLandings"
              className={
                isScrolled ? "header__nav-link" : "header__nav-link-transpared"
              }
            >
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  QR Лендінги
                </span>
              )}
            </NavLink>
            <NavLink
              to="/Contact"
              className={
                isScrolled ? "header__nav-link" : "header__nav-link-transpared"
              }
            >
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  Контакти
                </span>
              )}
            </NavLink>
            <NavLink to="/Contact">
              <button
                className={
                  isScrolled
                    ? "header__cta-btn btn--md"
                    : "btn btn--ghost-light btn--md"
                }
              >
                Зв'язатися
              </button>
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
