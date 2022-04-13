import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormInputs } from "stores/actions/formInputActions";
import deleteKey from "functions/deleteKey";
import Head from "next/head";
// Mongoose
import dbConnect from "utils/dbConnect";
import Invoice from "models/Invoice";
// Comonents
import MainContainer from "components/layout/MainContainer";
import FlexContainer from "components/layout/FlexContainer";
import GoBackButton from "components/buttons/GoBackButton";
import ActionBar from "components/ui/ActionBar";
import InvoiceDetails from "components/invoice/InvoiceDetails";
import InvoiceFormPage from "components/invoice/InvoiceFormPage";

export default function InvoiceItem({ invoice }) {
    const dispatch = useDispatch();
    const displayForm = useSelector((state) => state.form.display);

    useEffect(() => {
        dispatch(setFormInputs(invoice));
    }, [invoice, displayForm, dispatch]);

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
    const {
        params: { invoiceId },
    } = context;

    const data = await Invoice.findOne({ id: invoiceId });
    const invoiceData = JSON.parse(JSON.stringify(data));

    // Transform dates in data to yyyy-mm-dd and remove mongoose versionKey property (__v)
    const invoice = deleteKey(
        {
            ...invoiceData,
            paymentDue: invoiceData.paymentDue
                ? invoiceData.paymentDue.split("T")[0]
                : "",
            createdAt: invoiceData.createdAt
                ? invoiceData.createdAt.split("T")[0]
                : "",
        },
        "__v"
    );

    return {
        props: {
            invoice,
        },
    };
}
