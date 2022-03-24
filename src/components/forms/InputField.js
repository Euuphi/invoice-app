import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "context/FormContext";
import ParagraphMdStyle from "styles/text/ParagraphMdStyle";
import InputStyle from "styles/forms/InputStyle";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    grid-column: ${({ fullGridColumn }) => fullGridColumn && "1 / -1"};
`;

const Label = styled.label`
    ${ParagraphMdStyle}
`;

const Input = styled.input`
    ${InputStyle}
`;

/**
 * Create input field with label element
 *
 * @param {string} inputType - Type for input field
 * @param {string} name - Name for input field
 * @param {string} label - Text for label element
 * @param {string} placeholder - Placeholder for input field
 * @param {string} fullGridColumn - Set element to expand entire width of grid contianer
 * @param {string} min - Set min value for number input
 * @param {string} step - Set step for number input
 * @return {JSX} Label and input elements
 */
const InputField = ({
    inputType,
    name,
    label,
    placeholder,
    fullGridColumn,
    min,
    step,
}) => {
    const { onChangeHandler } = useContext(FormContext);

    return (
        <InputContainer fullGridColumn={fullGridColumn}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
                name={name}
                type={inputType}
                onChange={onChangeHandler}
                placeholder={placeholder}
                min={min}
                step={step}
            />
        </InputContainer>
    );
};

export default InputField;
