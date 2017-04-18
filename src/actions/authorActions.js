import AuthorApi from '../api/mockAuthorApi';
import * as types from '../constants/actionTypes';
import {biginAjaxCall} from './ajaxStatusActons';

export function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(biginAjaxCall());
      dispatch(loadAuthorSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}