import {
  LOAD_INGREDIENTS,
  SHOW_INGREDIENT_INFO,
  HIDE_INGREDIENT_INFO,
  PLACE_ORDER_FAILD,
  PLACE_ORDER_SUCCESS,
  CLEAR_ORDER_INFO
} from '../actions/burgers-constructor';

const initialState = {
  ingredients: [],
  addedIngredients: [],
  viewedIngredient: null,
  currentOrder: null,
  orderRequestFaild: false,
}

export const constructorReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_INGREDIENTS: {
      return {
        ...state,
         ingredients: action.ingredients}
    }
    case SHOW_INGREDIENT_INFO: {
      return {
        ...state,
        viewedIngredient: action.info
      }
    }
    case HIDE_INGREDIENT_INFO: {
      return {
        ...state,
        viewedIngredient: null
      }
    }
    case PLACE_ORDER_SUCCESS: {
      return {
        ...state,
        currentOrder: action.order,
      }
    }
    case PLACE_ORDER_FAILD: {
      return {
        ...state,
        orderRequestFaild: true,
        currentOrder: null
      }
    }
    case CLEAR_ORDER_INFO: {
      return {
        ...state,
        orderRequestFaild: false,
        currentOrder: null
      }
    }
    default:
      return state
  }
}
