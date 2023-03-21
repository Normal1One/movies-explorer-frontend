import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useEffect, useState } from 'react'

function SearchForm({ searchMoviesHandler }) {
  const [formValue, setFormValue] = useState('')
  const [isChecked, setIsChecked] = useState(false)

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
    setFormValue(sessionStorage.getItem('searchValue'))
    setIsChecked(JSON.parse(sessionStorage.getItem('checkedStatus')) || false)
  }, [])

  return (
    <div className='searchForm'>
      <form
        className='searchForm__form'
        id='searchForm__form'
        onSubmit={handleSubmit}
      >
        <div className='searchForm__icon'></div>
        <input
          className='searchForm__input'
          type='text'
          placeholder='Фильм'
          required
          name='search'
          value={formValue || ''}
          onChange={handleInputChange}
        />
        <button
          className='searchForm__submit'
          type='submit'
          form='searchForm__form'
        ></button>
        <div className='searchForm__line'></div>
        <FilterCheckbox
          checkHandler={handleCheckboxChange}
          isChecked={isChecked}
        />
      </form>
      <div className='searchForm__line-bottom'></div>
    </div>
  )
}

export default SearchForm
