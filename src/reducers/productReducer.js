export default function productReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_PRODUCT':
    return [
      ...state,
      Object.assign({}, action.product)
    ];
    default:
    return state;
  }
}