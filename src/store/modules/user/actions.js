import { UPDATE_USER, CLEAR_USER } from "./types";

export const updateUser = (payload) => ({ type: UPDATE_USER, payload });

export const clearUser = () => ({ type: CLEAR_USER });
