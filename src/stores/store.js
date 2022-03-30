import { createStore } from "@reduxjs/toolkit";
import rootReducer from "stores/reducers";

let initialState = {};

const store = createStore(rootReducer, initialState);

export default store;
