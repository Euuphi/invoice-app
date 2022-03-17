import styled, { css } from "styled-components";

export const H2Style = css`
    color: ${({ theme, color }) => (color ? color : theme.text.primary)};
    font-family: "Spartan", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.63px;
    line-height: 2.2rem;
`;

const H2 = styled.h2`
    ${H2Style}
`;

export default H2;
