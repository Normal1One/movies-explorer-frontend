import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList() {
  const location = useLocation()

  return (
    <ul
      className={classNames({
        moviesCardList: true,
        moviesCardList_favorites: location.pathname === '/saved-movies',
      })}
    >
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>
    </ul>
  )
}

export default MoviesCardList
