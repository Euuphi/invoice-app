import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "context/FormContext";
import ParagraphMdStyle from "styles/text/ParagraphMdStyle";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
`;

const Label = styled.label`
    ${ParagraphMdStyle}
`;

const Input = styled.input``;

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
