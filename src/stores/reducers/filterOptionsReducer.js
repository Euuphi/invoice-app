import * as filterActions from "stores/actions/filterActions";

const initialState = { paid: "paid", pending: "pending", draft: "draft" };

const filterOptions = (state = initialState, action) => {
    // Toggle state of object key between input string or an empty string
    const toggleOption = (option) => {
        return state[option] === option ? "" : option;
    };

    switch (action.type) {
        case filterActions.FILTER_PAID:
            // Toggle state.paid between "paid" or "" (empty string)
            return { ...state, paid: toggleOption("paid") };
        case filterActions.FILTER_PENDING:
            return {
                ...state,
                pending: toggleOption("pending"),
            };
        case filterActions.FILTER_DRAFT:
            return { ...state, draft: toggleOption("draft") };
        default:
            return state;
    }
};

export default filterOptions;
