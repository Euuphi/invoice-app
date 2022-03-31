import * as formInputActions from "../actions/formInputActions";

const initialState = {
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 1,
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
    },
    clientAddress: { street: "", city: "", postCode: "", country: "" },
    items: [],
    total: 0,
};

const formInput = (state = initialState, action) => {
    const {
        payload: { name, value, group, index },
    } = action;

    switch (action.type) {
        case formInputActions.UPDATE_INPUT:
            return { ...state, [name]: value };
        case formInputActions.UPDATE_GROUP:
            return {
                ...state,
                [group]: {
                    ...state[group],
                    [name]: value,
                },
            };
        case formInputActions.UPDATE_ITEM:
            // If input group DOES NOT already exist, create new array of object
            if (!state[group]) {
                return {
                    ...state,
                    [group]: [{ [name]: value }],
                };
            }
            // If input group DOES exists, update array with new input values
            else {
                return {
                    ...state,
                    // Reslice array to update relevant parts to update input values
                    [group]: [
                        ...state[group].slice(0, index),
                        {
                            ...state[group][index],
                            [name]: value,
                        },
                        ...state[group].slice(index + 1, state[group].length),
                    ],
                };
            }
    }
};

export default formInput;
