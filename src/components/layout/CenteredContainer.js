import styled from "styled-components";

const CenteredContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ flexDirection }) => flexDirection};
    gap: ${({ gap }) => gap};
    justify-content: ${({ justifyContent }) => justifyContent || "center"};
    width: ${({ width }) => width};
`;

export default CenteredContainer;
