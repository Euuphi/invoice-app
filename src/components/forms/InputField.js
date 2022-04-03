import { useContext } from "react";
import styled, { css } from "styled-components";
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

    // Styles when input is disabled
    ${({ disabled }) => {
        if (disabled) {
            return css`
                border: none;
                color: ${({ theme }) => theme.form.itemTotalText};
            `;
        }
    }}

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
 * @param {boolean} disabled - Control if input field is disabled
 * @param {string} formGroup - Name of object to group input into
 * @param {number} formId - Id number for item in the form group
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
    disabled,
    formGroup,
    formId,
    fullGridColumn,
    inputPadding,
    inputStyle,
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
                autoComplete="off"
                disabled={disabled}
                name={name}
                type={inputType}
                inputPadding={inputPadding}
                onChange={(e) => onChangeHandler(e, formGroup, formId)}
                placeholder={placeholder}
                min={min}
                step={step}
                value={value}
                style={inputStyle}
            />
        </InputContainer>
    );
};

export default InputField;
