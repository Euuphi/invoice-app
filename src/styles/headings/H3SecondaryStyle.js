import { css } from "styled-components";

const H3SecondaryStyle = css`
    color: ${({ theme, color }) => (color ? color : theme.text.primary)};
    font-family: "Spartan", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.25px;
    line-height: 1.5rem;
`;

export default H3SecondaryStyle;
