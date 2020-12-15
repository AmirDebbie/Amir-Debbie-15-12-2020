import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/rootReducer";

const store = createStore(
  reducer
  // composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

export default store;
