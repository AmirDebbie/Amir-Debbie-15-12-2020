import { SET_INNER_WIDTH } from "../actionTypes";

const innerWidthState = 1000;

export default function innerWidthReducer(state = innerWidthState, action) {
  switch (action.type) {
    case SET_INNER_WIDTH:
      return action.payload;
    default:
      return state;
  }
}
