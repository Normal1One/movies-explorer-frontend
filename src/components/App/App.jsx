import './App.css'
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
import { filterMovies } from '../MoviesFilter/MoviesFilter'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccessfully, setIsSuccessfully] = useState(true)
  const [isUserChanged, setIsUserChanged] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'))
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearchMovies = (searchValue, isChecked) => {
    try {
      updateMoviesSessionStorage(
        filterMovies(
          location.pathname === '/movies'
            ? JSON.parse(sessionStorage.getItem('movies'))
            : savedMovies,
          isChecked,
          searchValue,
          location.pathname === '/movies'
        ),
        searchValue,
        isChecked
      )
      window.dispatchEvent(new Event('storage'))
    } catch {
      sessionStorage.setItem(
        location.pathname === '/movies' ? 'moviesStatus' : 'savedMoviesStatus',
        'error'
      )
    }
  }

  const updateMoviesSessionStorage = (
    filteredMovies,
    searchValue,
    isChecked
  ) => {
    sessionStorage.removeItem(
      location.pathname === '/movies' ? 'moviesStatus' : 'savedMoviesStatus'
    )
    sessionStorage.setItem('checkedStatus', isChecked)
    sessionStorage.setItem('searchValue', searchValue)
    sessionStorage.setItem(
      location.pathname === '/movies'
        ? 'filteredMovies'
        : 'filteredSavedMovies',
      JSON.stringify(filteredMovies)
    )
    if (filteredMovies.length === 0) {
      sessionStorage.setItem(
        location.pathname === '/movies' ? 'moviesStatus' : 'savedMoviesStatus',
        'none'
      )
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

  const handleLogin = async ({ name, email, password }) => {
    try {
      await login(email, password)
      setCurrentUser({ name, email })
      sessionStorage.setItem('isLoggedIn', true)
      navigate('/movies')
    } catch (err) {
      setIsSuccessfully(false)
    }
  }

  const handleRegister = async ({ name, email, password }) => {
    try {
      await register(name, email, password)
      handleLogin({ name, email, password })
    } catch (err) {
      setIsSuccessfully(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      setCurrentUser({})
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
      sessionStorage.removeItem('savedMoviesStatus')
      sessionStorage.setItem(
        'filteredSavedMovies',
        JSON.stringify([
          response,
          ...JSON.parse(sessionStorage.getItem('filteredSavedMovies')),
        ])
      )
    } catch (err) {
      console.log(err)
    }
  }

  const deleteMovieHandler = async (movieId) => {
    try {
      await deleteMovie(movieId)
      setSavedMovies(savedMovies.filter((m) => m.movieId !== movieId))
      sessionStorage.setItem(
        'filteredSavedMovies',
        JSON.stringify(
          JSON.parse(sessionStorage.getItem('filteredSavedMovies')).filter(
            (m) => m.movieId !== movieId
          )
        )
      )
      window.dispatchEvent(new Event('storage'))
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
      setCurrentUser(user)
      sessionStorage.setItem('isLoggedIn', true)
    } catch (err) {
      console.log(err)
    }
  }

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
              <>
                <Register
                  onRegister={handleRegister}
                  isSuccessfully={isSuccessfully}
                />
              </>
            }
          />
          <Route
            path='/signin'
            element={
              <>
                <Login onLogin={handleLogin} isSuccessfully={isSuccessfully} />
              </>
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

export default App
