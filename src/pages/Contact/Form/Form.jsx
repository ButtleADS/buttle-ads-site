import { useState } from "react";
import './form.css';

const contactMethods = [
  {
    href: "mailto:hello@buttleads.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "hello@buttleads.com",
  },
  {
    href: "tel:+380501234567",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Телефон",
    value: "+38 (050) 123-45-67",
  },
];

const officeInfo = {
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  label: "Офіс",
  value: "Київ, Україна",
};

const socials = [
  {
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // тут пізніше додасте відправку на бекенд
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-section__container">
        <div className="contact-form-section__grid">

          {/* Ліва колонка — контакти */}
          <div className="contact-info">
            <div className="contact-info__block">
              <h3 className="contact-info__title">Наші контакти</h3>
              <div className="contact-info__list">
                {contactMethods.map((method) => (
                  <a href={method.href} className="contact-info__item" key={method.label}>
                    <div className="contact-info__icon-wrap">{method.icon}</div>
                    <div>
                      <div className="contact-info__label">{method.label}</div>
                      <div className="contact-info__value">{method.value}</div>
                    </div>
                  </a>
                ))}

                <div className="contact-info__item contact-info__item--static">
                  <div className="contact-info__icon-wrap">{officeInfo.icon}</div>
                  <div>
                    <div className="contact-info__label">{officeInfo.label}</div>
                    <div className="contact-info__value">{officeInfo.value}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info__socials">
              <h4 className="contact-info__socials-title">Слідкуйте за нами</h4>
              <div className="social-links">
                {socials.map((s, i) => (
                  <a href={s.href} className="social-links__item" key={i}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Права колонка — форма */}
          <div className="contact-form-section__form-col">
            <div className="contact-card">
              <h3 className="contact-card__title">Надіслати запит</h3>

              <form className="contact-card__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-field__label" htmlFor="name">Ім'я *</label>
                    <input
                      className="form-field__input"
                      id="name"
                      placeholder="Ваше ім'я"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-field__label" htmlFor="email">Email *</label>
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
                    <label className="form-field__label" htmlFor="phone">Телефон</label>
                    <input
                      className="form-field__input"
                      id="phone"
                      placeholder="+38 (0__) ___-__-__"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-field__label" htmlFor="company">Компанія</label>
                    <input
                      className="form-field__input"
                      id="company"
                      placeholder="Назва компанії"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-field__label" htmlFor="requestType">Тип запиту</label>
                  <select
                    className="form-field__select"
                    id="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Оберіть тип</option>
                    <option value="advertising">Рекламне розміщення</option>
                    <option value="partnership">Партнерство</option>
                    <option value="media">Медіа запит</option>
                    <option value="other">Інше</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-field__label" htmlFor="message">Повідомлення *</label>
                  <textarea
                    className="form-field__textarea"
                    id="message"
                    placeholder="Розкажіть про ваш проект..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn--dark contact-card__submit">
                  Надіслати
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn__icon">
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