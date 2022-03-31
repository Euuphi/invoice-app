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
        payload: { group, name, value },
    };
};

export const UPDATE_INDEX = "UPDATE_INDEX";

export const updateIndex = (name, value, group, index) => {
    return {
        type: UPDATE_INDEX,
        payload: { name, value, group, index },
    };
};
