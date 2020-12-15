import {
  TOGGLE_CURRENCY,
  REQUEST_CURRENCY_FAILURE,
  REQUEST_CURRENCY_SUCCESS,
} from "../actionTypes";

export const toggleCurrency = () => {
  return {
    type: TOGGLE_CURRENCY,
  };
};

export const requestCurrencySuccess = (dif) => {
  return {
    type: REQUEST_CURRENCY_SUCCESS,
    payload: dif,
  };
};

export const requestCurrencyFailure = (error) => {
  return {
    type: REQUEST_CURRENCY_FAILURE,
    payload: error,
  };
};
