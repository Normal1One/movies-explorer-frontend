import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'
import { useEffect, useState } from 'react'

function SavedMovies({
  searchMoviesHandler,
  saveMovieHandler,
  deleteMovieHandler,
  savedMovies,
}) {
  const moviesStatus = sessionStorage.getItem('savedMoviesStatus')
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(sessionStorage.getItem('filteredSavedMovies')) || []
  )

  useEffect(() => {
    const handleStorageChange = () => {
      setFilteredMovies(
        JSON.parse(sessionStorage.getItem('filteredSavedMovies')) || []
      )
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <main className='content'>
      <section className='savedMovies'>
        <SearchForm searchMoviesHandler={searchMoviesHandler} />
        <MoviesCardList
          saveMovieHandler={saveMovieHandler}
          deleteMovieHandler={deleteMovieHandler}
          savedMovies={savedMovies}
          movies={filteredMovies}
          moviesStatus={moviesStatus}
        />
      </section>
    </main>
  )
}

export default SavedMovies
