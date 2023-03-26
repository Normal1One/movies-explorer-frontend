import { Link } from 'react-router-dom'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <p className={styles.aboutMe__title} id='about-me'>
        Студент
      </p>
      <div className={styles.aboutMe__line}></div>
      <div className={styles.aboutMe__card}>
        <div className={styles.aboutMe__image}></div>
        <div>
          <p className={styles.aboutMe__heading}>Виталий</p>
          <p className={styles.aboutMe__subheading}>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className={styles.aboutMe__text}>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            target='_blank'
            to='https://github.com/Normal1One'
            className={styles.aboutMe__link}
            rel='noreferrer'
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  )
}
