import './Banner.css';
import banner from './../../../images/showcaseSection/banner.png'
export const Banner = () => {
    return (
      <div className="showcase__banner">
        <div className="showcase__banner-bg">
          <img
            src={banner}
            alt="ButtleADS night"
            className="showcase__banner-img"
          />
        </div>
        <div className="showcase__banner-overlay" />
        <div className="showcase__banner-content">
          <div className="showcase__banner-inner">
            <span className="label label--cream">TWOJA MARKA W MIEŚCIE</span>
            <h2 className="showcase__banner-title">
              Zaprezentuj swoją <br />
              <span className="showcase__banner-title-accent">firmę</span><br />
              z pełną mocą
            </h2>
            <p className="showcase__banner-text">
              Przenieś swoje działania marketingowe z przesyconego świata cyfrowego do świata rzeczywistego. Przyciągnij pełną uwagę i buduj autentyczną lojalność odbiorców tam, gdzie zwykła reklama jest bezsilna.
            </p>
            <a href="/Advertisers">
              <button className="btn btn--cream btn--lg">
                Zostań partnerem
                <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
}