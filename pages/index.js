import Head from "next/head";
// Components
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import MainHeading from "components/sections/MainHeading";
import InvoiceList from "components/invoice/InvoiceList";
// Data
import data from "data/data.json";

export default function Home() {
    // TODO: Placeholder for back-end invoice retrieval
    // Extract invoice data from json file intro an array of objects
    const invoices = JSON.parse(JSON.stringify(data));

    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <Background as="main">
                <MainContainer>
                    <MainHeading />
                    <InvoiceList invoices={invoices} />
                </MainContainer>
            </Background>
        </>
    );
}
