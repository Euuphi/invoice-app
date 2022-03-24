import styled from "styled-components";

const FormGroup = styled.fieldset`
    display: grid;
    column-gap: 2.4rem;
    grid-template-columns: ${({ columns }) => columns};
    margin-bottom: 4.8rem;

    border: none;
`;

export default FormGroup;
