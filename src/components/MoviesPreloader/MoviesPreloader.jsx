import styles from './MoviesPreloader.module.css'

export default function MoviesPreloader({ handleClick }) {
  return (
    <div className={styles.moviesPreloader}>
      <button className={styles.moviesPreloader__button} onClick={handleClick}>
        Ещё
      </button>
    </div>
  )
}
