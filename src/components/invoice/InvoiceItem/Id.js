import styled from "styled-components";
// Styles
import { H3SecondaryStyle } from "components/headings/H3Secondary";

const Id = styled.p`
    ${H3SecondaryStyle};

    color: ${({ theme }) => theme.text.primary};
    display: inline-block;
    width: 10rem;

    & span {
        color: #7e88c3;
    }
`;

export default Id;
