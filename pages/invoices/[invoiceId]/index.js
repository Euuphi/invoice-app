import Head from "next/head";
// Comonents
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import FlexContainer from "components/layout/FlexContainer";
import GoBackButton from "components/buttons/GoBackButton";
import StatusBar from "components/ui/StatusBar";
import InvoiceDetails from "components/invoice/InvoiceDetails";

export default function InvoiceItem({ invoice }) {
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
                        <InvoiceDetails invoice={invoice} />
                    </FlexContainer>
                </MainContainer>
            </Background>
        </>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;

    const res = await fetch(
        `http://localhost:3000/api/invoices/${params.invoiceId}`
    );
    const { data } = await res.json();

    return {
        props: {
            invoice: data,
        },
    };
}
