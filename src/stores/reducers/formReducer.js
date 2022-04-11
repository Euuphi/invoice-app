import deleteKey from "functions/deleteKey";
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
        case formActions.RESET_INPUT_ERROR:
            return {
                ...state,
                errors: deleteKey(state.errors, action.payload.name),
            };
        case formActions.RESET_GROUP_INPUT_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.payload.group]: deleteKey(
                        state.errors[action.payload.group],
                        action.payload.name
                    ),
                },
            };
        case formActions.RESET_ITEM_INPUT_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.payload.group]: state.errors[
                        action.payload.group
                    ].map((item) => {
                        if (item.id === action.payload.id) {
                            return deleteKey(item, action.payload.name);
                        } else {
                            return item;
                        }
                    }),
                },
            };
        default:
            return state;
    }
};

export default form;
