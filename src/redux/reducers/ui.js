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

        default:
            return state;
    }
};