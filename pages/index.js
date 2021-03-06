import { useSelector } from "react-redux";
import Head from "next/head";
// Mongoose
import dbConnect from "utils/dbConnect";
import Invoice from "models/Invoice";
// Components
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import MainHeading from "components/sections/MainHeading";
import InvoiceList from "components/invoice/InvoiceList";
import InvoiceFromPage from "components/invoice/InvoiceFormPage";

export default function Home({ invoices }) {
    // State for displaying and hiding invoice form
    const displayForm = useSelector((state) => state.form.display);

    return (
        <Background>
            <Head>
                <title>Invoice App</title>
            </Head>
            <MainContainer>
                <MainHeading numberOfInvoices={invoices.length} />
                <InvoiceList invoices={invoices} />
                {displayForm && <InvoiceFromPage />}
            </MainContainer>
        </Background>
    );
}

export async function getServerSideProps() {
    dbConnect();

    const data = await Invoice.find({});
    const invoices = JSON.parse(JSON.stringify(data));

    return {
        props: {
            invoices,
        },
    };
}
