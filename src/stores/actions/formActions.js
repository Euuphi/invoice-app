// Create new invoice form
export const SHOW_FORM = "SHOW_FORM";

export const showForm = () => {
    return {
        type: SHOW_FORM,
    };
};

// Discard current invoice form
export const HIDE_FORM = "HIDE_FORM";

export const hideForm = () => {
    return {
        type: HIDE_FORM,
    };
};

export const SET_SUBMITTING = "SET_SUBMITTING";

export const setSubmitting = (isSubmitting) => {
    return {
        type: SET_SUBMITTING,
        payload: { isSubmitting },
    };
};

export const SET_INPUT_ERRORS = "SET_INPUT_ERRORS";

export const setInputErrors = (errors) => {
    return {
        type: SET_INPUT_ERRORS,
        payload: errors,
    };
};

export const RESET_ALL_INPUT_ERRORS = "RESET_ALL_INPUT_ERRORS";

export const resetAllInputErrors = () => {
    return {
        type: RESET_ALL_INPUT_ERRORS,
    };
};

export const RESET_INPUT_ERROR = "RESET_INPUT_ERROR";

export const resetInputError = (name) => {
    return {
        type: RESET_INPUT_ERROR,
        payload: { name },
    };
};

export const RESET_GROUP_INPUT_ERROR = "RESET_GROUP_INPUT_ERROR";

export const resetGroupInputError = (name, group) => {
    return {
        type: RESET_GROUP_INPUT_ERROR,
        payload: { name, group },
    };
};

export const RESET_ITEM_INPUT_ERROR = "RESET_ITEM_INPUT_ERROR";

export const resetItemInputError = (name, group, id) => {
    return {
        type: RESET_ITEM_INPUT_ERROR,
        payload: { name, group, id },
    };
};
