import Head from "next/head";
// Comonents
import MainContainer from "components/layout/MainContainer";
import FlexContainer from "components/layout/FlexContainer";
import GoBackButton from "components/buttons/GoBackButton";
import ActionBar from "components/ui/ActionBar";
import InvoiceDetails from "components/invoice/InvoiceDetails";
import InvoiceFormPage from "components/invoice/InvoiceFormPage";

export default function InvoiceItem({ invoice }) {
    const displayForm = useSelector((state) => state.form.display);

    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <MainContainer>
                <FlexContainer flexDirection="column" gap="2.6rem">
                    <GoBackButton />
                    <ActionBar status={invoice.status} />
                    <InvoiceDetails invoice={invoice} />
                    {dispayForm && <InvoiceFormPage />}
                </FlexContainer>
            </MainContainer>
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
