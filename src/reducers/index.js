import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import preferences from "./preferencesReducer";
import filterOptions from "./filterOptionsReducer";
import form from "./formReducer";
import invoices from "./invoicesReducer";

export default combineReducers({ invoices, filterOptions, form, preferences });
