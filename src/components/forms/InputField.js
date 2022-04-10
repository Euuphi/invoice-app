import { useContext } from "react";
import { FormContext } from "context/FormContext";
// Styles
import styled, { css } from "styled-components";
import ParagraphMdStyle from "styles/text/ParagraphMdStyle";
import InputStyle from "styles/forms/InputStyle";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    grid-column: ${({ fullGridColumn }) => fullGridColumn && "1 / -1"};
    position: relative;

    ${({ error, label }) => {
        if (error && label) {
            return css`
                &::after {
                    content: "*";
                    color: #ec5757;
                    font-size: 2rem;
                    font-weight: 600;
                    position: absolute;
                    top: 0.3rem;
                    right: 0;
                }
            `;
        }
    }};
`;

const Label = styled.label`
    ${ParagraphMdStyle}

    ${({ error }) => {
        if (error) {
            return css`
                color: #ec5757;
            `;
        }
    }};
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

    // Styles when input is invalid
    ${({ error }) => {
        if (error) {
            return css`
                border-color: #ec5757;
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
    const { onChangeHandler, onFocusHandler, getValue, getInputError } =
        useContext(FormContext);
    // Retrieve input error information
    let inputValue = getValue(name, formGroup, formId);
    let inputError = disabled ? false : getInputError(name, formGroup, formId);

    return (
        <InputContainer
            error={inputError}
            label={label}
            fullGridColumn={fullGridColumn}>
            {label && (
                <Label htmlFor={name} error={inputError}>
                    {label}
                </Label>
            )}
            <Input
                autoComplete="off"
                disabled={disabled}
                error={inputError}
                name={name}
                type={inputType}
                inputPadding={inputPadding}
                onChange={(e) => onChangeHandler(e, formGroup, formId)}
                onFocus={onFocusHandler}
                placeholder={placeholder}
                min={min}
                step={step}
                value={value || inputValue}
                style={inputStyle}
            />
        </InputContainer>
    );
};

export default InputField;
