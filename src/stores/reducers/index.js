import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import ui from "./uiReducers";
import preferences from "./preferencesReducer";
import filterOptions from "./filterOptionsReducer";
import form from "./formReducer";
import formInput from "./formInputReducer";
import invoices from "./invoicesReducer";

export default combineReducers({
    invoices,
    filterOptions,
    form,
    formInput,
    preferences,
    ui,
});
