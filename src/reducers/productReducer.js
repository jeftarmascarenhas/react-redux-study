import * as types from '../constants/actionTypes';

export default function productReducer(state = [], action) {

  switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;
    default:
    return state;
  }
}