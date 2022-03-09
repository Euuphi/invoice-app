import { createStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

let initialState = {};

const store = createStore(reducer, initialState);

export default store;
