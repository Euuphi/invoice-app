import styled from "styled-components";
// Components
import Card from "components/layout/Card";
import DetailsHeader from "./DeatailsHeader";
import Details from "./Details/";

const DetailsCard = styled(Card)`
    flex-direction: column;
    gap: 3rem;
`;

const InvoiceDetails = ({ invoice }) => {
    return (
        <DetailsCard>
            <DetailsHeader
                id={invoice.id}
                description={invoice.description}
                senderAddress={invoice.senderAddress}
            />
            <Details
                createdDate={invoice.createdAt}
                dueDate={invoice.paymentDue}
            />
        </DetailsCard>
    );
};

export default InvoiceDetails;
