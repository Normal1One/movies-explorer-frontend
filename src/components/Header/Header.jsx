import './Header.css';

function Header({ loggedIn, handleMenuOpen }) {
  if (!loggedIn) {
    return (
      <header className="header">
        <a href="/" className="header__link">
          <div className="header__logo"></div>
        </a>
        <a href="/movies" className="header__link_films">Фильмы</a>
        <a href="/saved-movies" className="header__link_films-favorite">Сохранённые фильмы</a>
        <a href="/profile" className="header__account">Аккаунт</a>
        <button className="header__hamburger" onClick={handleMenuOpen}/>
      </header>
    );
  }
  return (
    <header className="header">
        <a href="/" className="header__link">
          <div className="header__logo"></div>
        </a>
      <div className="header__links">
        <a href="/signup" className="header__register-button">Регистрация</a>
        <a href="/signin" className="header__login-button">Войти</a>
      </div>
    </header>
  );
}

export default Header;
