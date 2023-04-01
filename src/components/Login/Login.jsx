import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { ERROR_MESSAGE } from '../../utils/constants'
import styles from './Login.module.css'

export default function Login({ onLogin, isSuccessfully }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target
      setValues({ ...values, [name]: value })
      setErrors({ ...errors, [name]: evt.target.validationMessage })
      setIsValid(evt.target.closest('form').checkValidity())
    },
    [errors, values]
  )

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsDisabled(true)
    await onLogin({
      email: values.email,
      password: values.password,
    })
    setIsDisabled(false)
  }

  return (
    <main>
      <section className={styles.login}>
        <Link to='/' className={styles.login__logo}></Link>
        <p className={styles.login__title}>Рады видеть!</p>
        <form noValidate onSubmit={handleSubmit}>
          <fieldset disabled={isDisabled} className={styles.login__fieldset}>
            <label htmlFor='email' className={styles.login__label}>
              E-mail
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={styles.login__input}
              required
              pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
              onChange={handleChange}
              value={values.email || ''}
            />
            <label htmlFor='email' className={styles['login__form-error']}>
              {errors.email}
            </label>
            <label htmlFor='password' className={styles.login__label}>
              Пароль
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className={styles.login__input}
              required
              onChange={handleChange}
              value={values.password || ''}
            />
            <label htmlFor='password' className={styles['login__form-error']}>
              {errors.password}
            </label>
            <p
              className={classNames(styles['login__error-message'], {
                [styles['login__error-message_active']]: !isSuccessfully,
              })}
            >
              {ERROR_MESSAGE}
            </p>
            <input
              type='submit'
              value='Войти'
              className={styles.login__submit}
              disabled={!isValid}
            />
          </fieldset>
        </form>
        <p className={styles.login__text}>
          Ещё не зарегистрированы?
          <Link to='/signup' className={styles.login__link}>
            {' '}
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  )
}
