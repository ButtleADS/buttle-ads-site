import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./form.css";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    href: "mailto:hello@buttleads.com",
    icon: (
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "hello@buttleads.com",
  },
  {
    href: "tel:+48 513 616 311",
    icon: (
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "tel",
    value: "+48 513 616 311",
  },
];

const officeInfo = {
  icon: (
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  label: "office",
  value: "Warszawa, Polska",
};

const socials = [
  {
    href: "https://www.instagram.com/buttle.ads.pl?igsh=MWdma3ZnaDJqNWgzbQ==",
    icon: (
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  // {
  //   href: "#",
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  //     </svg>
  //   ),
  // },
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requestType: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // ref на reCAPTCHA-віджет, щоб можна було зчитати token і скинути віджет після сабміту
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Зчитуємо token з віджету. Якщо юзер не натиснув чекбокс — тут буде null
    const recaptchaToken = recaptchaRef.current.getValue();

    if (!recaptchaToken) {
      alert("Proszę potwierdzić, że nie jest Pan/Pani robotem");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          requestType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    } finally {
      // Скидаємо reCAPTCHA-віджет незалежно від результату —
      // token одноразовий, для наступної спроби треба новий
      recaptchaRef.current.reset();
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-section__container">
        <div className="contact-form-section__grid">
          {/* Ліва колонка — контакти */}
          <div className="contact-info">
            <div className="contact-info__block">
              <h3 className="contact-info__title">Nasze dane kontaktowe</h3>
              <div className="contact-info__list">
                {contactMethods.map((method) => (
                  <Link
                    to={method.href}
                    className="contact-info__item"
                    key={method.label}
                  >
                    <div className="contact-info__icon-wrap">{method.icon}</div>
                    <div>
                      <div className="contact-info__label">{method.label}</div>
                      <div className="contact-info__value">{method.value}</div>
                    </div>
                  </Link>
                ))}

                <div className="contact-info__item contact-info__item--static">
                  <div className="contact-info__icon-wrap">
                    {officeInfo.icon}
                  </div>
                  <div>
                    <div className="contact-info__label">
                      {officeInfo.label}
                    </div>
                    <div className="contact-info__value">
                      {officeInfo.value}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info__socials">
              <h4 className="contact-info__socials-title">Śledź nas</h4>
              <div className="social-links">
                {socials.map((s, i) => (
                  <Link to={s.href} className="social-links__item" key={i}>
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Права колонка — форма */}
          <div className="contact-form-section__form-col">
            <div className="contact-card">
              <h3 className="contact-card__title">Wyślij zapytanie</h3>

              <form className="contact-card__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-field__label" htmlFor="name">
                      Imię *
                    </label>
                    <input
                      className="form-field__input"
                      id="name"
                      placeholder="Twoje imię"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-field__label" htmlFor="email">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-field__input"
                      id="email"
                      placeholder="email@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-field__label" htmlFor="phone">
                      Telefon
                    </label>
                    <input
                      className="form-field__input"
                      id="phone"
                      placeholder="+48_123_456_789"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-field__label" htmlFor="company">
                      Firma
                    </label>
                    <input
                      className="form-field__input"
                      id="company"
                      placeholder="Nazwa firmy"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-field__label" htmlFor="requestType">
                    Rodzaj zapytania
                  </label>
                  <select
                    className="form-field__select"
                    id="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Wybierz typ
                    </option>
                    <option value="advertising">Reklama</option>
                    <option value="partnership">Partnerstwo</option>
                    <option value="media">Zapytanie mediów</option>
                    <option value="other">Inne</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-field__label" htmlFor="message">
                    Komunikat *
                  </label>
                  <textarea
                    className="form-field__textarea"
                    id="message"
                    placeholder="Opowiedzcie o swoim projekcie..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <ReCAPTCHA ref={recaptchaRef} sitekey="ТУТ_ТВІЙ_SITE_KEY" />
                </div>
                <button
                  type="submit"
                  className="btn btn--dark contact-card__submit"
                >
                  Wyślij
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
                    className="btn__icon"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
