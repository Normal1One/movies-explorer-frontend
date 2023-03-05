import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ favorites }) {
  return (
    <div className={`moviesCardList ${ favorites ? 'moviesCardList_favorites' : '' }`}>
      <MoviesCard favorites={favorites} />
      <MoviesCard favorites={favorites} />
      <MoviesCard favorites={favorites} />
      <MoviesCard favorites={favorites} />
      <MoviesCard favorites={favorites} />
    </div>
  );
}

export default MoviesCardList;
