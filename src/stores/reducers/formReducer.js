import * as formActions from "stores/actions/formActions";

const initialState = { display: false, errors: {}, isSubmitting: false };

const form = (state = initialState, action) => {
    switch (action.type) {
        case formActions.SHOW_FORM:
            return { ...state, display: true };
        case formActions.HIDE_FORM:
            return { ...state, display: false };
        case formActions.SET_SUBMITTING:
            return { ...state, isSubmitting: action.payload.isSubmitting };
        case formActions.SET_INPUT_ERRORS:
            return { ...state, errors: action.payload };
        case formActions.RESET_ALL_INPUT_ERRORS:
            return { ...state, errors: {} };
        default:
            return state;
    }
};

export default form;
