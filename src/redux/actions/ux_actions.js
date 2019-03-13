import { typesUX as types } from '../constants/types';

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

export function updateHistory(payload) {
    return (dispatch) => {
        dispatch({
            type: types.HISTORY_UPDATE,
            payload: payload,
        })
    }
};


