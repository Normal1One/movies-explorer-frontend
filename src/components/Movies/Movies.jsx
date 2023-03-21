import { useEffect, useState } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { getMovies } from '../MoviesFilter/MoviesFilter'
import MoviesPreloader from '../MoviesPreloader/MoviesPreloader'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

function Movies({
  searchMoviesHandler,
  saveMovieHandler,
  deleteMovieHandler,
  savedMovies,
}) {
  const moviesStatus = sessionStorage.getItem('moviesStatus')
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(sessionStorage.getItem('filteredMovies')) || []
  )
  const [slicedMovies, setSlicedMovies] = useState([])
  const [loadMovies, setLoadMovies] = useState([])

  const handleClick = () => {
    const width = window.innerWidth

    if (width >= 1280) {
      if (loadMovies.length >= 3) {
        setSlicedMovies(slicedMovies.concat(loadMovies.slice(0, 3)))
        setLoadMovies(loadMovies.slice(3))
      }
    } else if (width >= 320) {
      if (loadMovies.length >= 2) {
        setSlicedMovies(slicedMovies.concat(loadMovies.slice(0, 2)))
        setLoadMovies(loadMovies.slice(2))
      }
    }
  }

  useEffect(() => {
    const handleStorageChange = () => {
      setFilteredMovies(
        JSON.parse(sessionStorage.getItem('filteredMovies')) || []
      )
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  useEffect(() => {
    getMovies(setSlicedMovies, setLoadMovies, filteredMovies)
    const handleResize = () => {
      setTimeout(() => {
        getMovies(setSlicedMovies, setLoadMovies, filteredMovies)
      }, 1000)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [filteredMovies])

  return (
    <main className='content'>
      <section className='movies'>
        <SearchForm searchMoviesHandler={searchMoviesHandler} />
        <MoviesCardList
          saveMovieHandler={saveMovieHandler}
          deleteMovieHandler={deleteMovieHandler}
          savedMovies={savedMovies}
          movies={slicedMovies}
          moviesStatus={moviesStatus}
        />
        {loadMovies.length > 2 && <MoviesPreloader handleClick={handleClick} />}
      </section>
    </main>
  )
}

export default Movies
