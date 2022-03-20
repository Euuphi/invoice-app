import { css } from "styled-components";

const H1Style = css`
    color: ${({ theme, color }) => (color ? color : theme.text.primary)};
    font-family: "Spartan", sans-serif;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 3.6rem;
`;

export default H1Style;
