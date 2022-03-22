import { css } from "styled-components";

const H2SecondaryStyle = css`
    color: ${({ theme, color }) => (color ? color : theme.text.primary)};
    font-family: "Spartan", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.63px;
    line-height: 2.2rem;
`;

export default H2SecondaryStyle;
