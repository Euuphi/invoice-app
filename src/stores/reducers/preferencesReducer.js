import * as preferencesActions from "stores/actions/preferencesActions";

const initialState = { darkThemeEnabled: false };

const preferences = (state = initialState, action) => {
    switch (action.type) {
        case preferencesActions.TOGGLE_DARKTHEME:
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
        default:
            return state;
    }
};

export default preferences;
