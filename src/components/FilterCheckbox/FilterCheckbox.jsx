import styles from './FilterCheckbox.module.css'

export default function FilterCheckbox({ checkHandler, isChecked }) {
  return (
    <div className={styles.filterCheckbox}>
      <input
        type='checkbox'
        className={styles.filterCheckbox__checkbox}
        onChange={checkHandler}
        checked={isChecked}
      />
      <p className={styles.filterCheckbox__text}>Короткометражки</p>
    </div>
  )
}
