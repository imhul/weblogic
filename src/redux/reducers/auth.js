import { initStateAuth as initState } from '../init/initStateAuth';
import { authTypes as type } from '../constants/types';
// utils
import { SYSTEM_LANG } from '../../utils/config';

export default function (state = initState, action) {
    switch (action.type) {
        case type.IPIFY:
            const initIPs = [
                ...state.currentUser.ips,
                action.payload.ip
            ];
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    ip: action.payload.ip,
                    system: action.payload.system,
                    ips: [...new Set(initIPs)]
                }
            };

        case type.SET_USER_IP:
            const loggedInIPs = [
                ...state.currentUser.ips,
                action.payload
            ];
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    ip: action.payload,
                    ips: [...new Set(loggedInIPs)]
                }
            };

        case type.GUEST_INIT:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    role: 'guest',
                    lang:
                        SYSTEM_LANG === 'uk-UA' ||
                        SYSTEM_LANG === 'ru-RU'
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
                    lastRobotCheck: `${Date.now()}`,
                    lastGoogleCheck: action.payload.challenge_ts
                }
            };

        case type.GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };

        case type.USER_EMAIL_AUTO_UPDATE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    email: action.payload
                }
            };

        case type.USER_NAME_AUTO_UPDATE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: action.payload
                }
            };

        case type.USER_SUBJECT_AUTO_UPDATE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    subject: action.payload
                }
            };

        case type.USER_MAIL_MESSAGE_AUTO_UPDATE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    message: action.payload
                }
            };

        case type.USER_TG_MESSAGE_AUTO_UPDATE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    tgMessage: action.payload
                }
            };

        case type.SET_USER_ID:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    userId: action.payload
                }
            };

        case type.USER_AUTH:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    ...action.payload,
                    isAuth: true,
                    isRobot: false,
                    ips: [...new Set(action.payload.ips)],
                    lastSignInTime: `${Date.now()}`
                }
            };

        case type.USER_LOGOUT:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    isAuth: false,
                    lastSignOutTime: `${Date.now()}`
                }
            };

        case type.USER_REGISTER:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    ...action.payload,
                    isAuth: true,
                    isRobot: false
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

        case type.USER_CHANGE_PASSWORD:
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

        case type.USER_UPDATE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    ...action.payload
                }
            };

        case type.USER_DELETE:
            const { id } = action.payload;
            return {
                ...state
            };

        default:
            return state;
    }
}
