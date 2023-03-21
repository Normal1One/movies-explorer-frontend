import './MoviesCard.css'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

function MoviesCard({
  movie,
  saveMovieHandler,
  deleteMovieHandler,
  savedMovies,
}) {
  const isSaved = savedMovies.some(
    (i) => i.movieId === movie.id || movie.movieId
  )
  const location = useLocation()

  const convertMovie = (movie) => {
    const newMovie = {
      ...movie,
      movieId: movie.id,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    }
    delete newMovie.id
    delete newMovie.created_at
    delete newMovie.updated_at
    return newMovie
  }

  const handleClick = () => {
    if (isSaved) {
      deleteMovieHandler(movie.id || movie.movieId)
    } else {
      saveMovieHandler(convertMovie(movie))
    }
  }

  return (
    <div className='moviesCard'>
      <div className='moviesCard__text'>
        <p className='moviesCard__title'>{movie.nameRU}</p>
        <p className='moviesCard__duration'>
          {Math.floor(movie.duration / 60) === 0
            ? `${movie.duration}м`
            : `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}
        </p>
      </div>
      <button
        className={classNames('moviesCard__button', {
          moviesCard__button_favorites: location.pathname === '/saved-movies',
          moviesCard__button_liked: isSaved && location.pathname === '/movies',
        })}
        onClick={handleClick}
      />
      <Link to={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img
          src={
            movie.image.url
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          alt={movie.nameRU}
          className='moviesCard__image'
        ></img>
      </Link>
    </div>
  )
}

export default MoviesCard
