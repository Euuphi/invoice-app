import styled from "styled-components";
// Styles
import { ParagraphMdStyle } from "components/text/ParagraphMd";

const TextContainer = styled.p`
    ${ParagraphMdStyle}

    color: ${({ theme }) => theme.invoiceItem.name};
    display: inline-block;
    width: 14rem;
`;

const Name = ({ text }) => {
    return <TextContainer>{text}</TextContainer>;
};

export default Name;
