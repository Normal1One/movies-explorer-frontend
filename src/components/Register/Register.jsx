import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { ERROR_MESSAGE } from '../../utils/constants'
import styles from './Register.module.css'

export default function Register({ onRegister, isSuccessfully }) {
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
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    })
  }

  return (
    <main>
      <section className={styles.register}>
        <Link to='/' className={styles.register__logo}></Link>
        <p className={styles.register__title}>Добро пожаловать!</p>
        <form noValidate onSubmit={handleSubmit}>
          <fieldset disabled={isDisabled} className={styles.register__fieldset}>
            <label htmlFor='name' className={styles.register__label}>
              Имя
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className={styles.register__input}
              required
              onChange={handleChange}
              pattern='^[\u0400-\u04FFA-Za-z\s-]+$'
              minLength='2'
              maxLength='30'
              value={values.name || ''}
            />
            <label htmlFor='name' className={styles['register__form-error']}>
              {errors.name}
            </label>
            <label htmlFor='email' className={styles.register__label}>
              E-mail
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={styles.register__input}
              required
              pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
              onChange={handleChange}
              value={values.email || ''}
            />
            <label htmlFor='email' className={styles['register__form-error']}>
              {errors.email}
            </label>
            <label htmlFor='password' className={styles.register__label}>
              Пароль
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className={styles.register__input}
              required
              onChange={handleChange}
              value={values.password || ''}
            />
            <label
              htmlFor='password'
              className={styles['register__form-error']}
            >
              {errors.password}
            </label>
            <p
              className={classNames(styles['register__error-message'], {
                [styles['register__error-message_active']]: !isSuccessfully,
              })}
            >
              {ERROR_MESSAGE}
            </p>
            <input
              type='submit'
              value='Зарегистрироваться'
              className={styles.register__submit}
              disabled={!isValid}
            />
          </fieldset>
        </form>
        <p className={styles.register__text}>
          Уже зарегистрированы?
          <Link to='/signin' className={styles.register__link}>
            {' '}
            Войти
          </Link>
        </p>
      </section>
    </main>
  )
}
