import { SET_INNER_WIDTH } from "../actionTypes";

export const setInnerWidth = (width) => {
  return {
    type: SET_INNER_WIDTH,
    payload: width,
  };
};
