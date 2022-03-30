import styled from "styled-components";
// Redux
import { useDispatch } from "react-redux";
import { discardNewInvoice } from "stores/actions/formActions";
// Components
import CancelButton from "components/buttons/formButtons/CancelButton";
import SaveAsDraftButton from "components/buttons/formButtons/SaveAsDraftButton";
import SaveButton from "components/buttons/formButtons/SaveButton";
import { togglePageScroll } from "stores/actions/uiActions";

const FormButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.8rem;

    position: sticky;
    bottom: 0;
    left: 0;

    background-color: ${({ theme }) => theme.form.background};
    box-shadow: 0 -1rem 5rem ${({ theme }) => theme.shadow.medium};
    border-radius: 0 2rem 2rem 0;
    padding-left: 10.3rem;
    padding: 3rem 5.6rem;
    padding-left: 15.9rem;
    transform: translateX(-15.9rem);
    width: 72rem;
`;

const FormButtons = () => {
    const dispatch = useDispatch();

    const discardClickHandler = () => {
        dispatch(discardNewInvoice());
        dispatch(togglePageScroll());
    };

    return (
        <FormButtonsContainer>
            <CancelButton onClick={discardClickHandler} text="Discard" />
            <SaveAsDraftButton />
            <SaveButton text="Save & Send" />
        </FormButtonsContainer>
    );
};

export default FormButtons;
