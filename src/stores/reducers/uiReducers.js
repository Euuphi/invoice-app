import * as uiActions from "stores/actions/uiActions";

const initialState = { pageScroll: true };

const ui = (state = initialState, action) => {
    switch (action.type) {
        case uiActions.PAGE_SCROLL_ON:
            return { ...state, pageScroll: true };
        case uiActions.PAGE_SCROLL_OFF:
            return { ...state, pageScroll: false };
        default:
            return state;
    }
};

export default ui;
