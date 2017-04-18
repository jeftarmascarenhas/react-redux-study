import {combineReducers} from 'redux';
import products from './productReducer';
import authors from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  products,
  authors,
  ajaxStatusReducer
});

export default rootReducer;
