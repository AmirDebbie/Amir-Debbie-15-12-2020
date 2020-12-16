import {
  TOGGLE_CURRENCY,
  REQUEST_CURRENCY_SUCCESS,
  REQUEST_CURRENCY_FAILURE,
} from "../actionTypes";

const currencyState = {
  current: "ILS",
  dif: 3.3,
  error: "",
};

const previousCurrency = localStorage.getItem("currency");
if (previousCurrency) {
  currencyState.current = previousCurrency;
}

export default function currencyReducer(state = currencyState, action) {
  switch (action.type) {
    case TOGGLE_CURRENCY:
      localStorage.setItem("currency", state.current === "ILS" ? "USD" : "ILS");
      return {
        ...state,
        current: state.current === "ILS" ? "USD" : "ILS",
      };
    case REQUEST_CURRENCY_SUCCESS:
      return { ...state, error: "", dif: action.payload };
    case REQUEST_CURRENCY_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
