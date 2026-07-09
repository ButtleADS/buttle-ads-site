import './contactHero.css';

export const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        <div className="contact-hero__content">
          <span className="label label--brand">Kontakty</span>
          <h1 className="contact-hero__title">Porozmawiajmy</h1>
          <p className="contact-hero__subtitle">
            Chcesz omówić swój projekt? Wypełnij formularz lub skontaktuj się z nami
            bezpośrednio — odpowiemy w ciągu 24 godzin.
          </p>
        </div>
      </div>
    </section>
  );
};