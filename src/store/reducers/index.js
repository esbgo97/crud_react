import { combineReducers } from "redux";
import contentReducer from "./content";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  content: contentReducer,
  ui: uiReducer,
});

export default rootReducer;
