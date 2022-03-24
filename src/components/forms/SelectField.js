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

const Select = styled.select`
    ${InputStyle}
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
