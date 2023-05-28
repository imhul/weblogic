import { initStateAuth as initState } from '../init/initStateAuth';
import { typesAuth as type } from '../constants/types';

export default function (state = initState, action) {
    switch (action.type) {
        case type.IPIFY:
            const sysLang =
                navigator.language ||
                navigator.userLanguage ||
                window.navigator.userLanguage ||
                window.navigator.language;
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    ip: action.payload.ip,
                    system: action.payload.system,
                    role: 'guest',
                    lang:
                        sysLang === 'uk-UA' || sysLang === 'ru-RU'
                            ? 'ukrainian'
                            : 'english'
                }
            };

        case type.ROBOT_CHECK:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    isRobot: !action.payload,
                    role: 'human',
                    lastRobotCheck: action.payload.challenge_ts
                }
            };

        case type.USER_LOGIN:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    isAuth: true
                }
            };

        case type.USER_LOGOUT:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    isAuth: false
                }
            };

        case type.USER_REGISTER:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser
                    // TODO: add user to usersDB and to state.users
                }
            };

        case type.USER_FORGOT_PASSWORD:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser
                    // TODO: ?
                }
            };

        case type.USER_RESET_PASSWORD:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    pass: action.payload
                }
            };

        case type.TOGGLE_REMEMBER_ME:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    rememberMe: action.payload
                }
            };

        case type.ADD_NEW_USER:
            // TODO: check if user already exists
            return {
                users: [...state.users, action.payload.user]
            };

        case type.GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };

        case type.UPDATE_USER: {
            const updatedUser = { ...action.payload.user };
            return {
                users: [...state.users].map(user => {
                    if (user.id === updatedUser.id) {
                        return updatedUser;
                    } else return user;
                })
            };
        }

        case type.DELETE_USER: {
            const { id } = action.payload;
            return {
                users: [...state.users].filter(user => user.id !== id)
            };
        }

        default:
            return state;
    }
}

// from actions directory

// export const fetchUsersFailure = errors => ({
//     type: type.FETCH_USERS_FAILURE,
//     payload: { errors }
// });

// // users

// export const createUser = user => ({
//     type: type.ADD_NEW_USER,
//     payload: { user }
// });

// export const updateUser = user => ({
//     type: type.UPDATE_USER,
//     payload: { user }
// });

// export const deleteUser = id => ({
//     type: type.DELETE_USER,
//     payload: { id }
// });
