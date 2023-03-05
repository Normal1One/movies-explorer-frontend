import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const openMenuHandler = () => {
    setMenuOpen(true);
  }

  const closeMenuHandler = () => {
    setMenuOpen(false);
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <>
            <Header handleMenuOpen={openMenuHandler} />
            <Main />
            <Footer />
            <Navigation isMenuOpen={isMenuOpen} handleMenuOpen={closeMenuHandler} />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Header handleMenuOpen={openMenuHandler} />
            <Profile />
            <Footer />
            <Navigation isMenuOpen={isMenuOpen} handleMenuOpen={closeMenuHandler} />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Header handleMenuOpen={openMenuHandler} />
            <Movies />
            <Footer />
            <Navigation isMenuOpen={isMenuOpen} handleMenuOpen={closeMenuHandler} />
          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <Header handleMenuOpen={openMenuHandler} />
            <SavedMovies />
            <Footer />
            <Navigation isMenuOpen={isMenuOpen} handleMenuOpen={closeMenuHandler} />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Register />
            <Footer />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Login />
            <Footer />
          </>
        } />
        <Route path="*" element={
          <>
            <NotFound />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
