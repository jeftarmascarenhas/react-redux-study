import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function productReducer(state = initialState.products, action) {

  switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;
    case types.CREATE_PRODUCT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.product)
      ];
    case types.UPDATE_PRODUCT_SUCCESS:
      return [
        ...state.filter(product => product.id !== action.product.id),
        Object.assign({}, action.product)
      ];
    default:
    return state;
  }
}