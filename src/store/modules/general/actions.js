import {
  SHOW_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
  GENERAL_CONFIG_SERVICE,
} from "./types";

export const showError = (error = "", statusCode = 500) => ({
  type: SHOW_ERROR,
  payload: {
    error,
    statusCode,
  },
});

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const fetchData = () => ({ type: GENERAL_CONFIG_SERVICE });
