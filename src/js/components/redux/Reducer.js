import { combineReducers } from "redux"
//import other reducer actions here
import test from './actions/test';
//we will have multiple actions in redux and would like to combine them using combineReducers.
const applicationReducer = combineReducers({
  test
});

const rootReducer = (state, action) => {
  return applicationReducer(state, action)
};

//we need to export this so we can pass these reducer functions into createStore.
export default rootReducer;