import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
// Comonents
import MainContainer from "components/layout/MainContainer";
import FlexContainer from "components/layout/FlexContainer";
import GoBackButton from "components/buttons/GoBackButton";
import ActionBar from "components/ui/ActionBar";
import InvoiceDetails from "components/invoice/InvoiceDetails";
import InvoiceFormPage from "components/invoice/InvoiceFormPage";
import { setFormInputs } from "stores/actions/formInputActions";

export default function InvoiceItem({ invoice }) {
    const dispatch = useDispatch();
    const displayForm = useSelector((state) => state.form.display);

    useEffect(() => {
        dispatch(setFormInputs(invoice));
    }, [invoice, dispatch]);

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
                    {displayForm && (
                        <InvoiceFormPage
                            formTitle={`Edit #${invoice.id}`}
                            formStyle="edit"
                        />
                    )}
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

    // Transform dates in data to yyyy-mm-dd
    const invoice = {
        ...data,
        paymentDue: data.paymentDue.split("T")[0],
        createdAt: data.createdAt.split("T")[0],
    };

    return {
        props: {
            invoice,
        },
    };
}
