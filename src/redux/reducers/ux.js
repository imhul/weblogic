import { initStateUX } from '../init/initStateUX';
import { typesUX as types } from '../constants/types';

export default (state = initStateUX, action) => {
    switch (action.type) {
        case types.TAB_MODIFY:
            const active =
                typeof action.payload === 'string' || typeof action.payload === 'null'
                    ? action.payload
                    : action.payload[0];
            return { ...state, active };

        case types.CHANGE_LANG:
            return {
                ...state,
                lang: action.payload ? 'english' : 'ukrainian'
            };

        case types.CLICK_FX:
            return {
                ...state,
                cursorPos: action.payload
            };

        case types.SHOW_MODAL:
            return {
                ...state,
                trelloModalVisible: true
            };

        case types.CLOSE_MODAL:
            return {
                ...state,
                trelloModalVisible: false
            };

        case types.SHOW_DESC:
            return {
                ...state,
                isDescShow: true
            };

        case types.HIDE_DESC:
            return {
                ...state,
                isDescShow: false
            };

        case types.TEXTAREA_UPDATE:
            return {
                ...state,
                tgMessage: action.payload,
                isFilled: action.payload.length > 9 ? true : false
            };

        case types.TOGGLE_FUTURES:
            return {
                ...state,
                isFuturesOpen: !state.isFuturesOpen
            };

        case types.LOCATION_UPDATE:
            if (action.payload !== 'Home') {
                window.bgJSDom[0].bgJS.fn.particlesRefresh();
            }
            return {
                ...state,
                location: action.payload
            };

        default:
            return state;
    }
};
