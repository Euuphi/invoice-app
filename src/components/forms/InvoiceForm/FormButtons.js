import styled from "styled-components";

const FormButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: absolute;
    bottom: 0;
    left: 0;

    padding: 3rem 5.6rem;
    width: 100%;
`;

const FormButtons = () => {
    return <FormButtonsContainer>Form Buttons</FormButtonsContainer>;
};

export default FormButtons;
