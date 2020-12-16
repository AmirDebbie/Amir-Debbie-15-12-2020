import { SET_LIST } from "../actionTypes";

export const setList = (list) => {
  console.log(list);
  return {
    type: SET_LIST,
    payload: list,
  };
};
