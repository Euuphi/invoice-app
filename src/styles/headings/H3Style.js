import { css } from "styled-components";

const H3Style = css`
    color: ${({ theme, color }) => (color ? color : theme.text.primary)};
    font-family: "Spartan", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 2.4rem;
`;

export default H3Style;
