// Components
import Card from "components/layout/Card";
import DeatailsHeader from "./DeatailHeader";

const InvoiceDetails = ({ invoice }) => {
    return (
        <Card>
            <DeatailsHeader id={invoice.id} description={invoice.description} />
        </Card>
    );
};

export default InvoiceDetails;
