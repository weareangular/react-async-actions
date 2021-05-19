import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { reducers } from "./reducers";
import { epics } from "./epics";
import { DBClient } from "./repositories";
export const configureStore = () => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { DBClient },
  });

  const store = createStore(reducers, applyMiddleware(epicMiddleware));

  epicMiddleware.run(epics);
  return { store };
};
