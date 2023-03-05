import './AboutProject.css';

function AboutProject() {
  return (
    <div className="aboutProject">
      <p className="aboutProject__title" id="about-project">О проекте</p>
      <div className="aboutProject__line"></div>
      <div className="aboutProject__texts">
        <div className="aboutProject__text">
          <p className="aboutProject__heading">Дипломный проект включал 5 этапов</p>
          <p className="aboutProject__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__text">
          <p className="aboutProject__heading">На выполнение диплома ушло 5 недель</p>
          <p className="aboutProject__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__progress">
        <p className="aboutProject__progress__back-end">1 неделя</p>
        <p className="aboutProject__progress__front-end">4 недели</p>
      </div>
      <div className="aboutProject__steps">
        <p className="aboutProject__steps__back-end">Back-end</p>
        <p className="aboutProject__steps__front-end">Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
