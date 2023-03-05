import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line"></div>
      <div className="footer__links">
        <p className="footer__link footer__link-practicum">Яндекс.Практикум</p>
        <p className="footer__link">Github</p>
        <p className="footer__date">@ {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
