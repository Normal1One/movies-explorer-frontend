import { HashLink } from 'react-router-hash-link'
import styles from './NavTab.module.css'

export default function NavTab() {
  return (
    <section className={styles.navTab}>
      <HashLink smooth to='#about-project' className={styles.navTab__link}>
        О проекте
      </HashLink>
      <HashLink smooth to='#techs' className={styles.navTab__link}>
        Технологии
      </HashLink>
      <HashLink smooth to='#about-me' className={styles.navTab__link}>
        Студент
      </HashLink>
    </section>
  )
}
