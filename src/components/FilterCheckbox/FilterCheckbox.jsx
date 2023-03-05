import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <input type="checkbox" className="filterCheckbox__checkbox" />
      <p className="filterCheckbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
