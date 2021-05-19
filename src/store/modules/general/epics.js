import { ofType, combineEpics } from "redux-observable";
import { catchError, mergeMap } from "rxjs/operators";
import { concat, from, merge, of } from "rxjs";
import { GENERAL_CONFIG_SERVICE } from "./types";
import { updateUser, clearUser } from "../user/actions";
import { hideLoader, showError, showLoader } from "./actions";

const fetchGeneralConfigEpic = (actions$, state$, { DBClient }) => {
  return actions$.pipe(
    ofType(GENERAL_CONFIG_SERVICE),
    mergeMap(() =>
      merge(
        of(showLoader(), clearUser()),
        from(DBClient.getGeneralConfig()).pipe(
          mergeMap((data) => concat(of(updateUser(data)), of(hideLoader()))),
          catchError((error) =>
            concat(of(clearUser(), showError(error.message)))
          )
        )
      )
    )
  );
};

export const epics = combineEpics(fetchGeneralConfigEpic);
