import './MoviesCard.css';

function MoviesCard({ favorites }) {
  return (
    <div className="moviesCard">
      <div className="moviesCard__text">
        <p className="moviesCard__title">33 слова о дизайне</p>
        <p className="moviesCard__duration">1ч 47м</p>
      </div>
      <input type="checkbox" className={`moviesCard__button ${ favorites ? 'moviesCard__button_favorites' : '' }`}></input>
      <div className="moviesCard__image"></div>
    </div>
  );
}

export default MoviesCard;
