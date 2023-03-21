import './MoviesPreloader.css'

function MoviesPreloader({ handleClick }) {
  return (
    <div className='moviesPreloader'>
      <button className='moviesPreloader__button' onClick={handleClick}>
        Ещё
      </button>
    </div>
  )
}

export default MoviesPreloader
