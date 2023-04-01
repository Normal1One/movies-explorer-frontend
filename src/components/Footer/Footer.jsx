import classNames from 'classnames'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__links}>
        <p
          className={classNames(
            styles.footer__link,
            styles['footer__link-practicum']
          )}
        >
          Яндекс.Практикум
        </p>
        <p className={styles.footer__link}>Github</p>
        <p className={styles.footer__date}>@ {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
