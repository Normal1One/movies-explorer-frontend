import styles from './Promo.module.css'
import NavTab from '../NavTab/NavTab'

export default function Promo() {
  return (
    <section className={styles.promo}>
      <p className={styles.promo__title}>
        Учебный проект студента факультета Веб-разработки.
      </p>
      <NavTab />
    </section>
  )
}
