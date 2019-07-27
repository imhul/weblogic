import { initStateUsers as initState } from '../init/initStateUsers';
import { typesUsers as types } from '../constants/types';

export default function (state = initState, action) {
  switch (action.type) {

    case ADD_NEW_USER: return {
      menuItems: [...state.menuItems, action.payload.item]
    };

    case GET_ALL_USERS: return state;

    //handles item updates in redux store
    case UPDATE_USER: {
      const updatedItem = { ...action.payload.item };
      return {
        menuItems: [...state.menuItems].map(item => {
          if (item.id === updatedItem.id) {
            return updatedItem
          }
          else return item;
        })
      }
    }

    //handles item deletion from redux store
    case DELETE_USER: {
      const { id } = action.payload;
      return {
        menuItems: [...state.menuItems].filter(item => item.id !== id)
      }
    }

    //indicates when fetching begins
    case FETCH_ITEMS_BEGIN: return {
      ...state,
      loading: true,
      errors: null
    }

    //indicates when items are fetched successfully
    case FETCH_ITEMS_SUCESS: return {
      ...state,
      loading: false,
      menuItems: action.payload.items
    }

    //indicates when there is a failure in fetching items
    case FETCH_ITEMS_FAILURE: return {
      ...state,
      loading: false,
      errors: action.payload.errors,
      menuItems : []
    }

    //returns default state, in case some unknown action type is discovered
    default: return state
  }
}