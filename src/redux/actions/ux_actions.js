import { typesUX as type } from '../constants/types';

export function tabMod(payload) {
    return dispatch => {
        dispatch({
            type: type.TAB_MODIFY,
            payload: payload
        });
    };
}

export function langUpdate(payload) {
    return dispatch => {
        dispatch({
            type: type.CHANGE_LANG,
            payload: payload
        });
    };
}

export function clickFX() {
    return dispatch => {
        dispatch({
            type: type.CLICK_FX,
            payload: payload
        });
    };
}

export function showModal() {
    return dispatch => {
        dispatch({
            type: type.SHOW_MODAL
        });
    };
}

export function closeModal() {
    return dispatch => {
        dispatch({
            type: type.CLOSE_MODAL
        });
    };
}

export function showDesc() {
    return dispatch => {
        dispatch({
            type: type.SHOW_DESC
        });
    };
}

export function hideDesc() {
    return dispatch => {
        dispatch({
            type: type.HIDE_DESC
        });
    };
}

export function textareaUpdate(text) {
    return dispatch => {
        dispatch({
            type: type.TEXTAREA_UPDATE,
            payload: text
        });
    };
}

export function toggleFutures() {
    return dispatch => {
        dispatch({
            type: type.TOGGLE_FUTURES
        });
    };
}

export function updateLocation(payload) {
    return dispatch => {
        dispatch({
            type: type.LOCATION_UPDATE,
            payload: payload
        });
    };
}
