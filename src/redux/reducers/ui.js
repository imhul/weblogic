import { initStateUI as initState } from '../init/initStateUI';
import { typesUI, typesUX } from '../constants/types';

export default (state = initState, action) => {
    switch (action.type) {
        case typesUI.INITIALIZE:
            return {
                ...state,
                initialized: true
            };

        case typesUI.HERO_ANIMATE:
            return {
                ...state,
                heroStyle: { transform: 'scale(1)', opacity: 1 }
            };

        case typesUI.SET_ENV:
            return {
                ...state,
                safe: action.payload
            };

        case typesUX.TAB_MODIFY:
            const active =
                typeof action.payload === 'string' ||
                typeof action.payload === 'null'
                    ? action.payload
                    : action.payload[0];
            return { ...state, active };

        case typesUX.CHANGE_LANG:
            return {
                ...state,
                lang: action.payload
            };

        case typesUX.SET_TIP_OF_THE_DAY:
            return {
                ...state,
                tip: action.payload
            };

        case typesUX.CHANGE_CONTACT_METHOD:
            return {
                ...state,
                contactMethod: action.payload
            };

        case typesUX.TOGGLE_TOOLBAR:
            return {
                ...state,
                isMenuOpen: action.payload
            };

        case typesUX.CLICK_FX:
            return {
                ...state,
                cursorPos: action.payload
            };

        case typesUX.SHOW_MODAL:
            return {
                ...state,
                trelloModalVisible: true
            };

        case typesUX.CLOSE_MODAL:
            return {
                ...state,
                trelloModalVisible: false
            };

        case typesUX.SHOW_DESC:
            return {
                ...state,
                isDescShow: true
            };

        case typesUX.HIDE_DESC:
            return {
                ...state,
                isDescShow: false
            };

        case typesUX.TEXTAREA_UPDATE:
            return {
                ...state,
                tgMessage: action.payload,
                isFilled: action.payload.length > 9 ? true : false
            };

        case typesUX.FORM_UPDATE:
            return {
                ...state,
                emailForm: action.payload.form,
                isFilled: action.payload.filled
            };

        case typesUX.TOGGLE_FUTURES:
            return {
                ...state,
                isFuturesOpen: !state.isFuturesOpen
            };

        case typesUX.LOCATION_UPDATE:
            if (action.payload !== 'Home') {
                window.bgJSDom[0].bgJS.fn.particlesRefresh();
            }
            return {
                ...state,
                location: action.payload,
                active: null
            };

        default:
            return state;
    }
};
