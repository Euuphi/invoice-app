import { useRouter } from "next/router";
// Components
import FlexContainer from "components/layout/FlexContainer";
import GoBackButton from "components/buttons/GoBackButton";
import StatusBar from "./StatusBar";
import Details from "./Details/Details";
// Invoice Data
import data from "data/data.json";

const InvoiceDetails = () => {
    const router = useRouter();

    let invoiceData = JSON.parse(JSON.stringify(data));

    // Query for invoice details using URL params
    const invoiceId = router.query.invoiceId;

    const invoice = invoiceData.filter(
        (invoice) => invoice.id === invoiceId
    )[0];

    console.log(invoice);

    return (
        <FlexContainer flexDirection="column" gap="2.6rem">
            <GoBackButton />
            <StatusBar status={invoice.status} />
            <Details />
        </FlexContainer>
    );
};

export default InvoiceDetails;
