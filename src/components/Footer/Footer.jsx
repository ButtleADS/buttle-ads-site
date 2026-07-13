import './footer.css';
import logo from './../../images/Logo_ButtleADS.svg';
import { Link } from 'react-router-dom';

const navLinks = [
  { href: "/Home",        label: "Główna" },
  { href: "/Advertisers", label: "Dla reklamodawców" },
  // { href: "/Designer",    label: "Дизайнер" },
  { href: "/QRLandings",  label: "QR Landingi" },
  { href: "/Contact",     label: "Kontakt" },
];

const contacts = [
  "hello@buttleads.com",
  "+48 513 616 311",
  "Warszawa, Polska",
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">

          <div className="footer__about">
            <div className="footer__brand">
              <img
                src={logo}
                alt="ButtleADS"
                className="footer__logo"
              />
              <span className="footer__brand-name">ButtleADS</span>
            </div>
            <p className="footer__about-text">
              Pierwsza platforma marketingu fizycznego, która przekształca zasięg w rzeczywiste leady i sprzedaż
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Nawigacja</h4>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className='footer__link'>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Kontakt</h4>
            <ul className="footer__list footer__list--muted">
              {contacts.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 ButtleADS. Wszelkie prawa zastrzeżone.</p>
          <div className="footer__legal">
            <span className="footer__legal-link">Polityka prywatności</span>
            <span href="#" className="footer__legal-link">Warunki użytkowania</span> 
            {/* потім зробити готові посилання */}
          </div>
        </div>
      </div>
    </footer>
  );
};