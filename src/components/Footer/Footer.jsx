import './footer.css';
import logo from './../../images/Logo_ButtleADS.svg';

const navLinks = [
  { href: "/Home",        label: "Головна" },
  { href: "/Advertisers", label: "Для рекламодавців" },
  { href: "/Designer",    label: "Дизайнер" },
  { href: "/QRLandings",  label: "QR Лендінги" },
  { href: "/Contact",     label: "Контакти" },
];

const contacts = [
  "hello@buttleads.com",
  "+38 (050) 123-45-67",
  "Київ, Україна",
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
              Інноваційна рекламна платформа, яка поєднує користь для людей з ефективністю для брендів.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Навігація</h4>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="footer__link" href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Контакти</h4>
            <ul className="footer__list footer__list--muted">
              {contacts.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 ButtleADS. Всі права захищені.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Політика конфіденційності</a>
            <a href="#" className="footer__legal-link">Умови використання</a>
          </div>
        </div>
      </div>
    </footer>
  );
};