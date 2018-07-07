import { combineReducers } from "redux";
import TestReducers from "Reducers/test.reducer";

const rootReducer = combineReducers({
  testReducers: TestReducers,
});
export default rootReducer;
