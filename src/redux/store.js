import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (process.env.NODE_ENV !== "production") {
  const { createLogger } = require("redux-logger");
  const logger = createLogger({
    collapsed: true
  });
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

const rootSagaTask = sagaMiddleware.run(rootSaga);

// rootSagaTask.done.catch(error => console.log(error));
