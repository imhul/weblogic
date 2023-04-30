import { typesUsers as type } from '../constants/types';
import axios from 'axios';

// fetch

export const fetchUsersBegin = () => ({
    type: type.FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
    type: type.FETCH_USERS_SUCESS,
    payload: { users }
});

export const fetchUsersFailure = errors => ({
    type: type.FETCH_USERS_FAILURE,
    payload: { errors }
});

// users

export const createUser = user => ({
    type: type.ADD_NEW_USER,
    payload: { user }
});

export const updateUser = user => ({
    type: type.UPDATE_USER,
    payload: { user }
});

export const deleteUser = id => ({
    type: type.DELETE_USER,
    payload: { id }
});
