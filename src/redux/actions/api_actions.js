import { typesUsers as type } from '../constants/types';
import axios from 'axios';

// fetch

export const fetchItemsBegin = () => ({
  type: type.FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = items => ({
  type: type.FETCH_ITEMS_SUCESS,
  payload: { items }
});

export const fetchItemsFailure = errors => ({
  type: type.FETCH_ITEMS_FAILURE,
  payload: { errors }
});

// users

export const createItem = (item) => ({
  type: type.ADD_NEW_USER,
  payload: { item }
});

export function readItems() {
  return (dispatch) => {
    dispatch(fetchItemsBegin());

    return axios.get('/api/menuItems')
      .then(({data}) => {
        console.log(data);
        console.log('success');
        dispatch(fetchItemsSuccess(data));
      })
      .catch(error => dispatch(fetchItemsFailure(error)))
  }
};

export const updateItem = (item) => ({
  type: type.UPDATE_USER,
  payload: { item }
});

export const deleteItem = (id) => ({
  type: type.DELETE_USER,
  payload: { id }
});