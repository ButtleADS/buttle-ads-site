import './contactHero.css';

export const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        <div className="contact-hero__content">
          <span className="label label--brand">Контакти</span>
          <h1 className="contact-hero__title">Давайте поговоримо</h1>
          <p className="contact-hero__subtitle">
            Готові обговорити ваш проект? Заповніть форму або зв'яжіться з нами
            напряму — ми відповімо протягом 24 годин.
          </p>
        </div>
      </div>
    </section>
  );
};