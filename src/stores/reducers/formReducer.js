import * as formActions from "stores/actions/formActions";

const initialState = { display: false };

const form = (state = initialState, action) => {
    switch (action.type) {
        case formActions.SHOW_FORM:
            return { ...state, display: true };
        case formActions.HIDE_FORM:
            return { ...state, display: false };
        default:
            return state;
    }
};

export default form;
