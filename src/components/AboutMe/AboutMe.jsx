import './AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutMe">
      <p className="aboutMe__title" id="about-me">Студент</p>
      <div className="aboutMe__line"></div>
      <div className="aboutMe__card">
        <div className="aboutMe__image"></div>
        <div className="aboutMe__description">
          <p className="aboutMe__heading">Виталий</p>
          <p className="aboutMe__subheading">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/Normal1One" className="aboutMe__link">Github</a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
