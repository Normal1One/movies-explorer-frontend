import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { ERROR_MESSAGE } from '../../utils/constants'
import './Login.css'

function Login({ onLogin, isSuccessfully }) {
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
    onLogin({
      email: values.email,
      password: values.password,
    })
  }

  return (
    <main className='content'>
      <section className='login'>
        <div className='login__logo'></div>
        <p className='login__title'>Рады видеть!</p>
        <form className='login__form' noValidate onSubmit={handleSubmit}>
          <label htmlFor='email' className='login__label'>
            E-mail
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='login__input'
            required
            onChange={handleChange}
            value={values.email || ''}
          />
          <label htmlFor='email' className='login__form-error'>
            {errors.email}
          </label>
          <label htmlFor='password' className='login__label'>
            Пароль
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='login__input'
            required
            onChange={handleChange}
            value={values.password || ''}
          />
          <label htmlFor='password' className='login__form-error'>
            {errors.password}
          </label>
          <p
            className={classNames('login__error-message', {
              'login__error-message_active': !isSuccessfully,
            })}
          >
            {ERROR_MESSAGE}
          </p>
          <input
            type='submit'
            value='Войти'
            className='login__submit'
            disabled={!isValid}
          />
        </form>
        <p className='login__text'>
          Ещё не зарегистрированы?
          <Link to='/signup' className='login__link'>
            {' '}
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Login
