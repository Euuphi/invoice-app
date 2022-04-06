import * as formInputActions from "../actions/formInputActions";
import generateID from "functions/generateID";

const initialState = {
    id: generateID(),
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 1,
    clientName: "",
    clientEmail: "",
    status: "pending",
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
    switch (action.type) {
        case formInputActions.GENERATE_NEW_ID:
            return {
                ...state,
                id: generateID(),
            };
        case formInputActions.UPDATE_INPUT:
            return { ...state, [action.payload.name]: action.payload.value };
        case formInputActions.UPDATE_GROUP:
            return {
                ...state,
                [action.payload.group]: {
                    ...state[action.payload.group],
                    [action.payload.name]: action.payload.value,
                },
            };
        case formInputActions.ADD_ITEM:
            return {
                ...state,
                [action.payload.group]: [
                    ...state[action.payload.group],
                    { id: action.payload.id },
                ],
            };
        case formInputActions.UPDATE_ITEM:
            return {
                ...state,
                [action.payload.group]: state[action.payload.group].map(
                    (item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                [action.payload.name]: action.payload.value,
                            };
                        } else {
                            return item;
                        }
                    }
                ),
            };
        case formInputActions.DELETE_ITEM:
            return {
                ...state,
                [action.payload.group]: state[action.payload.group].filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case formInputActions.UPDATE_ITEM_TOTAL:
            return {
                ...state,
                [action.payload.group]: state[action.payload.group].map(
                    (item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                total: action.payload.total,
                            };
                        } else {
                            return item;
                        }
                    }
                ),
            };
        case formInputActions.UPDATE_TOTAL:
            return {
                ...state,
                total: action.payload.total,
            };
        case formInputActions.RESET_INPUTS:
            return initialState;
        default:
            return state;
    }
};

export default formInput;
