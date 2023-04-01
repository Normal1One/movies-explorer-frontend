import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import styles from './MoviesCardList.module.css'

export default function MoviesCardList({
  saveMovieHandler,
  deleteMovieHandler,
  savedMovies,
  movies,
}) {
  const moviesStatus = sessionStorage.getItem('moviesStatus')
  const savedMoviesStatus = sessionStorage.getItem('savedMoviesStatus')
  const location = useLocation()

  return (
    <>
      {location.pathname === '/movies' && (
        <>
          {moviesStatus === 'none' && (
            <div className={styles.moviesCardList__message}>
              Ничего не найдено
            </div>
          )}
          {moviesStatus === 'error' && (
            <div className={styles.moviesCardList__message}>
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </div>
          )}
        </>
      )}
      {location.pathname === '/saved-movies' && (
        <>
          {savedMoviesStatus === 'none' && (
            <div className={styles.moviesCardList__message}>
              Ничего не найдено
            </div>
          )}
          {savedMoviesStatus === 'error' && (
            <div className={styles.moviesCardList__message}>
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </div>
          )}
        </>
      )}
      {movies.length > 0 && (
        <ul
          className={classNames(styles.moviesCardList, {
            [styles['moviesCardList_favorites']]:
              location.pathname === '/saved-movies',
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
