import styled, { css } from "styled-components";

export const H3Style = css`
    font-family: "Spartan", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 2.4rem;
`;

const H3 = styled.h3`
    ${H3Style}
`;

export default H3;
