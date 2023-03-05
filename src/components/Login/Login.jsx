import './Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login__logo"></div>
      <p className="login__title">Рады видеть!</p>
      <form className="login__form">
        <label htmlFor="email" className="login__label">E-mail</label>
        <input type="email" id="email" className="login__input" required/>
        <label htmlFor="email" className="login__form_error login__form_error_visible">Что-то пошло не так...</label>
        <label htmlFor="password" className="login__label">Пароль</label>
        <input type="password" id="password" className="login__input login__input_error" required/>
        <label htmlFor="password" className="login__form_error">Что-то пошло не так...</label>
        <input type="submit" value="Войти" className="login__submit" />
      </form>
      <p className="login__text">Ещё не зарегистрированы?
        <a href="/signup" className="login__link"> Регистрация</a>
      </p>
    </div>
  )
}

export default Login;
