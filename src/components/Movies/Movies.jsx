import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoviesPreloader from '../MoviesPreloader/MoviesPreloader'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

function Movies() {
  return (
    <main className='content'>
      <section className='movies'>
        <SearchForm />
        <MoviesCardList />
        <MoviesPreloader />
      </section>
    </main>
  )
}

export default Movies
