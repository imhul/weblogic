import { initStateUI as initState } from './initStateUI';
import { typesUI as types } from '../constants/types';

export default (state = initState, action) => {
    switch (action.type) {

        case types.INITIALIZE:
            return { 
                ...state,
                isInit: true,
            };

        case types.AUTHENTICATE:
            return { 
                ...state,
                isAuth: true,
                currentUser: action.payload,
            };

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

        

        default:
            return state;
    }
};