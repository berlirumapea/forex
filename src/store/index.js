import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { currencyReducers } from "../reducers/currencyReducers";
const middleware = [thunk];

const initialState = {
  rates: [],
  usd_value: 10.0
};

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware)
//   // other store enhancers if any
// );

const store = createStore(
  currencyReducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
