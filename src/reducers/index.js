import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import preferences from "./preferencesReducer";
import filterOptions from "./filterOptionsReducer";

export default combineReducers({ preferences, filterOptions });
