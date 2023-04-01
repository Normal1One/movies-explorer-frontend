import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation({ isMenuOpen, handleMenuClose }) {
  return (
    <div
      className={classNames(styles.navigation, {
        [styles.navigation_opened]: isMenuOpen,
      })}
    >
      <div className={styles.navigation__background}></div>
      <div className={styles.navigation__overlay}>
        <button
          className={styles.navigation__button}
          onClick={handleMenuClose}
        ></button>
        <div className={styles.navigation__links}>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `${styles.navigation__link} ${
                isActive && styles.navigation__link_active
              }`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              `${styles.navigation__link} ${
                isActive && styles.navigation__link_active
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              `${styles.navigation__link} ${
                isActive && styles.navigation__link_active
              }`
            }
          >
            Сохранённые фильмы
          </NavLink>
          <Link to='/profile' className={styles.navigation__account}>
            Аккаунт
          </Link>
        </div>
      </div>
    </div>
  )
}
