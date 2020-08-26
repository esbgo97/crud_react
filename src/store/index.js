import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
store.subscribe((state) => {
  console.log("changed state:", state);
});

export default store;
