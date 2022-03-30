import * as uiActions from "stores/actions/uiActions";

const initialState = { pageScroll: true };

const ui = (state = initialState, action) => {
    switch (action.type) {
        case uiActions.TOGGLE_PAGE_SCROLL:
            return { ...state, pageScroll: !state.pageScroll };
        default:
            return state;
    }
};

export default ui;
