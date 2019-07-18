import { typesUI as types } from '../constants/types';

export function initialize() {
  return (dispatch) => {
    dispatch({
      type: types.INITIALIZE,
    })
  }
};

export function authenticate(ip) {
  return (dispatch) => {
    dispatch({
      type: types.AUTHENTICATE,
      payload: ip,
    })
  }
};

export function getRobot(payload) {
  return (dispatch) => {
    dispatch({
      type: types.ROBOT_CHECK,
      payload: payload,
    })
  }
};

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
