import { useState } from "react";
import { useDispatch } from "react-redux";
import { pageScrollOff, pageScrollOn } from "stores/actions/uiActions";
import { useRouter } from "next/router";
import styled from "styled-components";
// Styles
import DeleteButtonStyle from "styles/buttons/DeleteButtonStyle";
// Components
import ConfirmationModal from "components/ui/ConfirmationModal";

const Button = styled.button`
    ${DeleteButtonStyle}
`;

const DeleteButton = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [showModal, setshowModal] = useState(false);
    const invoiceId = router.query.invoiceId;

    const clickHandler = () => {
        setshowModal(true);
        dispatch(pageScrollOff());
    };

    const onCancelHandler = () => {
        setshowModal(false);
        dispatch(pageScrollOn());
    };

    const onDeleteHandler = async () => {
        try {
            // Delete invoice
            const deleted = await fetch(
                `http://localhost:3000/api/invoices/${invoiceId}`,
                {
                    method: "DELETE",
                }
            );
            // Route to home page
            await router.push("/");
            // Turn on page scroll
            dispatch(pageScrollOn());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Button onClick={clickHandler}>Delete</Button>
            {showModal && (
                <ConfirmationModal
                    onCancel={onCancelHandler}
                    onConfirm={onDeleteHandler}
                    confirmButtonStyle={DeleteButtonStyle}
                    confirmButtonText="Delete"
                    title="Confirm Deletion"
                    body={`Are you sure you want to delete invoice ${invoiceId}? This action cannot be undone`}
                />
            )}
        </>
    );
};

export default DeleteButton;
