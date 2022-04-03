import { createSelector } from "@reduxjs/toolkit";

export const getFormInputs = createSelector(
    (state) => state.formInput,
    (formInputs) => formInputs
);

export const getItemById = createSelector(
    (state) => state.formInput.items,
    (state, id) => id,
    (items, id) => items.filter((item) => item.id === id)[0]
);
