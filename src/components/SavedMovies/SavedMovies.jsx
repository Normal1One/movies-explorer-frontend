import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <div className="savedMovies">
      <SearchForm />
      <MoviesCardList favorites={true} />
    </div>
  );
}

export default SavedMovies;
