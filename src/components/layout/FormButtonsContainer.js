import styled from "styled-components";

const FormButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.8rem;

    position: sticky;
    bottom: 0;
    left: 0;

    background-color: ${({ theme }) => theme.form.background};
    box-shadow: 0 -1rem 5rem ${({ theme }) => theme.shadow.medium};
    border-radius: 0 2rem 2rem 0;
    padding-left: 10.3rem;
    padding: 3rem 5.6rem;
    padding-left: 15.9rem;
    transform: translateX(-15.9rem);
    width: 72rem;
`;

export default FormButtonsContainer;
