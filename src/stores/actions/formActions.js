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

export const setErrors = (errors) => {
    return {
        type: SET_INPUT_ERRORS,
        payload: errors,
    };
};

export const RESET_INPUT_ERRORS = "RESET_INPUT_ERRORS";

export const resetErrors = () => {
    return {
        type: RESET_INPUT_ERRORS,
    };
};
