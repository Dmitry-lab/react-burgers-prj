import {
  GET_USER_INFO
} from '../actions/user-info';

const initialState = {
  name: '',
  email: '',
}

export const userInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_INFO: {
      const { name, email } = action.user;
      return { name, email }
    }
    default: {
      return state
    }
  }
}
