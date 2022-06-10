import styled from "styled-components";
// Media Query
import screen from "styles/mediaQuery/screens";
// Components
import Card from "components/layout/Card";
import DetailsHeader from "./DeatailsHeader";
import Details from "./Details/";
import Summary from "./Summary";

const DetailsCard = styled(Card)`
    flex-direction: column;
    gap: 3rem;
    padding: 4.8rem;

    @media ${screen.mobileL} {
        padding: 2.4rem;
    }
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
                clientName={invoice.clientName}
                clientAddress={invoice.clientAddress}
                clientEmail={invoice.clientEmail}
            />
            <Summary items={invoice.items} total={invoice.total} />
        </DetailsCard>
    );
};

export default InvoiceDetails;
