import classNames from 'classnames'
import { useCallback, useContext, useEffect, useState } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { ERROR_MESSAGE } from '../../utils/constants'
import './Profile.css'

function Profile({ onChangeUser, onLogout, isSuccessfully, isUserChanged }) {
  const currentUser = useContext(CurrentUserContext)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target
      setValues({ ...values, [name]: value })
      setErrors({ ...errors, [name]: evt.target.validationMessage })
      if (value !== currentUser[name]) {
        setIsValid(evt.target.closest('form').checkValidity())
      } else {
        setIsValid(false)
      }
    },
    [currentUser, errors, values]
  )

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onChangeUser({
      name: values.name,
      email: values.email,
    })
  }

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    })
  }, [currentUser.email, currentUser.name])

  return (
    <main className='content'>
      <section className='profile'>
        <p className='profile__title'>Привет, {currentUser.name}!</p>
        <form className='profile__form' noValidate onSubmit={handleSubmit}>
          <label className='profile__label' htmlFor='name'>
            Имя
            <input
              id='name'
              type='text'
              name='name'
              className='profile__input'
              required
              onChange={handleChange}
              pattern='^[\u0400-\u04FFA-Za-z\s-]+$'
              minLength='2'
              maxLength='30'
              value={values.name || ''}
            />
          </label>
          <div className='profile__divider'></div>
          <label className='profile__label' htmlFor='email'>
            E-mail
            <input
              id='email'
              type='email'
              name='email'
              className='profile__input'
              required
              onChange={handleChange}
              value={values.email || ''}
            />
          </label>
          <p
            className={classNames('profile__message', {
              profile__message_error: !isSuccessfully,
              profile__message_success: isUserChanged,
            })}
          >
            {!isSuccessfully
              ? ERROR_MESSAGE
              : 'Данные пользователя успешно обновлены!'}
          </p>
          <input
            type='submit'
            value='Редактировать'
            className='profile__submit'
            disabled={!isValid}
          />
        </form>
        <button className='profile__logout' onClick={onLogout}>
          Выйти из аккаунта
        </button>
      </section>
    </main>
  )
}

export default Profile
