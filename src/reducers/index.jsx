import { dataHandler } from "./incDec";
import { combineReducers } from "redux";

// Combine All Reducers Here

const rootReducer = combineReducers({
  dataHandler,
});

export { rootReducer };
