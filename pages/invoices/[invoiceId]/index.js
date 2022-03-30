import { useState } from "react";
import { useDispatch } from "react-redux";
import { pageScrollOff, pageScrollOn } from "stores/actions/uiActions";
import Head from "next/head";
// Styles
import DeleteButtonStyle from "styles/buttons/DeleteButtonStyle";
// Comonents
import MainContainer from "components/layout/MainContainer";
import FlexContainer from "components/layout/FlexContainer";
import GoBackButton from "components/buttons/GoBackButton";
import StatusBar from "components/ui/StatusBar";
import InvoiceDetails from "components/invoice/InvoiceDetails";
import ConfirmationModal from "components/ui/ConfirmationModal";

export default function InvoiceItem({ invoice }) {
    const dispatch = useDispatch();
    const [showModal, setshowModal] = useState(false);

    const deleteClickHandler = () => {
        setshowModal(true);
        dispatch(pageScrollOff());
    };

    const modalCancelClickHandler = () => {
        setshowModal(false);
        dispatch(pageScrollOn());
    };

    const modalDeleteClickHandler = () => {};

    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <MainContainer>
                <FlexContainer flexDirection="column" gap="2.6rem">
                    <GoBackButton />
                    <StatusBar
                        deleteClickHandler={deleteClickHandler}
                        status={invoice.status}
                    />
                    <InvoiceDetails invoice={invoice} />
                </FlexContainer>
            </MainContainer>
            {showModal && (
                <ConfirmationModal
                    cancelOnClick={modalCancelClickHandler}
                    confirmClickHandler={modalDeleteClickHandler}
                    confirmButtonStyle={DeleteButtonStyle}
                    confirmButtonText="Delete"
                    title="Confirm Deletion"
                    body={`Are you sure you want to delete invoice ${invoice.id}? This action cannot be undone`}
                />
            )}
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
