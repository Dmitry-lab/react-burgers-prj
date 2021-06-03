const INGRIDIENTS_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';

export default function getIngridients() {
  return (
    fetch(INGRIDIENTS_ADDRESS)
      .then(res => {
        if (res.ok)
          return res.json()

        return Promise.reject(res.status)
      })
  )
}
