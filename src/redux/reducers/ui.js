import { initState } from './initState';
import { types } from '../constants/types';

export default (state = initState, action) => {
    switch (action.type) {

        case types.HERO_ANIMATE:
            return { 
                ...state,
                heroStyle: { transform: "scale(1)", opacity: 1 },
            };
        
        case types.TICK:
            return { 
                ...state,
                parts: window.bgJSDom[0].bgJS.parts.array.length,
            };

        case types.GET_FPS:
            return { 
                ...state,
                fps: action.payload,
            };

        case types.LOAD_FOLIO:
            return { 
                ...state,
                loaded: true,
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

        case types.GO_TO_FOLIO:
            return {
                ...state,
                isHome: false,
            };

        case types.GO_TO_HOME:
            return {
                ...state,
                isHome: true,
            };


        default:
            return state;
    }
};