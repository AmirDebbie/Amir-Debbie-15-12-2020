import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingListReducer";
import currencyReducer from "./currencyReducer";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  currency: currencyReducer,
});

export default rootReducer;
