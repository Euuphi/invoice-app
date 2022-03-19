import Head from "next/head";
// Comonents
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import InvoiceDetails from "components/invoice/InvoiceDetails";

export default function InvoiceItem() {
    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <Background>
                <MainContainer>
                    <InvoiceDetails />
                </MainContainer>
            </Background>
            ;
        </>
    );
}
