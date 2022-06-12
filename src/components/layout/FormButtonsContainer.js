import styled from "styled-components";
import screen from "styles/mediaQuery/screens";

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
    padding: 3rem 5.6rem;
    padding-left: 15.9rem;
    /* Translate same amount as left padding */
    transform: translateX(-15.9rem);
    width: 72rem;

    @media ${screen.tabletl} {
        padding-left: 5.6rem;
        transform: translateX(-5.6rem);
        width: 62rem;
    }

    @media ${screen.tabletS} {
        border-radius: 0;
        padding: 3rem 4.2rem;
        transform: translateX(-4.2rem);
        width: 100vw;
    }

    @media ${screen.mobile} {
        padding: 2.1rem 2.4rem;
        transform: translateX(-2.4rem);
    }
`;

export default FormButtonsContainer;
