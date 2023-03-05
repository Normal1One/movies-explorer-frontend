import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="searchForm">
      <form className="searchForm__form" id="searchForm__form">
        <div className="searchForm__icon"></div>
        <input className="searchForm__input" type="text" placeholder="Фильм"/>
        <button className="searchForm__submit" type="submit" form="searchForm__form"></button>
        <div className="searchForm__line"></div>
        <FilterCheckbox />
      </form>
      <div className="searchForm__line-bottom"></div>
    </div>
  );
}

export default SearchForm;
