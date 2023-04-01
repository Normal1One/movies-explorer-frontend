import styles from './AboutProject.module.css'

export default function AboutProject() {
  return (
    <section className={styles.aboutProject}>
      <p className={styles.aboutProject__title} id='about-project'>
        О проекте
      </p>
      <div className={styles.aboutProject__line}></div>
      <div className={styles.aboutProject__texts}>
        <div className={styles.aboutProject__text}>
          <p className={styles.aboutProject__heading}>
            Дипломный проект включал 5 этапов
          </p>
          <p className={styles.aboutProject__paragraph}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className={styles.aboutProject__text}>
          <p className={styles.aboutProject__heading}>
            На выполнение диплома ушло 5 недель
          </p>
          <p className={styles.aboutProject__paragraph}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className={styles.aboutProject__progress}>
        <p className={styles['aboutProject__progress-back-end']}>1 неделя</p>
        <p className={styles['aboutProject__progress-front-end']}>4 недели</p>
      </div>
      <div className={styles.aboutProject__steps}>
        <p className={styles['aboutProject__steps-back-end']}>Back-end</p>
        <p className={styles['aboutProject__steps-front-end']}>Front-end</p>
      </div>
    </section>
  )
}
