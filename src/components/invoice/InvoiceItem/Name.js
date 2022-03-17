import styled from "styled-components";
// Styles
import { ParagraphMdStyle } from "components/text/ParagraphMd";

const Name = styled.p`
    ${ParagraphMdStyle}

    color: ${({ theme }) => theme.invoiceItem.name};
    display: inline-block;
    width: 14rem;
`;

export default Name;
