import * as formActions from "stores/actions/formActions";

const initialState = { display: false, errors: {} };

const form = (state = initialState, action) => {
    switch (action.type) {
        case formActions.SHOW_FORM:
            return { ...state, display: true };
        case formActions.HIDE_FORM:
            return { ...state, display: false };
        case formActions.SET_ERRORS: {
            return { ...state, errors: action.payload };
        }
        default:
            return state;
    }
};

export default form;
