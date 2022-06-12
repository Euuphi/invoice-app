import styled from "styled-components";

const StickyContainer = styled.div`
    position: sticky;
    bottom: 0;

    background-color: ${({ theme }) => theme.background.secondary};
    padding: 2.1rem;
`;

export default StickyContainer;
