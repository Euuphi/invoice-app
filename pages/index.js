import { useSelector } from "react-redux";
import Head from "next/head";
// Components
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import MainHeading from "components/sections/MainHeading";
import InvoiceList from "components/invoice/InvoiceList";
import InvoiceFormSection from "components/invoice/InvoiceFormPage";

export default function Home({ invoices }) {
    // State for displaying and hiding invoice form
    const displayForm = useSelector((state) => state.form.display);

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

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/invoices");
    const { data } = await res.json();

    return {
        props: {
            invoices: data,
        },
    };
}
