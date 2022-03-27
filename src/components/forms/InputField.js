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

    padding: ${({ inputPadding }) => inputPadding};

    /* Hide  arrows for number input */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

/**
 * Create input field with label element
 *
 * @param {string} formGroup - Name of object to group input into
 * @param {string} fullGridColumn - Set element to expand entire width of grid contianer
 * @param {string} inputPadding - Padding for input
 * @param {string} inputType - Type for input field
 * @param {string} label - Text for label element
 * @param {string} min - Set min value for number input
 * @param {string} name - Name for input field
 * @param {string} placeholder - Placeholder for input field
 * @param {string} step - Set step for number input
 * @param {string} value - Value field for input element
 * @return {JSX} Label and input elements
 */
const InputField = ({
    formGroup,
    fullGridColumn,
    inputPadding,
    inputType,
    label,
    min,
    name,
    placeholder,
    step,
    value,
}) => {
    const { onChangeHandler } = useContext(FormContext);

    return (
        <InputContainer fullGridColumn={fullGridColumn}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
                name={name}
                type={inputType}
                inputPadding={inputPadding}
                onChange={(e) => onChangeHandler(e, formGroup)}
                placeholder={placeholder}
                min={min}
                step={step}
                value={value}
            />
        </InputContainer>
    );
};

export default InputField;
