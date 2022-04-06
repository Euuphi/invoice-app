import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateGroup,
    updateItem,
    updateInput,
} from "stores/actions/formInputActions";
import { getFormInputs } from "stores/selectors/formInputSelectors";

const createFormContext = () => {
    const FormContext = createContext();

    const FormProvider = ({ children }) => {
        const dispatch = useDispatch();
        const formInputs = useSelector((state) => getFormInputs(state));

        const onChangeHandler = (e, formGroup, formId) => {
            const name = e.target.name;
            const value = e.target.value;

            // If fromGroup and formId props are defined on input field
            if (formGroup && typeof formId !== "undefined") {
                dispatch(updateItem(name, value, formGroup, formId));
            } else if (formGroup) {
                dispatch(updateGroup(name, value, formGroup));
            } else {
                dispatch(updateInput(name, value));
            }

            console.log(formInputs);
        };

        const getValue = (name, formGroup, formId) => {
            let value;
            if (formGroup && typeof formId !== "undefined") {
                value = formInputs[formGroup].filter(
                    (item) => item.id === formId
                )[0][name];
            } else if (formGroup) {
                value = formInputs[formGroup][name];
            } else {
                value = formInputs[name];
            }

            return value;
        };

        return (
            <FormContext.Provider value={{ onChangeHandler, getValue }}>
                {children}
            </FormContext.Provider>
        );
    };

    return { FormContext, FormProvider };
};

export const { FormContext, FormProvider } = createFormContext();
