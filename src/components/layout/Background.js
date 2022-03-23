import styled from "styled-components";

const Background = styled.div`
    background-color: ${({ theme }) => theme.background.primary};
    min-height: 100vh;
    padding: 7.1rem 0;
    position: relative;
`;

export default Background;
