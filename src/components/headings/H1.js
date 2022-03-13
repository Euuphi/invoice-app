import styled, { css } from "styled-components";

export const H1Style = css`
    font-family: "Spartan", sans-serif;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 3.6rem;
`;

const H1 = styled.h1`
    color: ${({ theme }) => theme.text.primary};
    ${H1Style}
`;

export default H1;
