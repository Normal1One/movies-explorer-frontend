import './MoviesCard.css'
import picture from '../../images/test-picture.jpg'
import React from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

function MoviesCard() {
  const [isLiked, setLiked] = React.useState(false)
  const location = useLocation()

  const handleMovieCardLike = () => {
    if (location.pathname === '/movies') {
      setLiked((state) => !state)
    }
  }

  return (
    <div className='moviesCard'>
      <div className='moviesCard__text'>
        <p className='moviesCard__title'>33 слова о дизайне</p>
        <p className='moviesCard__duration'>1ч 47м</p>
      </div>
      <button
        className={classNames({
          moviesCard__button: true,
          moviesCard__button_favorites: location.pathname === '/saved-movies',
          moviesCard__button_liked: isLiked,
        })}
        onClick={handleMovieCardLike}
      ></button>
      <img src={picture} alt='Test' className='moviesCard__image'></img>
    </div>
  )
}

export default MoviesCard
