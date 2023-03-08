import './Navigation.css'

function Navigation({ isMenuOpen, handleMenuOpen }) {
  return (
    <div className={`navigation ${isMenuOpen ? 'navigation_opened' : ''}`}>
      <div className='navigation__background'></div>
      <div className='navigation__overlay'>
        <button
          className='navigation__button'
          onClick={handleMenuOpen}
        ></button>
        <div className='navigation__links'>
          <a href='/' className='navigation__link'>
            Главная
          </a>
          <a href='/movies' className='navigation__films'>
            Фильмы
          </a>
          <a href='/saved-movies' className='navigation__link'>
            Сохранённые фильмы
          </a>
          <a href='/profile' className='navigation__account'>
            Аккаунт
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navigation
