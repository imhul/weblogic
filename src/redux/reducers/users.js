import { initStateUsers as initState } from '../init/initStateUsers';
import { typesUsers as type } from '../constants/types';

export default function (state = initState, action) {
  switch (action.type) {

    case type.ADD_NEW_USER: return {
      menuItems: [...state.menuItems, action.payload.item]
    };

    case type.GET_ALL_USERS: return state;

    case type.UPDATE_USER: {
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

    case type.DELETE_USER: {
      const { id } = action.payload;
      return {
        menuItems: [...state.menuItems].filter(item => item.id !== id)
      }
    }

    case type.FETCH_ITEMS_BEGIN: return {
      ...state,
      loading: true,
      errors: null
    }

    case type.FETCH_ITEMS_SUCESS: return {
      ...state,
      loading: false,
      menuItems: action.payload.items
    }

    //indicates when there is a failure in fetching items
    case type.FETCH_ITEMS_FAILURE: return {
      ...state,
      loading: false,
      errors: action.payload.errors,
      menuItems : []
    }

    //returns default state, in case some unknown action type is discovered
    default: return state
  }
}