import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function authorReducer(state = initialState.authors, action) {

  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
    return state;
  }
}