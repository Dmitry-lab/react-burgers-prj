import { registration, logIn, getUserInfo, refreshToken } from "../../utils/api-requests";
import { setCookie, getToken, getCookie } from "../../utils/cookies";

export const SET_USER_INFO = 'GET_USER_INFO';

const setAuth = (res, dispatch) => {
  setCookie('accessToken', getToken(res.accessToken));
  console.log(getCookie('accessToken'));
  localStorage.setItem('refreshToken', getToken(res.refreshToken));
  dispatch({ type: SET_USER_INFO, user: res.user})
}

export const registerUser = (name, email, password) => (dispatch) => {
  registration(name, email, password)
    .then(data => setAuth(data, dispatch))
    .catch(err => alert(`Ошибка обращения к серверу: ${err}. Попробуйте зарегистрироваться позже.`))
}

export const userLogIn = (email, password) => (dispatch) => {
  logIn(email, password)
    .then(data => setAuth(data, dispatch))
    .catch(err => alert(`Ошибка обращения к серверу: ${err}. Попробуйте авторизироваться позже.`))
}

export const setUserInfo = () => (dispatch) => {
  getUserInfo()
    .then(data => dispatch({ type: SET_USER_INFO, user: data.user }))
    .catch(err => {
      if (err === 'jwt expired') {
        dispatch(updateToken)
        return
      }

      alert(`Ошибка обращения к серверу. Невозможно получить данные пользователя.`)
    })
}

const updateToken = (dispatch) => {
  refreshToken()
    .then(data => {
      setCookie('accessToken', getToken(data.accessToken));
      localStorage.setItem('refreshToken', data.refreshToken);
      dispatch(setUserInfo())
    })
    .catch(err => `Ошибка обращения к серверу. Невозможно получить данные пользователя.`)
}
