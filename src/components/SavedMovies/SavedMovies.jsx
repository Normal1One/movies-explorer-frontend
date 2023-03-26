import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

export default function SavedMovies({
  searchMoviesHandler,
  saveMovieHandler,
  deleteMovieHandler,
  savedMovies,
  filteredSavedMovies,
}) {
  return (
    <main>
      <section className='savedMovies'>
        <SearchForm searchMoviesHandler={searchMoviesHandler} />
        <MoviesCardList
          saveMovieHandler={saveMovieHandler}
          deleteMovieHandler={deleteMovieHandler}
          savedMovies={savedMovies}
          movies={filteredSavedMovies}
        />
      </section>
    </main>
  )
}
