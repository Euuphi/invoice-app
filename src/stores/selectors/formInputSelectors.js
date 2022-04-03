import { createSelector } from "@reduxjs/toolkit";

export const getFormInputs = createSelector(
    (state) => state.formInput,
    (formInputs) => formInputs
);
