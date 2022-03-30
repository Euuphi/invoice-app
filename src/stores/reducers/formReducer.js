import * as formActions from "stores/actions/formActions";

const initialState = { display: false };

const form = (state = initialState, action) => {
    switch (action.type) {
        case formActions.CREATE_NEW_INVOICE:
            return { ...state, display: true };
        case formActions.DISCARD_NEW_INVOICE:
            return { ...state, display: false };
        default:
            return state;
    }
};

export default form;
