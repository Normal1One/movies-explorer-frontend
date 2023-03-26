import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <section className='notFound'>
      <p className={styles.notFound__title}>404</p>
      <p className={styles.notFound__subtitle}>Страница не найдена</p>
      <button onClick={() => navigate(-1)} className={styles.notFound__link}>
        Назад
      </button>
    </section>
  )
}
