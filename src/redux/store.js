import { applyMiddleware, createStore } from "redux";

import { combineReducers } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  weatherReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
