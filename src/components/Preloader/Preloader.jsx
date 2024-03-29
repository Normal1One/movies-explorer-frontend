import styles from './Preloader.module.css'

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container}>
        <span className={styles.preloader__round}></span>
      </div>
    </div>
  )
}
