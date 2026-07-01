import "./header.css";
import logo from "./../../images/Logo_ButtleADS.svg";

import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/Home";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // // Закриваємо меню при переході на іншу сторінку
  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, [location.pathname]);

  const headerClass = [
    "header",
    isHomePage && !isScrolled ? "header--transparent" : "header--white",
    isMenuOpen ? "header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="header__container">
        <div className="header__inner">
          {/* Логотип */}
          <Link to="/Home" className="header__logo">
            <img src={logo} alt="ButtleADS" className="header__logo-img" />
            <span className="header__logo-text-common">ButtleADS</span>
          </Link>

          {/* Навігація — десктоп */}
          <nav className="header__nav">
            <NavLink to="/Home" className="header__nav-link">
              {({ isActive }) => (
                <span className={isActive ? "header__nav-link--active" : ""}>
                  Головна
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
              {isHomePage ? (
                <button
                  className={
                    isScrolled
                      ? "header__cta-btn btn--md"
                      : "btn btn--ghost-light btn--md"
                  }
                >
                  Зв'язатися
                </button>
              ) : (
                <button
                  className={
                    isScrolled
                      ? "header__cta-btn btn--md"
                      : "header__cta-btn btn--md"
                  }
                >
                  {" "}
                  Зв'язатися
                </button>
              )}
            </NavLink>
          </nav>

          {/* Бургер — мобільний */}
          <button
            className="header__burger"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Відкрити меню"
          >
            {isMenuOpen ? (
              // Іконка X
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Іконка бургер
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
            )}
          </button>
        </div>

        {/* Мобільне меню */}
        {isMenuOpen && (
          <nav className="header__mobile-nav">
            <NavLink
              to="/Home"
              className="header__mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Головна
            </NavLink>
            <NavLink
              to="/QRLandings"
              className="header__mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              QR Лендінги
            </NavLink>
            <NavLink
              to="/Contact"
              className="header__mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакти
            </NavLink>
            <NavLink to="/Contact" onClick={() => setIsMenuOpen(false)}>
              {isHomePage ? (
                <button
                  className={
                    isScrolled
                      ? "header__cta-btn btn--md"
                      : "btn btn--ghost-light btn--md"
                  }
                >
                  Зв'язатися
                </button>
              ) : (
                <button
                  className={
                    isScrolled
                      ? "header__cta-btn btn--md"
                      : "header__cta-btn btn--md"
                  }
                >
                  {" "}
                  Зв'язатися
                </button>
              )}
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};
