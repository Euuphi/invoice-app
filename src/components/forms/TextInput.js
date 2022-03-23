import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "context/FormContext";
import ParagraphMdStyle from "styles/text/ParagraphMdStyle";
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";

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
    ${H3SecondaryStyle}

    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid ${({ theme }) => theme.form.border};
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.text.primary};
    height: 4.8rem;
    margin-bottom: 2.4rem;
    padding: 0 2rem;
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.form.focus};
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.form.placeholder};
    }
`;

const TextInput = ({ name, label, placeholder, fullGridColumn }) => {
    const { onChangeHandler } = useContext(FormContext);

    return (
        <InputContainer fullGridColumn={fullGridColumn}>
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                type="text"
                onChange={onChangeHandler}
                placeholder={placeholder}
            />
        </InputContainer>
    );
};

export default TextInput;
