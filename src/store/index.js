import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../reducers/index";

export default function configureStore(initialState) {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );
  return store;
}
