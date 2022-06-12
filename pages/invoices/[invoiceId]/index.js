import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormInputs } from "stores/actions/formInputActions";
import deleteKey from "functions/deleteKey";
import Head from "next/head";
// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";
// Mongoose
import dbConnect from "utils/dbConnect";
import Invoice from "models/Invoice";
// Comonents
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import FlexContainer from "components/layout/FlexContainer";
import StickyContainer from "components/layout/StickyContainer";
import GoBackButton from "components/buttons/GoBackButton";
import ActionBar from "components/ui/ActionBar";
import InvoiceDetails from "components/invoice/InvoiceDetails";
import InvoiceFormPage from "components/invoice/InvoiceFormPage";
// Action Button Components
import ActionButtons from "components/ui/ActionButtons";
import { useRouter } from "next/router";

export default function InvoiceItem({ invoice }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const displayForm = useSelector((state) => state.form.display);
    const tabletScreen = useMediaQuery(screen.tablet);

    useEffect(() => {
        dispatch(setFormInputs(invoice));
    }, [invoice, displayForm, dispatch]);

    const goBackHandler = () => {
        router.push("/");
    };

    return (
        <>
            <Background>
                <Head>
                    <title>Invoice #{invoice.id}</title>
                </Head>
                <MainContainer>
                    <FlexContainer flexDirection="column" gap="2.6rem">
                        <GoBackButton onClick={goBackHandler} />
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
            </Background>
            {tabletScreen && !displayForm && (
                <StickyContainer>
                    <ActionButtons status={invoice.status} />
                </StickyContainer>
            )}
        </>
    );
}

export async function getServerSideProps(context) {
    const {
        params: { invoiceId },
    } = context;

    dbConnect();

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
