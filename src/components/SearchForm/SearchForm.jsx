import styles from './SearchForm.module.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchForm({ searchMoviesHandler }) {
  const [formValue, setFormValue] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const location = useLocation()

  const handleInputChange = (evt) => {
    setFormValue(evt.target.value)
  }

  const handleCheckboxChange = (evt) => {
    setIsChecked(evt.target.checked)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    searchMoviesHandler(formValue, isChecked)
  }

  useEffect(() => {
    setFormValue(
      location.pathname === '/movies'
        ? sessionStorage.getItem('searchValue')
        : ''
    )
    setIsChecked(
      location.pathname === '/movies'
        ? JSON.parse(sessionStorage.getItem('checkedStatus')) || false
        : false
    )
  }, [location.pathname])

  return (
    <div className={styles.searchForm}>
      <form
        className={styles.searchForm__form}
        id={styles.searchForm__form}
        onSubmit={handleSubmit}
      >
        <div className={styles.searchForm__icon}></div>
        <input
          className={styles.searchForm__input}
          type='text'
          placeholder='Фильм'
          required
          name='search'
          value={formValue || ''}
          onChange={handleInputChange}
        />
        <button
          className={styles.searchForm__submit}
          type='submit'
          form={styles.searchForm__form}
        ></button>
        <div className={styles.searchForm__line}></div>
        <FilterCheckbox
          checkHandler={handleCheckboxChange}
          isChecked={isChecked}
        />
      </form>
      <div className={styles['searchForm__line-bottom']}></div>
    </div>
  )
}
