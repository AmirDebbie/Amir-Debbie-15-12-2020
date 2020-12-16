import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingListReducer";
import currencyReducer from "./currencyReducer";
import innerWidthReducer from "./innerWidthReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  currency: currencyReducer,
  innerWidth: innerWidthReducer,
  theme: themeReducer,
});

export default rootReducer;
