import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = ajaxStatusReducer.numAjaxCAllsInProgress, action) {
  if(action.type == types.BING_AJAX_CALL) {
    return state + 1;
  } else if(actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}