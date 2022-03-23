import { createContext, useState } from "react";

const createFormContext = () => {
    const FormContext = createContext();

    const FormProvider = ({ children }) => {
        const [inputs, setInputs] = useState({});

        const onChangeHandler = (e) => {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
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
