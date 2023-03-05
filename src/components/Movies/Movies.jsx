import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesPreloader from '../MoviesPreloader/MoviesPreloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
      <MoviesPreloader />
    </div>
  );
}

export default Movies;
