import styled from "styled-components";

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({ justifyContent }) => justifyContent};

    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid transparent;
    border-radius: 0.8rem;
    box-shadow: 0 1rem 1rem ${({ theme }) => theme.shadow.light};
    padding: 2rem 3.2rem;
    width: 100%;
`;

export default Card;
