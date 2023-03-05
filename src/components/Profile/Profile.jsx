import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <p className="profile__title">Привет, Виталий!</p>
      <form className="profile__form">
        <label className="profile__label" htmlFor="name">Имя
          <input id="name" type="text" value="Виталий" className="profile__input" required/>
        </label>
        <div className="profile__divider"></div>
        <label className="profile__label" htmlFor="email">E-mail
          <input id="email" type="email" value="pochta@yandex.ru" className="profile__input" required/>
        </label>
        <input type="submit" value="Редактировать" className="profile__submit" />
      </form>
      <a href="/signin" className="profile__logout">Выйти из аккаунта</a>
    </div>
  );
}

export default Profile;
