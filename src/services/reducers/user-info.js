import {
  SET_USER_INFO
} from '../actions/user-info';

const initialState = {
  info: {
    name: '',
    email: ''
  }
}

export const userInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_INFO: {
      return { ...state, info: action.user }
    }
    default: {
      return state
    }
  }
}
