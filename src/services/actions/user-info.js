import { registration, logIn } from "../../utils/api-requests";


export const GET_USER_INFO = 'GET_USER_INFO';

export const registerUser = (name, email, password) => (dispatch) => {
  registration(name, email, password)
    .then(data => dispatch({ type: GET_USER_INFO, user: data.user}))
    .catch(err => alert(`Ошибка обращения к серверу: ${err}. Попробуйте зарегистрироваться позже.`))
}

export const userLogIn = (email, password) => (dispatch) => {
  logIn(email, password)
    .then(data => dispatch({ type: GET_USER_INFO, user: data.user}))
    .catch(err => alert(`Ошибка обращения к серверу: ${err}. Попробуйте авторизироваться позже.`))
}
