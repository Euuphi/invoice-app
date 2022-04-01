import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateGroup,
    updateItem,
    updateInput,
} from "stores/actions/formInputActions";

const createFormContext = () => {
    const FormContext = createContext();

    const FormProvider = ({ children }) => {
        const dispatch = useDispatch();
        const formInputs = useSelector((state) => state.formInput);

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

        return (
            <FormContext.Provider value={{ onChangeHandler }}>
                {children}
            </FormContext.Provider>
        );
    };

    return { FormContext, FormProvider };
};

export const { FormContext, FormProvider } = createFormContext();
