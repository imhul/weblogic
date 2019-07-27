import { typeUI as type } from '../constants/types';

export function initialize() {
  return (dispatch) => {
    dispatch({
      type: type.INITIALIZE,
    })
  }
};

export function authenticate(ip) {
  return (dispatch) => {
    dispatch({
      type: type.AUTHENTICATE,
      payload: ip,
    })
  }
};

export function getRobot(payload) {
  return (dispatch) => {
    dispatch({
      type: type.ROBOT_CHECK,
      payload: payload,
    })
  }
};

export function tick() {
  return (dispatch) => {
    dispatch({
      type: type.TICK,
    })
  }
};

export function getFPS(payload) {
  return (dispatch) => {
    dispatch({
      type: type.GET_FPS,
      payload: payload,
    })
  }
};

export function heroAnimate() {
  return (dispatch) => {
    dispatch({
      type: type.HERO_ANIMATE,
    })
  }
};

export function loadFolio() {
  return (dispatch) => {
    dispatch({
      type: type.LOAD_FOLIO,
    })
  }
};
