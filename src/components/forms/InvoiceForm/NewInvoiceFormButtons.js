import { useRouter } from "next/router";
import { useContext } from "react";
import { FormContext } from "context/FormContext";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { pageScrollOn } from "stores/actions/uiActions";
import {
    hideForm,
    resetAllInputErrors,
    setInputErrors,
    setSubmitting,
} from "stores/actions/formActions";
import { resetInputs } from "stores/actions/formInputActions";
import { getFormInputs } from "stores/selectors/formInputSelectors";
// Components
import FormButtonsContainer from "components/layout/FormButtonsContainer";
import CancelButton from "components/buttons/formButtons/CancelButton";
import SaveAsDraftButton from "components/buttons/formButtons/SaveAsDraftButton";
import SaveButton from "components/buttons/formButtons/SaveButton";

const NewInvoiceFormButtons = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { validateInputs, validateErrors } = useContext(FormContext);
    const formInputs = useSelector((state) => getFormInputs(state));

    const discardClickHandler = () => {
        dispatch(hideForm());
        dispatch(pageScrollOn());
        dispatch(resetInputs());
        dispatch(resetAllInputErrors());
        dispatch(setSubmitting(false));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setSubmitting(true));

        // Validate input fields
        const inputErrors = validateInputs(formInputs);
        const errors = validateErrors(inputErrors);
        dispatch(setInputErrors(inputErrors));

        // Submit form if there are no input errors
        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/invoices",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formInputs),
                    }
                );
            } catch (error) {
                // TODO: Add error handling for duplicate IDs
                console.log(error);
            }

            router.reload(window.location.pathname);
        }
    };

    const saveAsDraftHandler = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/invoices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formInputs, status: "draft" }),
            });
        } catch (error) {
            // TODO: Add error handling for duplicate IDs
            console.log(error);
        }

        router.reload(window.location.pathname);
    };

    return (
        <FormButtonsContainer>
            <CancelButton
                onClick={discardClickHandler}
                text="Discard"
                margin="0 auto 0 0"
            />
            <SaveAsDraftButton onClick={saveAsDraftHandler} />
            <SaveButton onClick={submitHandler} text="Save & Send" />
        </FormButtonsContainer>
    );
};

export default NewInvoiceFormButtons;
