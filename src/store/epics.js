/* eslint-disable import/no-anonymous-default-export */
import { combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";
import { concat, of } from "rxjs";
import { general } from "./modules";

export const epics = ($action, $state, dependencies) => {
  return combineEpics(general.epics)($action, $state, dependencies).pipe(
    catchError((error, caught) =>
      concat(of(general.showError(error.message)), caught)
    )
  );
};
