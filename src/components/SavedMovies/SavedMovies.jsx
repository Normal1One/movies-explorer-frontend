import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'

function SavedMovies() {
  return (
    <main className='content'>
      <section className='savedMovies'>
        <SearchForm />
        <MoviesCardList />
      </section>
    </main>
  )
}

export default SavedMovies
