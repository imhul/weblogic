import { initStateUI as initState } from '../init/initStateUI';
import { typesUI as types } from '../constants/types';

export default (state = initState, action) => {
    switch (action.type) {
        case types.INITIALIZE:
            return {
                ...state,
                initialized: true
            };

        case types.AUTHENTICATE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    ip: action.payload
                }
            };

        case types.ROBOT_CHECK:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    isAuth: action.payload,
                    isRobot: !action.payload,
                    date: action.payload.challenge_ts
                }
            };

        case types.HERO_ANIMATE:
            return {
                ...state,
                heroStyle: { transform: 'scale(1)', opacity: 1 }
            };

        default:
            return state;
    }
};
