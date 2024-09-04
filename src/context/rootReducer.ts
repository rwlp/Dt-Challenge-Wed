import { combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./searchSlicer";


const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;