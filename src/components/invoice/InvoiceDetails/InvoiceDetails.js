// Components
import Card from "components/layout/Card";
import DetailsHeader from "./DeatailsHeader";

const InvoiceDetails = ({ invoice }) => {
    return (
        <Card>
            <DetailsHeader
                id={invoice.id}
                description={invoice.description}
                senderAddress={invoice.senderAddress}
            />
        </Card>
    );
};

export default InvoiceDetails;
