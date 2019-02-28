import { types } from '../constants/types';

export function tick() {
  return (dispatch) => {
    dispatch({
      type: types.TICK,
    })
  }
};

export function getFPS(payload) {
  return (dispatch) => {
    dispatch({
      type: types.GET_FPS,
      payload: payload,
    })
  }
};

export function heroAnimate() {
  return (dispatch) => {
    dispatch({
      type: types.HERO_ANIMATE,
    })
  }
};

export function loadFolio() {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_FOLIO,
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

export function toFolio() {
  return (dispatch) => {
    dispatch({
      type: types.GO_TO_FOLIO,
    })
  }
};

export function toHome() {
  return (dispatch) => {
    dispatch({
      type: types.GO_TO_HOME,
    })
  }
};


