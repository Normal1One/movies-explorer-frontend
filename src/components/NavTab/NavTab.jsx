import './NavTab.css';

function NavTab() {
  return (
    <div className="navTab">
      <a href="#about-project" className="navTab__link">О проекте</a>
      <a href="#techs" className="navTab__link">Технологии</a>
      <a href="#about-me" className="navTab__link">Студент</a>
    </div>
  );
}

export default NavTab;
