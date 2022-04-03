export const UPDATE_INPUT = "UPDATE_INPUT";

export const updateInput = (name, value) => {
    return {
        type: UPDATE_INPUT,
        payload: { name, value },
    };
};

export const UPDATE_GROUP = "UPDATE_GROUP";

export const updateGroup = (name, value, group) => {
    return {
        type: UPDATE_GROUP,
        payload: { name, value, group },
    };
};

export const ADD_ITEM = "ADD_ITEM";

export const addItem = (group, id) => {
    return {
        type: ADD_ITEM,
        payload: { group, id },
    };
};

export const UPDATE_ITEM = "UPDATE_ITEM";

export const updateItem = (name, value, group, id) => {
    return {
        type: UPDATE_ITEM,
        payload: { name, value, group, id },
    };
};

export const DELETE_ITEM = "DELETE_ITEM";

export const deleteItem = (group, id) => {
    return {
        type: DELETE_ITEM,
        payload: { group, id },
    };
};

export const UPDATE_ITEM_TOTAL = "UPDATE_ITEM_TOTAL";

export const updateItemTotal = (group, id, total) => {
    return {
        type: UPDATE_ITEM_TOTAL,
        payload: { group, id, total },
    };
};

export const UPDATE_TOTAL = "UPDATE_TOTAL";

export const updateTotal = (total) => {
    return {
        type: UPDATE_TOTAL,
        payload: { total },
    };
};
