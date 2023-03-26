import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  MOVIES_AMOUNT_DEFAULT,
  MOVIES_AMOUNT_MEDIUM,
  MOVIES_AMOUNT_SMALL,
  MOVIES_LOAD_AMOUNT_DEFAULT,
  MOVIES_LOAD_AMOUNT_SMALL,
} from '../utils/constants'

export default function useMoviesFilter() {
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(sessionStorage.getItem('filteredMovies')) || []
  )
  const [sliceCount, setSliceCount] = useState(MOVIES_AMOUNT_DEFAULT)
  const slicedMovies = useMemo(
    () => filteredMovies.slice(0, sliceCount),
    [filteredMovies, sliceCount]
  )
  const moviesToLoad = useMemo(
    () => filteredMovies.slice(sliceCount).length,
    [filteredMovies, sliceCount]
  )

  const loadMovies = useCallback(() => {
    setSliceCount(MOVIES_AMOUNT_DEFAULT)
    if (window.innerWidth < 1280 && window.innerWidth >= 768) {
      setSliceCount(MOVIES_AMOUNT_MEDIUM)
    } else if (window.innerWidth < 768) {
      setSliceCount(MOVIES_AMOUNT_SMALL)
    }
  }, [])

  const loadMoreMovies = () => {
    if (window.innerWidth > 768) {
      setSliceCount((state) => state + MOVIES_LOAD_AMOUNT_DEFAULT)
    } else {
      setSliceCount((state) => state + MOVIES_LOAD_AMOUNT_SMALL)
    }
  }

  useEffect(() => {
    const handleStorageChange = () => {
      setFilteredMovies(
        JSON.parse(sessionStorage.getItem('filteredMovies')) || []
      )
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  useEffect(() => {
    loadMovies()
    const handleResize = () => {
      setTimeout(() => {
        loadMovies()
      }, 1000)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [filteredMovies, loadMovies])

  return [moviesToLoad, slicedMovies, loadMoreMovies]
}
