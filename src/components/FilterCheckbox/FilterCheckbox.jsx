import './FilterCheckbox.css'

function FilterCheckbox({ checkHandler, isChecked }) {
  return (
    <div className='filterCheckbox'>
      <input
        type='checkbox'
        className='filterCheckbox__checkbox'
        onChange={checkHandler}
        checked={isChecked}
      />
      <p className='filterCheckbox__text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
