import { useRouter } from "next/router";
import Head from "next/head";
// Comonents
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import FlexContainer from "components/layout/FlexContainer";
import GoBackButton from "components/buttons/GoBackButton";
import StatusBar from "components/ui/StatusBar";
import InvoiceDetails from "components/invoice/InvoiceDetails";
// Data
import data from "data/data.json";

export default function InvoiceItem() {
    const router = useRouter();

    let invoiceData = JSON.parse(JSON.stringify(data));

    // Query for invoice details using URL params
    const invoiceId = router.query.invoiceId;

    const invoice = invoiceData.filter(
        (invoice) => invoice.id === invoiceId
    )[0];

    console.log(invoice);

    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <Background>
                <MainContainer>
                    <FlexContainer flexDirection="column" gap="2.6rem">
                        <GoBackButton />
                        <StatusBar status={invoice.status} />
                        <InvoiceDetails />
                    </FlexContainer>
                </MainContainer>
            </Background>
            ;
        </>
    );
}
