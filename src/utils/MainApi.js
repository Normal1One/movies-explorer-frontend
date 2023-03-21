import { BASE_URL } from './constants'

export const changeUser = async (name, email) => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  })
  return _checkResponse(response)
}

export const getSavedMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
  })
  return _checkResponse(response)
}

export const createMovie = async (values) => {
  const response = await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ ...values }),
  })
  return _checkResponse(response)
}

export const deleteMovie = async (id) => {
  const response = await fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })
  return _checkResponse(response)
}

export const register = async (name, email, password) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
  return _checkResponse(response)
}

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
  return _checkResponse(response)
}

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
  })
  return _checkResponse(response)
}

export const logout = async () => {
  const response = await fetch(`${BASE_URL}/signout`, {
    credentials: 'include',
  })
  return _checkResponse(response)
}

const _checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  return Promise.reject(`Ошибка: ${response.status}`)
}
