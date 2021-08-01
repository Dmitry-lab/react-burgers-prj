const INGREDIENTS_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_ADDRESS = 'https://norma.nomoreparties.space/api/orders';
const REGISTRATION_ADDRESS = 'https://norma.nomoreparties.space/api/auth/register';
const LOGIN_ADDRESS = 'https://norma.nomoreparties.space/api/auth/login';

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
