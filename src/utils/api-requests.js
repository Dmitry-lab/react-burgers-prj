import { getCookie } from './cookies';

const INGREDIENTS_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_ADDRESS = 'https://norma.nomoreparties.space/api/orders';
const REGISTRATION_ADDRESS = 'https://norma.nomoreparties.space/api/auth/register';
const LOGIN_ADDRESS = 'https://norma.nomoreparties.space/api/auth/login';
const GET_USER_ADDRESS = 'https://norma.nomoreparties.space/api/auth/user';
const REFRESH_TOKEN_ADDRESS = 'https://norma.nomoreparties.space/api/auth/token';
const LOGOUT_ADDRESS = 'https://norma.nomoreparties.space/api/auth/logout';
const RESET_PASSWORD_ADDRESS = 'https://norma.nomoreparties.space/api/password-reset';
const SET_NEW_PASSWORD = 'https://norma.nomoreparties.space/api/password-reset/reset'

export function getIngredients() {
  return (
    fetch(INGREDIENTS_ADDRESS)
      .then(res => {
        if (res.ok)
          return res.json()

        return Promise.reject(res.status)
      })
  )
}

export function placeOrder(ingredientsId) {
  return (
    fetch(ORDER_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingredients: ingredientsId })
    })
      .then(res => {
        if (res.ok)
          return res.json()

        return Promise.reject(res.status)
      })
  )
}

export function registration(name, email, password) {
  return (
    fetch(REGISTRATION_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    })
      .then(res => res.json())
  )
}

export function logIn(email, password) {
  return (
    fetch(LOGIN_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
  )
}

export function resetPassword(email) {
  return (
    fetch(RESET_PASSWORD_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
  )
}

export function setNewPassword(password, token) {
  return (
    fetch(SET_NEW_PASSWORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, token })
    })
      .then(res => res.json())
  )
}

export function logOut() {
  return (
    fetch(LOGOUT_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken')
      })
    })
      .then(res => res.json())
  )
}

export function refreshToken() {
  return (
    fetch(REFRESH_TOKEN_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken')
      })
    })
      .then(res => {
        if (res.ok)
          return res.json()

        return Promise.reject(res.status)
      })
  )
}

export function getUserInfo() {
  return (
    fetch(GET_USER_ADDRESS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      },
    })
      .then(res => res.json())
  )
}

export function updateUser(name, email, password) {
  return (
    fetch(GET_USER_ADDRESS, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(res => res.json())
  )
}
