import {combineReducers} from 'redux';
import products from './productReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  products,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
