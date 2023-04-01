import styles from './Techs.module.css'

export default function Techs() {
  return (
    <section className={styles.techs}>
      <p className={styles.techs__title} id='techs'>
        Технологии
      </p>
      <div className={styles.techs__line}></div>
      <p className={styles.techs__heading}>7 технологий</p>
      <p className={styles.techs__text}>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className={styles.techs__cards}>
        <p className={styles.techs__card}>HTML</p>
        <p className={styles.techs__card}>CSS</p>
        <p className={styles.techs__card}>JS</p>
        <p className={styles.techs__card}>React</p>
        <p className={styles.techs__card}>Git</p>
        <p className={styles.techs__card}>Express.js</p>
        <p className={styles.techs__card}>mongoDB</p>
      </div>
    </section>
  )
}
