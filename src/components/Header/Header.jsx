import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header({ loggedIn, handleMenuOpen }) {
  if (loggedIn) {
    return (
      <header className='header'>
        <Link to='/'>
          <div className='header__logo'></div>
        </Link>
        <NavLink to='/movies' className='header__link header__link_films'>
          Фильмы
        </NavLink>
        <NavLink to='/saved-movies' className='header__link'>
          Сохранённые фильмы
        </NavLink>
        <Link to='/profile' className='header__account'>
          Аккаунт
        </Link>
        <button className='header__hamburger' onClick={handleMenuOpen} />
      </header>
    )
  }
  return (
    <header className='header'>
      <Link to='/'>
        <div className='header__logo'></div>
      </Link>
      <div className='header__links'>
        <Link to='/signup' className='header__register-button'>
          Регистрация
        </Link>
        <Link to='/signin' className='header__login-button'>
          Войти
        </Link>
      </div>
    </header>
  )
}

export default Header
