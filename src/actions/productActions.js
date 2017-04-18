import * as types from '../constants/actionTypes';
import productApi from '../api/mockCourseApi';
import {biginAjaxCall} from './ajaxStatusActons';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function updateProductSuccess(product) {
  return {type: types.UPDATE_PRODUCT_SUCCESS, product};
}

export function createProductSuccess(product) {
  return {type: types.CREATE_PRODUCT_SUCCESS, product};
}

export function loadProducts() {
  return function(dispatch) {
    return productApi.getAllProducts().then( products => {
      dispatch(biginAjaxCall());
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveProduct(product) {
  return function(dispatch, getState) {
    dispatch(biginAjaxCall());
    return productApi.saveProduct(product).then(savedProduct => {
      product.id ? dispatch(updateProductSuccess(savedProduct)) :
      dispatch(createProductSuccess(savedProduct));
    }).catch(error => {
      throw error;
    });
  };
}