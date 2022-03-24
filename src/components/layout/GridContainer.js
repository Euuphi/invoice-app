import styled from "styled-components";

/**
 * @param {string} columns - Grid template columns
 * @param {string} rows - Grid template rows
 * @param {string} columnGap - Column gap
 * @param {string} rowGap - Row gap
 * @param {string} alignItems - Align items
 * @param {string} justifyContent - Justify content
 * @param {string} width - Container width
 * @return {JSX} - CSS Grid container wrapper component
 */
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-template-rows: ${({ rows }) => rows};
    column-gap: ${({ columnGap }) => columnGap};
    row-gap: ${({ rowGap }) => rowGap};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    width: ${({ width }) => width};
`;

export default GridContainer;

GridContainer.defaultProps = {
    columns: "1fr",
};
