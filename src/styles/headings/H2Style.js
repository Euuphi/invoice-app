import { css } from "styled-components";

const H2Style = css`
    color: ${({ theme, color }) => (color ? color : theme.text.primary)};
    font-family: "Spartan", sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 3.2rem;
`;

export default H2Style;
