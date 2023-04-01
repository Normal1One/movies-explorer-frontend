import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header({ loggedIn, handleMenuOpen }) {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <div className={styles.header__logo}></div>
      </Link>
      {loggedIn && (
        <>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              `${styles.header__link} ${styles.header__link_films} ${
                isActive && styles.header__link_active
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              `${styles.header__link} ${isActive && styles.header__link_active}`
            }
          >
            Сохранённые фильмы
          </NavLink>
          <Link to='/profile' className={styles.header__account}>
            Аккаунт
          </Link>
          <button
            className={styles.header__hamburger}
            onClick={handleMenuOpen}
          />
        </>
      )}
      {!loggedIn && (
        <div className={styles.header__links}>
          <Link to='/signup' className={styles['header__register-button']}>
            Регистрация
          </Link>
          <Link to='/signin' className={styles['header__login-button']}>
            Войти
          </Link>
        </div>
      )}
    </header>
  )
}
