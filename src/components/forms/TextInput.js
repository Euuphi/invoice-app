import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "context/FormContext";
import ParagraphMdStyle from "styles/text/ParagraphMdStyle";
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
`;

const Label = styled.label`
    ${ParagraphMdStyle}
`;

const Input = styled.input`
    ${H3SecondaryStyle}

    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid ${({ theme }) => theme.form.border};
    border-radius: 0.4rem;
    height: 4.8rem;
    margin-bottom: 2.4rem;
    padding: 0 2rem;

    &:focus {
        border-color: ${({ theme }) => theme.form.focus};
        outline: none;
    }
`;

const TextInput = ({ name, label }) => {
    const { onChangeHandler } = useContext(FormContext);

    return (
        <InputContainer>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type="text" onChange={onChangeHandler} />
        </InputContainer>
    );
};

export default TextInput;
