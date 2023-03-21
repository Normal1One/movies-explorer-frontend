import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList({
  saveMovieHandler,
  deleteMovieHandler,
  savedMovies,
  movies,
  moviesStatus,
}) {
  const location = useLocation()

  return (
    <>
      {moviesStatus === 'none' && (
        <div className='moviesCardList__message'>Ничего не найдено</div>
      )}
      {moviesStatus === 'error' && (
        <div className='moviesCardList__message'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </div>
      )}
      {movies.length > 0 && (
        <ul
          className={classNames('moviesCardList', {
            moviesCardList_favorites: location.pathname === '/saved-movies',
          })}
        >
          {movies.map((movie) => (
            <li key={movie.id}>
              <MoviesCard
                movie={movie}
                saveMovieHandler={saveMovieHandler}
                deleteMovieHandler={deleteMovieHandler}
                savedMovies={savedMovies}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MoviesCardList
