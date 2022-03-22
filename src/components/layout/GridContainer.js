import styled from "styled-components";

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
