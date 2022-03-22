import styled from "styled-components";

const TotalContainer = styled.div`
    background-color: ${({ theme }) => theme.background.detailsTotal};
    width: 100%;
`;

const InvoiceTotal = ({ total }) => {
    return <TotalContainer></TotalContainer>;
};

export default InvoiceTotal;
