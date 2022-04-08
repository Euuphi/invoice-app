import { createSelector } from "@reduxjs/toolkit";

export const getFormErrors = createSelector(
    (state) => state.form.errors,
    (errors) => errors
);
