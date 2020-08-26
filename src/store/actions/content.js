import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../types";

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });
export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });
export const editItem = (item) => ({ type: EDIT_ITEM, payload: item });
