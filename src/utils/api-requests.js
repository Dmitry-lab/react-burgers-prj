import { getCookie } from './cookies';

const INGREDIENTS_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_ADDRESS = 'https://norma.nomoreparties.space/api/orders';
const REGISTRATION_ADDRESS = 'https://norma.nomoreparties.space/api/auth/register';
const LOGIN_ADDRESS = 'https://norma.nomoreparties.space/api/auth/login';
const GET_USER_ADDRESS = 'https://norma.nomoreparties.space/api/auth/user';
const REFRESH_TOKEN_ADDRESS = "https://norma.nomoreparties.space/api/auth/token"

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
      .then(res => {
        if (res.ok)
          return res.json()

        return Promise.reject(res.status)
      })
  )
}

export function logIn(email, password) {
  return (
    fetch(LOGIN_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password})
    })
      .then(res => {
        if (res.ok)
          return res.json()

        return Promise.reject(res.status)
      })
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

        return Promise.reject(res.message)
      })
  )
}

export function getUserInfo() {
  console.log(getCookie('accessToken'))
  return (
    fetch(GET_USER_ADDRESS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      },
    })
      .then(res => {
        if (res.ok)
          return res.json()

        return Promise.reject(res.message)
      })
  )
}
