import styled from "styled-components";

/**
 * Create a flex container wrapper
 *
 * @param {string} alignItems - Set align-items property
 * @param {string} flex - Set flex property
 * @param {string} flexDirection - Set flex direction property
 * @param {string} gap - Set gap property
 * @param {string} justifyContent - Set justify-content property
 * @param {string} width - Set width of container
 * @return {JSX} Label and input elements
 */
const FlexContainer = styled.div`
    display: flex;
    align-items: ${({ alignItems }) => alignItems};
    flex: ${({ flex }) => flex};
    flex-direction: ${({ flexDirection }) => flexDirection};
    gap: ${({ gap }) => gap};
    justify-content: ${({ justifyContent }) => justifyContent};
    width: ${({ width }) => width};
`;

FlexContainer.defaultProps = {
    alignItems: "stretch",
    flex: "0 1 auto",
    flexDirection: "row",
    justifyContent: "normal",
};

export default FlexContainer;
