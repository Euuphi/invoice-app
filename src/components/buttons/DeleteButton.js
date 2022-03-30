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
    const { invoiceId } = router.query;

    const clickHandler = () => {
        setshowModal(true);
        dispatch(pageScrollOff());
    };

    const modalCancelClickHandler = () => {
        setshowModal(false);
        dispatch(pageScrollOn());
    };

    const modalDeleteClickHandler = async () => {};

    return (
        <>
            <Button onClick={clickHandler}>Delete</Button>
            {showModal && (
                <ConfirmationModal
                    cancelOnClick={modalCancelClickHandler}
                    confirmClickHandler={modalDeleteClickHandler}
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
