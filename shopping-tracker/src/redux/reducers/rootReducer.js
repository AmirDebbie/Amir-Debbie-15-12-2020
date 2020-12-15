import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingListReducer";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});

export default rootReducer;
