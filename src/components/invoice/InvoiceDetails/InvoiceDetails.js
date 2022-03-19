import { useRouter } from "next/router";
// Components
import GoBackButton from "components/buttons/GoBackButton";
import StatusBar from "./StatusBar";
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

    return (
        <>
            <GoBackButton />
            <StatusBar status={invoice.status} />
        </>
    );
};

export default InvoiceDetails;
