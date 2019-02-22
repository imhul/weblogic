import { types } from '../constants/action_types';

export function changeLocation(location) {
  console.info("action location: ", location );
  return (dispatch) => {
    dispatch({
      type: types.CHANGE_LOCATION,
      payload: location,
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
      payload: payload
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

// export function dropFigure(figureArr) {
//   return (dispatch, getState) => {
//     const { ui } = getState();
//     return dispatch({
//       type: types.DROP_FIGURE,
//       payload: {
//         board:  `${ui.location}`,
//         id:     figureArr[0],
//         x:      figureArr[1],
//         y:      figureArr[2],
//       }
//     })
//   }
// };
