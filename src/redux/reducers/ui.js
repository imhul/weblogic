import { initState } from './initState';
import { types } from '../constants/action_types';

export default (state = initState, action) => {
  switch (action.type) {
    
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

    case types.HERO_ANIMATE:
      return { 
        ...state,
        heroStyle: { transform: "scale(1)", opacity: 1 },
      };

    case types.CHANGE_LOCATION:
      return { 
        ...state,
        location: action.payload, 
      };

    // case types.DROP_FIGURE:
    //   const { payload } = action;
    //   return {
    //     ...state,
    //     boards: [...state.boards, payload],
    //   };

    default:
      return state;
    }
};