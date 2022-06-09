import styled from "styled-components";
import screen from "styles/mediaQuery/screens";
// Styles
import ParagraphMdStyle from "styles/text/ParagraphMdStyle";

const TextContainer = styled.p`
    ${ParagraphMdStyle}

    color: ${({ theme }) => theme.invoiceItem.name};
    display: inline-block;
    width: 14rem;

    @media ${screen.tablet} {
        justify-self: right;
        width: auto;
    }
`;

const Name = ({ text }) => {
    return <TextContainer>{text}</TextContainer>;
};

export default Name;
