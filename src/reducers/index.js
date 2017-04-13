import {combineReducers} from 'redux';
import products from './productReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  products,
  authors
});

export default rootReducer;
