const INGREDIENTS_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';

export default function getIngredients() {
  return (
    fetch(INGREDIENTS_ADDRESS)
      .then(res => {
        if (res.ok)
          return res.json()

        return Promise.reject(res.status)
      })
  )
}
