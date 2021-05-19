import { UPDATE_USER, CLEAR_USER } from "./types";
import { initialState } from "./state";

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      return {
        ...state,
        ...payload,
      };
    case CLEAR_USER:
      return { ...initialState };
    default:
      return state;
  }
};
