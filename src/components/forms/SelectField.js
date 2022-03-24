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

const Select = styled.select`
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
`;

const SelectField = ({ name, label, fullGridColumn }) => {
    // TODO: Create custom select and dropdown options
    const { onChangeHandler } = useContext(FormContext);

    return (
        <InputContainer fullGridColumn={fullGridColumn}>
            <Label htmlFor={name}>{label}</Label>
            <Select name={name}>
                <option>Net 1 Days</option>
                <option>Net 7 Days</option>
                <option>Net 14 Days</option>
                <option>Net 30 Days</option>
            </Select>
        </InputContainer>
    );
};

export default SelectField;
