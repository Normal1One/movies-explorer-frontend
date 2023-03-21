export const getMovies = async () => {
  const response = await fetch('https://api.nomoreparties.co/beatfilm-movies')
  return _checkRespoce(response)
}

const _checkRespoce = (response) => {
  if (response.ok) {
    return response.json()
  }
  return Promise.reject(`Ошибка: ${response.status}`)
}
