import { createContext, useState } from "react";

const createFormContext = () => {
    const FormContext = createContext();

    const FormProvider = ({ children }) => {
        const [inputs, setInputs] = useState({});

        const onChangeHandler = (e, formGroup) => {
            const inputName = e.target.name;
            const inputValue = e.target.value;

            if (formGroup) {
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
