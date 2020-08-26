import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../types";
import { INITIAL_STATE } from "../../utils/constants";

const contentReducer = (state = INITIAL_STATE.content, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((u) =>
          u.id === action.payload ? { ...u, username: action.payload } : u
        ),
      };
    case DELETE_ITEM:
      return { ...state, items: state.items.filter((u) => u.id === action.payload) };
    default:
      return state;
  }
};

export default contentReducer;
