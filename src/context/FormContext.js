import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateGroup,
    updateItem,
    updateInput,
} from "stores/actions/formInputActions";
import { getFormInputs } from "stores/selectors/formInputSelectors";
import { getFormErrors } from "stores/selectors/formSelector";

const createFormContext = () => {
    const FormContext = createContext();

    const FormProvider = ({ children }) => {
        const dispatch = useDispatch();
        const formInputs = useSelector((state) => getFormInputs(state));
        const errors = useSelector((state) => getFormErrors(state));

        // Update input field state value with user input
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

        // Retrieve value of input field from redux state
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

        // Function for validating form input fields. Returns an object oh which fields are still "required"
        const validate = (inputs) => {
            let errors = {};
            let errItems = [];

            for (const [name, value] of Object.entries(inputs)) {
                if (name === "id") {
                    errors.id = value;
                } else if (Array.isArray(value)) {
                    value.forEach((item) => {
                        errItems.push(validate(item));
                    });

                    errors[name] = errItems;
                } else if (typeof value === "object") {
                    errors[name] = validate(value);
                } else if (!value) {
                    errors[name] = "required";
                }
            }

            return errors;
        };

        // Retrives input error value and returns true if there is an error with input validation else returns false
        const getInputError = (name, formGroup, formId) => {
            if (!errors) {
                return false;
            }

            if (formGroup && typeof formId !== "undefined") {
                if (errors[formGroup]) {
                    const item = errors[formGroup].filter(
                        (item) => item.id === formId
                    )[0];

                    if (!item || !item[name]) {
                        return false;
                    }
                }
            } else if (formGroup) {
                if (!errors[formGroup] || !errors[formGroup][name]) {
                    return false;
                }
            } else {
                if (!errors[name]) {
                    return false;
                }
            }

            return true;
        };

        return (
            <FormContext.Provider
                value={{ onChangeHandler, getValue, validate, getInputError }}>
                {children}
            </FormContext.Provider>
        );
    };

    return { FormContext, FormProvider };
};

export const { FormContext, FormProvider } = createFormContext();
