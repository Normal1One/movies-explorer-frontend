import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { ERROR_MESSAGE } from '../../utils/constants'
import './Register.css'

function Register({ onRegister, isSuccessfully }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target
      setValues({ ...values, [name]: value })
      setErrors({ ...errors, [name]: evt.target.validationMessage })
      setIsValid(evt.target.closest('form').checkValidity())
    },
    [errors, values]
  )

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    })
  }

  return (
    <main className='content'>
      <section className='register'>
        <div className='register__logo'></div>
        <p className='register__title'>Добро пожаловать!</p>
        <form className='register__form' noValidate onSubmit={handleSubmit}>
          <label htmlFor='name' className='register__label'>
            Имя
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='register__input'
            required
            onChange={handleChange}
            pattern='^[\u0400-\u04FFA-Za-z\s-]+$'
            minLength='2'
            maxLength='30'
            value={values.name || ''}
          />
          <label htmlFor='name' className='register__form-error'>
            {errors.name}
          </label>
          <label htmlFor='email' className='register__label'>
            E-mail
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='register__input'
            required
            onChange={handleChange}
            value={values.email || ''}
          />
          <label htmlFor='email' className='register__form-error'>
            {errors.email}
          </label>
          <label htmlFor='password' className='register__label'>
            Пароль
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='register__input'
            required
            onChange={handleChange}
            value={values.password || ''}
          />
          <label htmlFor='password' className='register__form-error'>
            {errors.password}
          </label>
          <p
            className={classNames('register__error-message', {
              'register__error-message_active': !isSuccessfully,
            })}
          >
            {ERROR_MESSAGE}
          </p>
          <input
            type='submit'
            value='Зарегистрироваться'
            className='register__submit'
            disabled={!isValid}
          />
        </form>
        <p className='register__text'>
          Уже зарегистрированы?
          <Link to='/signin' className='register__link'>
            {' '}
            Войти
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Register
