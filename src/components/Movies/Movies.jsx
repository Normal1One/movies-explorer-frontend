import useMoviesFilter from '../../hooks/useMoviesFilter'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoviesPreloader from '../MoviesPreloader/MoviesPreloader'
import SearchForm from '../SearchForm/SearchForm'

export default function Movies({
  searchMoviesHandler,
  saveMovieHandler,
  deleteMovieHandler,
  savedMovies,
}) {
  const [moviesToLoad, slicedMovies, loadMoreMovies] = useMoviesFilter()

  return (
    <main>
      <section className='movies'>
        <SearchForm searchMoviesHandler={searchMoviesHandler} />
        <MoviesCardList
          saveMovieHandler={saveMovieHandler}
          deleteMovieHandler={deleteMovieHandler}
          savedMovies={savedMovies}
          movies={slicedMovies}
        />
        {moviesToLoad > 2 && <MoviesPreloader handleClick={loadMoreMovies} />}
      </section>
    </main>
  )
}
