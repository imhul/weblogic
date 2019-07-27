import { initStateUI as initState } from '../init/initStateUI';
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
                currentUser: {
                    ip: action.payload,
                    isAuth: state.currentUser.isAuth,
                    isRobot: state.currentUser.isRobot,
                    date: state.currentUser.date,
                }
            };

        case types.ROBOT_CHECK:
            return {
                ...state,
                currentUser: {
                    ip: state.currentUser.ip,
                    isAuth: action.payload.success,
                    isRobot: !action.payload.success,
                    date: action.payload.challenge_ts,
                }
            }

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