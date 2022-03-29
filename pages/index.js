import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
// Data
import data from "data/data.json";
// Components
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import MainHeading from "components/sections/MainHeading";
import InvoiceList from "components/invoice/InvoiceList";
import InvoiceFormSection from "components/invoice/InvoiceFormPage";
import { fetchInvoices } from "actions/invoicesActions";
import { useEffect } from "react";

export default function Home() {
    const dispatch = useDispatch();

    // State for displaying and hiding invoice form
    const displayForm = useSelector((state) => state.form.display);

    // Fetch invoice data
    useEffect(() => {
        dispatch(fetchInvoices());
    }, [dispatch]);
    const invoices = useSelector((state) => state.invoices);

    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <Background noScroll={displayForm} as="main">
                <MainContainer>
                    <MainHeading />
                    <InvoiceList invoices={invoices} />
                    {displayForm && <InvoiceFormSection />}
                </MainContainer>
            </Background>
        </>
    );
}

export function getStaticProps() {
    const invoices = JSON.parse(JSON.stringify(data));

    return {
        props: {
            invoices: invoices,
        },
    };
}
