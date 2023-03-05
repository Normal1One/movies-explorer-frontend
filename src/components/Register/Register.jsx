import './Register.css';

function Register() {
  return (
    <div className="register">
      <div className="register__logo"></div>
      <p className="register__title">Добро пожаловать!</p>
      <form className="register__form">
        <label htmlFor="name" className="register__label">Имя</label>
        <input type="text" id="name" className="register__input" required/>
        <label htmlFor="name" className="register__form_error">Что-то пошло не так...</label>
        <label htmlFor="email" className="register__label">E-mail</label>
        <input type="email" id="email" className="register__input" required/>
        <label htmlFor="email" className="register__form_error register__form_error_visible">Что-то пошло не так...</label>
        <label htmlFor="password" className="register__label">Пароль</label>
        <input type="password" id="password" className="register__input register__input_error" required/>
        <label htmlFor="password" className="register__form_error">Что-то пошло не так...</label>
        <input type="submit" value="Зарегистрироваться" className="register__submit" />
      </form>
      <p className="register__text">Уже зарегистрированы?
        <a href="/signin" className="register__link"> Войти</a>
      </p>
    </div>
  );
}

export default Register;
