import { typesUX as types } from '../constants/types';

export function isHome() {
  return (dispatch) => {
    dispatch({
      type: types.IS_HOME,
    })
  }
};

export function tabMod(payload) {
  return (dispatch) => {
    dispatch({
      type: types.TAB_MODIFY,
      payload: payload,
    })
  }
};

export function langUpdate(payload) {
  return (dispatch) => {
    dispatch({
      type: types.CHANGE_LANG,
      payload: payload,
    })
  }
};

export function clickFX() {
  return (dispatch) => {
    dispatch({
      type: types.CLICK_FX,
      payload: payload,
    })
  }
};

export function showModal() {
  return (dispatch) => {
    dispatch({
      type: types.SHOW_MODAL,
    })
  }
};

export function closeModal() {
  return (dispatch) => {
    dispatch({
      type: types.CLOSE_MODAL,
    })
  }
};

export function showDesc() {
  return (dispatch) => {
    dispatch({
      type: types.SHOW_DESC,
    })
  }
};

export function hideDesc() {
  return (dispatch) => {
    dispatch({
      type: types.HIDE_DESC,
    })
  }
};

export function textareaUpdate(text) {
  return (dispatch) => {
    dispatch({
      type: types.TEXTAREA_UPDATE,
      payload: text,
    })
  }
};

export function toggleFutures() {
  return (dispatch) => {
    dispatch({
      type: types.TOGGLE_FUTURES,
    })
  }
};

export function updateHistory(payload) {
    return (dispatch) => {
        dispatch({
            type: types.HISTORY_UPDATE,
            payload: payload,
        })
    }
};


