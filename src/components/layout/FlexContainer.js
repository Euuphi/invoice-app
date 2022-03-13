import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    align-items: ${({ alignItems }) => alignItems};
    flex: ${({ flex }) => flex};
    flex-direction: ${({ flexDirection }) => flexDirection};
    gap: ${({ gap }) => gap};
    justify-content: ${({ justifyContent }) => justifyContent};
`;

FlexContainer.defaultProps = {
    alignItems: "stretch",
    flex: "0 1 auto",
    flexDirection: "row",
    gap: "2.4rem",
    justifyContent: "normal",
};

export default FlexContainer;
