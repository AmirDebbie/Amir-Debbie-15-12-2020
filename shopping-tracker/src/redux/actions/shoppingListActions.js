import { SET_LIST } from "../actionTypes";

export const setList = (list) => {
  return {
    type: SET_LIST,
    payload: list,
  };
};
