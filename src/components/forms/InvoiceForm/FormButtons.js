import styled from "styled-components";
import { useRouter } from "next/router";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { discardNewInvoice } from "stores/actions/formActions";
import { resetInputs } from "stores/actions/formInputActions";
import { getFormInputs } from "stores/selectors/formInputSelectors";
// Components
import CancelButton from "components/buttons/formButtons/CancelButton";
import SaveAsDraftButton from "components/buttons/formButtons/SaveAsDraftButton";
import SaveButton from "components/buttons/formButtons/SaveButton";
import { pageScrollOn } from "stores/actions/uiActions";

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
    const router = useRouter();
    const formInputs = useSelector((state) => getFormInputs(state));

    const discardClickHandler = () => {
        dispatch(discardNewInvoice());
        dispatch(pageScrollOn());
        dispatch(resetInputs());
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        // Submit form
        try {
            const response = await fetch("http://localhost:3000/api/invoices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formInputs),
            });
        } catch (error) {
            console.log(error);
        }

        router.reload(window.location.pathname);
    };

    return (
        <FormButtonsContainer>
            <CancelButton onClick={discardClickHandler} text="Discard" />
            <SaveAsDraftButton />
            <SaveButton onClick={submitHandler} text="Save & Send" />
        </FormButtonsContainer>
    );
};

export default FormButtons;
