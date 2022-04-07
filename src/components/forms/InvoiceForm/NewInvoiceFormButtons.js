import { useRouter } from "next/router";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { discardNewInvoice } from "stores/actions/formActions";
import { resetInputs } from "stores/actions/formInputActions";
import { getFormInputs } from "stores/selectors/formInputSelectors";
// Components
import FormButtonsContainer from "components/layout/FormButtonsContainer";
import CancelButton from "components/buttons/formButtons/CancelButton";
import SaveAsDraftButton from "components/buttons/formButtons/SaveAsDraftButton";
import SaveButton from "components/buttons/formButtons/SaveButton";
import { pageScrollOn } from "stores/actions/uiActions";

const NewInvoiceFormButtons = () => {
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
            // TODO: Add error handling for duplicate IDs
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

export default NewInvoiceFormButtons;
