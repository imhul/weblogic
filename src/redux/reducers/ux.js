import { initStateUX } from './initStateUX';
import { typesUX as types } from '../constants/types';

export default (state = initStateUX, action) => {
    switch (action.type) {

        case types.IS_HOME:
            return { 
                ...state,
                isHome: true,
            };

        case types.TAB_MODIFY:
            return { 
                ...state,
                active: action.payload,
            };

        case types.CHANGE_LANG:
            return { 
                ...state,
                lang: action.payload ? 'english' : 'russian',
            };

        case types.CLICK_FX:
            return {
                ...state,
                cursorPos: action.payload,
            };

        case types.SHOW_MODAL:
            return {
                ...state,
                trelloModalVisible: true,
            };

        case types.CLOSE_MODAL:
            return {
                ...state,
                trelloModalVisible: false,
            };

        case types.SHOW_DESC:
            return {
                ...state,
                isDescShow: true,
            };

        case types.HIDE_DESC:
            return {
                ...state,
                isDescShow: false,
            };

        case types.TEXTAREA_UPDATE:
            return {
                ...state,
                tgMessage: action.payload.target.value,
                isFilled: (action.payload.target.value.length > 9) ? true : false
            };

        case types.TOGGLE_FUTURES:
            return {
                ...state,
                isFuturesOpen: !state.isFuturesOpen,
            };

        case types.HISTORY_UPDATE:
            return {
                ...state,
                location: action.payload,
                isHome: action.payload === '/' ? true : false
            };

        default:
            return state;
    }
};