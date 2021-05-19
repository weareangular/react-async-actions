import { SHOW_ERROR, SHOW_LOADER, HIDE_LOADER } from "./types";
import { initialState } from "./state";

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ERROR:
      return {
        ...initialState,
        isError: true,
        error: payload.error,
        statusCode: payload.statusCode,
      };
    case SHOW_LOADER:
      return {
        ...initialState,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...initialState,
        isLoading: false,
      };
    default:
      return state;
  }
};
