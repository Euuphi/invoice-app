import styled from "styled-components";
import convertCurrency from "functions/convertCurrency";
// Styles
import ParagraphSmStyle from "styles/text/ParagraphSmStyle";
import H2Style from "styles/headings/H2Style";

const InvoiceTotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.background.detailsTotal};
    padding: 2.4rem 3.2rem;
    width: 100%;
`;

const Label = styled.span`
    ${ParagraphSmStyle}

    color: #fff;
`;

const Total = styled.span`
    ${H2Style}
    color: #fff;
`;

const InvoiceTotal = ({ total }) => {
    return (
        <InvoiceTotalContainer>
            <Label>Amount Due</Label>
            <Total>{convertCurrency(total)}</Total>
        </InvoiceTotalContainer>
    );
};

export default InvoiceTotal;
