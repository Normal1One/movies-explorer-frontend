export const isShort = (movie, isChecked) => {
  if (!JSON.parse(isChecked)) {
    return movie.duration >= 40
  }
  return movie
}

export const filterMovies = (moviesData, isChecked, searchValue) => {
  return moviesData
    .filter((movie) => isShort(movie, isChecked))
    .filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
    )
}

export const filterSliceMovies = (filteredMovies, sliceCount) => {
  return filteredMovies.slice(0, sliceCount)
}

export const filterLoadMovies = (filteredMovies, sliceCount) => {
  return filteredMovies.slice(sliceCount)
}

export const getMovies = (setSlicedMovies, setLoadMovies, filteredMovies) => {
  const width = window.innerWidth

  switch (true) {
    case width >= 1280:
      setSlicedMovies(filterSliceMovies(filteredMovies, 12))
      setLoadMovies(filterLoadMovies(filteredMovies, 12))
      break
    case width >= 768:
      setSlicedMovies(filterSliceMovies(filteredMovies, 8))
      setLoadMovies(filterLoadMovies(filteredMovies, 8))
      break
    case width >= 320:
      setSlicedMovies(filterSliceMovies(filteredMovies, 5))
      setLoadMovies(filterLoadMovies(filteredMovies, 5))
      break
    default:
      setSlicedMovies([])
      setLoadMovies([])
      break
  }
}
