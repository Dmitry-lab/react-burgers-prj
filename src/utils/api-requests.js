const INGREDIENTS_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_ADDRESS = 'https://norma.nomoreparties.space/api/orders';

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
