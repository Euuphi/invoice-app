import styled from "styled-components";
import convertCurrency from "functions/convertCurrency";
// Styles
import ParagraphSmStyle from "styles/text/ParagraphSmStyle";

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
    color: #fff;
    font-family: "Spartan", sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 3.2rem;
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
