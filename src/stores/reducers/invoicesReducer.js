import * as invoiceActions from "stores/actions/invoicesActions";
import data from "data/data.json";

const initialState = [];

const invoicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case invoiceActions.FETCH_INVOICES:
            const invoices = JSON.parse(JSON.stringify(data));
            return [...invoices];
        default:
            return state;
    }
};

export default invoicesReducer;
