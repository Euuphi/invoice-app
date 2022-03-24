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

const InputField = ({
    inputType,
    name,
    label,
    placeholder,
    fullGridColumn,
}) => {
    const { onChangeHandler } = useContext(FormContext);

    return (
        <InputContainer fullGridColumn={fullGridColumn}>
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                type={inputType}
                onChange={onChangeHandler}
                placeholder={placeholder}
            />
        </InputContainer>
    );
};

export default InputField;
