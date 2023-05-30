import { initStateUI as initState } from '../init/initStateUI';
import { UI_UX_types as type } from '../constants/types';

export default (state = initState, action) => {
    switch (action.type) {
        case type.INITIALIZE:
            return {
                ...state,
                initialized: true
            };

        case type.HERO_ANIMATE:
            return {
                ...state,
                heroStyle: { transform: 'scale(1)', opacity: 1 }
            };

        case type.SET_ENV:
            return {
                ...state,
                safe: action.payload
            };

        case type.TAB_MODIFY:
            const active =
                typeof action.payload === 'string' ||
                typeof action.payload === 'null'
                    ? action.payload
                    : action.payload[0];
            return { ...state, active };

        case type.CHANGE_LANG:
            return {
                ...state,
                lang: action.payload
            };

        case type.TOGGLE_USER_LANG_SELECT:
            return {
                ...state,
                isUserLangSelected: true
            };

        case type.CHANGE_AUTH_FORM_TYPE:
            return {
                ...state,
                authFormType: action.payload
            };

        case type.SET_TIP_OF_THE_DAY:
            return {
                ...state,
                tip: action.payload
            };

        case type.CHANGE_CONTACT_METHOD:
            return {
                ...state,
                contactMethod: action.payload
            };

        case type.TOGGLE_TOOLBAR:
            return {
                ...state,
                isMenuOpen: action.payload
            };

        case type.CLICK_FX:
            return {
                ...state,
                cursorPos: action.payload
            };

        case type.SHOW_MODAL:
            return {
                ...state,
                trelloModalVisible: true
            };

        case type.CLOSE_MODAL:
            return {
                ...state,
                trelloModalVisible: false
            };

        case type.SHOW_DESC:
            return {
                ...state,
                isDescShow: true
            };

        case type.HIDE_DESC:
            return {
                ...state,
                isDescShow: false
            };

        case type.TEXTAREA_UPDATE:
            return {
                ...state,
                tgMessage: action.payload,
                isFilled: action.payload.length > 9 ? true : false
            };

        case type.FORM_UPDATE:
            return {
                ...state,
                emailForm: action.payload.form,
                isFilled: action.payload.filled
            };

        case type.TOGGLE_FUTURES:
            return {
                ...state,
                isFuturesOpen: !state.isFuturesOpen
            };

        case type.LOCATION_UPDATE:
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
