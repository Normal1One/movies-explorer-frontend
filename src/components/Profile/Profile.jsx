import classNames from 'classnames'
import { useCallback, useContext, useEffect, useState } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { ERROR_MESSAGE, PROFILE_CHANGE_MESSAGE } from '../../utils/constants'
import styles from './Profile.module.css'

export default function Profile({
  onChangeUser,
  onLogout,
  isSuccessfully,
  isUserChanged,
}) {
  const currentUser = useContext(CurrentUserContext)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

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

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsDisabled(true)
    await onChangeUser({
      name: values.name,
      email: values.email,
    })
    setIsValid(false)
    setIsDisabled(false)
  }

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    })
  }, [currentUser.email, currentUser.name])

  return (
    <main>
      <section className='profile'>
        <p className={styles.profile__title}>Привет, {currentUser.name}!</p>
        <form
          className={styles.profile__form}
          noValidate
          onSubmit={handleSubmit}
        >
          <fieldset disabled={isDisabled} className={styles.profile__fieldset}>
            <label className={styles.profile__label} htmlFor='name'>
              Имя
              <input
                id='name'
                type='text'
                name='name'
                className={styles.profile__input}
                required
                onChange={handleChange}
                pattern='^[\u0400-\u04FFA-Za-z\s-]+$'
                minLength='2'
                maxLength='30'
                value={values.name || ''}
              />
            </label>
            <div className={styles.profile__divider}></div>
            <label className={styles.profile__label} htmlFor='email'>
              E-mail
              <input
                id='email'
                type='email'
                name='email'
                className={styles.profile__input}
                required
                onChange={handleChange}
                value={values.email || ''}
              />
            </label>
            <p
              className={classNames(styles.profile__message, {
                [styles.profile__message_error]: !isSuccessfully,
                [styles.profile__message_success]: isUserChanged,
              })}
            >
              {!isSuccessfully ? ERROR_MESSAGE : PROFILE_CHANGE_MESSAGE}
            </p>
            <input
              type='submit'
              value='Редактировать'
              className={styles.profile__submit}
              disabled={!isValid}
            />
          </fieldset>
        </form>
        <button className={styles.profile__logout} onClick={onLogout}>
          Выйти из аккаунта
        </button>
      </section>
    </main>
  )
}
