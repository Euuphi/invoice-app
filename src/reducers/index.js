import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import preferences from "./preferencesReducer";
import filterOptions from "./filterOptionsReducer";
import form from "./formReducer";

export default combineReducers({ preferences, filterOptions, form });
