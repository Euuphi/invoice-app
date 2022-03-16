import styled from "styled-components";
// Styles
import { ParagraphMdStyle } from "components/text/ParagraphMd";

const Name = styled.p`
    ${ParagraphMdStyle}

    color: ${({ theme }) => theme.invoiceItem.name};
    display: inline-block;
    margin-right: 3rem;
`;

export default Name;
