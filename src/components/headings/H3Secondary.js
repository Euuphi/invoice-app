import styled, { css } from "styled-components";

export const H3SecondaryStyle = css`
    font-family: "Spartan", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.25px;
    line-height: 1.5rem;
`;

const H3Secondary = styled.h3`
    ${H3SecondaryStyle}
`;

export default H3Secondary;
