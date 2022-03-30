// Create new invoice form
export const CREATE_NEW_INVOICE = "CREATE_NEW_INVOICE";

export const createNewInvoice = () => {
    return {
        type: CREATE_NEW_INVOICE,
    };
};

// Discard current invoice form
export const DISCARD_NEW_INVOICE = "DISCARD_NEW_INVOICE";

export const discardNewInvoice = () => {
    return {
        type: DISCARD_NEW_INVOICE,
    };
};
