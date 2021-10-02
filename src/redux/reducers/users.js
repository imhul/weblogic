import { initStateUsers as initState } from '../init/initStateUsers';
import { typesUsers as type } from '../constants/types';

export default function (state = initState, action) {
  switch (action.type) {
    case type.ADD_NEW_USER:
      return {
        users: [...state.users, action.payload.user]
      };

    case type.GET_ALL_USERS:
      return state;

    case type.UPDATE_USER: {
      const updatedUser = { ...action.payload.user };
      return {
        users: [...state.users].map(user => {
          if (user.id === updatedUser.id) {
            return updatedUser;
          } else return user;
        })
      };
    }

    case type.DELETE_USER: {
      const { id } = action.payload;
      return {
        users: [...state.users].filter(user => user.id !== id)
      };
    }

    case type.FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        errors: null
      };

    case type.FETCH_USERS_SUCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      };

    //indicates when there is a failure in fetching users
    case type.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
        users: []
      };

    default:
      return state;
  }
}
