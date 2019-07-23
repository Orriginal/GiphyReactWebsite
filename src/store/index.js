import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import GiphyReducer from "./reducer";

// combine multiple reducers into one big object
const reducers = combineReducers({ giphy: GiphyReducer });

export function configureStore(initialState = {composeWithDevTools}) {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}

export { reducers };

export const store = configureStore();
