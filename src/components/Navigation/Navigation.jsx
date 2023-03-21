import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation({ isMenuOpen, handleMenuClose }) {
  return (
    <div
      className={classNames('navigation', { navigation_opened: isMenuOpen })}
    >
      <div className='navigation__background'></div>
      <div className='navigation__overlay'>
        <button
          className='navigation__button'
          onClick={handleMenuClose}
        ></button>
        <div className='navigation__links'>
          <NavLink to='/' className='navigation__link'>
            Главная
          </NavLink>
          <NavLink to='/movies' className='navigation__link'>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' className='navigation__link'>
            Сохранённые фильмы
          </NavLink>
          <Link to='/profile' className='navigation__account'>
            Аккаунт
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
