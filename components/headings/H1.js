import styled from "styled-components";

const H1 = styled.h1`
    color: ${({ theme }) => theme.text.primary};
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 3.6rem;
`;

export default H1;
