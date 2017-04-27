import AuthorApi from '../api/mockAuthorApi';
import * as types from '../constants/actionTypes';
import {beginAjaxCall} from './ajaxStatusActons';

export function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}