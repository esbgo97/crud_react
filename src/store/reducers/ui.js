import { SHOW_MODAL, HIDE_MODAL } from "../types";
import { INITIAL_STATE } from "../../utils/constants";

const uiReducer = (state = INITIAL_STATE.ui, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { showModal: true };
    case HIDE_MODAL:
      return { showModal: false };
    default:
      return state;
  }
};

export default uiReducer;
