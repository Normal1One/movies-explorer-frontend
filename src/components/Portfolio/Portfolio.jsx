import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <div className="portfolio__project">
        <p className="portfolio__heading">Статичный сайт</p>
        <a href="https://github.com/Normal1One/mesto-react">
          <div className="portfolio__link"></div>
        </a>
      </div>
      <div className="portfilio__line"></div>
      <div className="portfolio__project">
        <p className="portfolio__heading">Адаптивный сайт</p>
        <a href="https://github.com/Normal1One/russian-travel">
          <div className="portfolio__link"></div>
        </a>
      </div>
      <div className="portfilio__line"></div>
      <div className="portfolio__project">
        <p className="portfolio__heading">Одностраничное приложение</p>
        <a href="https://github.com/Normal1One/react-mesto-api-full">
          <div className="portfolio__link"></div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
