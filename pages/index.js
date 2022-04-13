import { useSelector } from "react-redux";
import { BASE_URL } from "../config";
import Head from "next/head";
// Components
import MainContainer from "components/layout/MainContainer";
import MainHeading from "components/sections/MainHeading";
import InvoiceList from "components/invoice/InvoiceList";
import InvoiceFromPage from "components/invoice/InvoiceFormPage";

export default function Home({ invoices }) {
    // State for displaying and hiding invoice form
    const displayForm = useSelector((state) => state.form.display);

    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <MainContainer>
                <MainHeading numberOfInvoices={invoices.length} />
                <InvoiceList invoices={invoices} />
                {displayForm && <InvoiceFromPage />}
            </MainContainer>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${BASE_URL}/api/invoices`);
    const { data } = await res.json();

    return {
        props: {
            invoices: data,
        },
    };
}
