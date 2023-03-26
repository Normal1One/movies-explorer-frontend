import { Link } from 'react-router-dom'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <p className={styles.portfolio__title}>Портфолио</p>
      <ul className={styles.portfolio__projects}>
        <li className={styles.portfolio__link}>
          <Link
            target='_blank'
            to='https://github.com/Normal1One/mesto'
            className={styles.portfolio__project}
            rel='noreferrer'
          >
            <p className={styles.portfolio__heading}>Статичный сайт</p>
            <div className={styles['portfolio__link-image']}></div>
          </Link>
          <div className={styles['portfolio__projects-line']}></div>
        </li>
        <li className={styles.portfolio__link}>
          <Link
            target='_blank'
            to='https://github.com/Normal1One/russian-travel'
            className={styles.portfolio__project}
            rel='noreferrer'
          >
            <p className={styles.portfolio__heading}>Адаптивный сайт</p>
            <div className={styles['portfolio__link-image']}></div>
          </Link>
          <div className={styles['portfolio__projects-line']}></div>
        </li>
        <li className={styles.portfolio__link}>
          <Link
            target='_blank'
            to='https://github.com/Normal1One/react-mesto-api-full'
            className={styles.portfolio__project}
            rel='noreferrer'
          >
            <p className={styles.portfolio__heading}>
              Одностраничное приложение
            </p>
            <div className={styles['portfolio__link-image']}></div>
          </Link>
          <div className={styles['portfolio__projects-line']}></div>
        </li>
      </ul>
    </section>
  )
}
