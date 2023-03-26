import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Navigation from '../Navigation/Navigation'
import { useEffect, useState } from 'react'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { getMovies } from '../../utils/MoviesApi'
import {
  changeUser,
  createMovie,
  deleteMovie,
  getSavedMovies,
  getUser,
  login,
  logout,
  register,
} from '../../utils/MainApi'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Preloader from '../Preloader/Preloader'
import { SHORT_MOVIE_LENGTH } from '../../utils/constants'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccessfully, setIsSuccessfully] = useState(true)
  const [isUserChanged, setIsUserChanged] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'))
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearchMovies = (searchValue, isChecked) => {
    try {
      const moviesData =
        location.pathname === '/movies'
          ? JSON.parse(sessionStorage.getItem('movies'))
          : savedMovies
      const filteredMovies = moviesData
        .filter((movie) => isShort(movie, isChecked))
        .filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
        )
      location.pathname === '/movies'
        ? updateSessionStorage(filteredMovies, searchValue, isChecked)
        : saveMovies(filteredMovies)
      window.dispatchEvent(new Event('storage'))
    } catch {
      sessionStorage.setItem('moviesStatus', 'error')
      window.dispatchEvent(new Event('storage'))
    }
  }

  const isShort = (movie, isChecked) => {
    return !JSON.parse(isChecked) ? movie.duration >= SHORT_MOVIE_LENGTH : movie
  }

  const updateSessionStorage = (filteredMovies, searchValue, isChecked) => {
    sessionStorage.removeItem('moviesStatus')
    sessionStorage.setItem('checkedStatus', isChecked)
    sessionStorage.setItem('searchValue', searchValue)
    sessionStorage.setItem('filteredMovies', JSON.stringify(filteredMovies))
    if (filteredMovies.length === 0) {
      sessionStorage.setItem('moviesStatus', 'none')
    }
  }

  const saveMovies = (filteredMovies) => {
    sessionStorage.removeItem('savedMoviesStatus')
    setFilteredSavedMovies(filteredMovies)
    if (filteredMovies.length === 0) {
      sessionStorage.setItem('savedMoviesStatus', 'none')
    }
  }

  const handleChangeUser = async ({ name, email }) => {
    try {
      await changeUser(name, email)
      setCurrentUser({ name, email })
      setIsSuccessfully(true)
      setIsUserChanged(true)
    } catch (err) {
      setIsSuccessfully(false)
    }
  }

  const handleLogin = async ({ email, password }) => {
    try {
      await login(email, password)
      fetchMovies()
      fetchData()
      setIsSuccessfully(true)
      navigate('/movies')
    } catch (err) {
      setIsSuccessfully(false)
    }
  }

  const handleRegister = async ({ name, email, password }) => {
    try {
      await register(name, email, password)
      handleLogin({ email, password })
    } catch (err) {
      setIsSuccessfully(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      setCurrentUser({})
      setIsSuccessfully(true)
      sessionStorage.clear()
      sessionStorage.setItem('isLoggedIn', false)
      navigate('/')
    } catch (err) {
      setIsSuccessfully(false)
    }
  }

  const menuHandler = () => {
    setIsMenuOpen((state) => !state)
  }

  const saveMovieHandler = async (movie) => {
    try {
      const response = await createMovie(movie)
      setSavedMovies([response, ...savedMovies])
      setFilteredSavedMovies([response, ...savedMovies])
    } catch (err) {
      console.log(err)
    }
  }

  const deleteMovieHandler = async (movieId) => {
    try {
      await deleteMovie(movieId)
      setSavedMovies(savedMovies.filter((m) => m.movieId !== movieId))
      setFilteredSavedMovies(savedMovies.filter((m) => m.movieId !== movieId))
    } catch (err) {
      console.log(err)
    }
  }

  const fetchMovies = async () => {
    try {
      const moviesData = await getMovies()
      sessionStorage.setItem('movies', JSON.stringify(moviesData))
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData = async () => {
    try {
      const [savedMovies, user] = await Promise.all([
        getSavedMovies(),
        getUser(),
      ])
      setSavedMovies(savedMovies)
      setFilteredSavedMovies(savedMovies)
      sessionStorage.removeItem('savedMoviesStatus')
      setCurrentUser(user)
      sessionStorage.setItem('isLoggedIn', true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    try {
      fetchMovies()
      fetchData()
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header loggedIn={isLoggedIn} handleMenuOpen={menuHandler} />
                <Main />
                <Footer />
                <Navigation
                  isMenuOpen={isMenuOpen}
                  handleMenuClose={menuHandler}
                />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Header loggedIn={isLoggedIn} handleMenuOpen={menuHandler} />
                <Profile
                  onChangeUser={handleChangeUser}
                  onLogout={handleLogout}
                  isSuccessfully={isSuccessfully}
                  isUserChanged={isUserChanged}
                />
                <Navigation
                  isMenuOpen={isMenuOpen}
                  handleMenuClose={menuHandler}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Header loggedIn={isLoggedIn} handleMenuOpen={menuHandler} />
                <Movies
                  searchMoviesHandler={handleSearchMovies}
                  saveMovieHandler={saveMovieHandler}
                  deleteMovieHandler={deleteMovieHandler}
                  savedMovies={savedMovies}
                />
                <Footer />
                <Navigation
                  isMenuOpen={isMenuOpen}
                  handleMenuClose={menuHandler}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Header loggedIn={isLoggedIn} handleMenuOpen={menuHandler} />
                <SavedMovies
                  searchMoviesHandler={handleSearchMovies}
                  saveMovieHandler={saveMovieHandler}
                  deleteMovieHandler={deleteMovieHandler}
                  savedMovies={savedMovies}
                  filteredSavedMovies={filteredSavedMovies}
                />
                <Footer />
                <Navigation
                  isMenuOpen={isMenuOpen}
                  handleMenuClose={menuHandler}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/signup'
            element={
              <ProtectedRoute loggedIn={!isLoggedIn}>
                <Register
                  onRegister={handleRegister}
                  isSuccessfully={isSuccessfully}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/signin'
            element={
              <ProtectedRoute loggedIn={!isLoggedIn}>
                <Login onLogin={handleLogin} isSuccessfully={isSuccessfully} />
              </ProtectedRoute>
            }
          />
          <Route
            path='*'
            element={
              <>
                <NotFound />
              </>
            }
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  )
}
