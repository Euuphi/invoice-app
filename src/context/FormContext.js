import { createContext, useState } from "react";

const createFormContext = () => {
    const FormContext = createContext();

    const FormProvider = ({ children }) => {
        const [inputs, setInputs] = useState({});

        const onChangeHandler = (e, formGroup, formItem) => {
            const inputName = e.target.name;
            const inputValue = e.target.value;

            // If fromGroup and formIndex props are defined on input field
            if (formGroup && typeof formItem !== "undefined") {
                setInputs(() => {
                    // If input group DOES NOT already exist, create new array of object
                    if (!inputs[formGroup]) {
                        return {
                            ...inputs,
                            [formGroup]: [{ [inputName]: inputValue }],
                        };
                    }
                    // If input group DOES exists, update array with new input values
                    else {
                        return {
                            ...inputs,
                            // Reslice array to update relevant parts to update input values
                            [formGroup]: [
                                ...inputs[formGroup].slice(0, formItem),
                                {
                                    ...inputs[formGroup][formItem],
                                    [inputName]: inputValue,
                                },
                                ...inputs[formGroup].slice(
                                    formItem + 1,
                                    inputs[formGroup].length
                                ),
                            ],
                        };
                    }
                });
            } else if (formGroup) {
                setInputs({
                    ...inputs,
                    [formGroup]: {
                        ...inputs[formGroup],
                        [inputName]: inputValue,
                    },
                });
            } else {
                setInputs({ ...inputs, [inputName]: inputValue });
            }

            console.log(inputs);
        };

        return (
            <FormContext.Provider
                value={{ inputs, setInputs, onChangeHandler }}>
                {children}
            </FormContext.Provider>
        );
    };

    return { FormContext, FormProvider };
};

export const { FormContext, FormProvider } = createFormContext();
