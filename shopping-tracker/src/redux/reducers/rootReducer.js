import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingListReducer";
import currencyReducer from "./currencyReducer";
import innerWidthReducer from "./innerWidthReducer";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  currency: currencyReducer,
  innerWidth: innerWidthReducer,
});

export default rootReducer;
