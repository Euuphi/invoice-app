export const FETCH_INVOICES = "FETCH_INVOICES";

export const fetchInvoices = () => {
    return {
        type: FETCH_INVOICES,
    };
};

export const ADD_INVOICE = "ADD_INVOICE";

export const addInvoice = (invoice) => {
    return {
        type: ADD_INVOICE,
        payload: invoice,
    };
};

export const EDIT_INVOICE = "EDIT_INVOICE";

export const editInvoice = (id) => {
    return {
        type: EDIT_INVOICE,
        payload: id,
    };
};

export const DELETE_INVOICE = "DELETE_INVOICE";

export const deleteInvoice = (id) => {
    return {
        type: DELETE_INVOICE,
        payload: id,
    };
};
