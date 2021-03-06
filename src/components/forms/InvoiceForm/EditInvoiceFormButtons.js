import { BASE_URL } from "../../../../config";
import { useContext } from "react";
import { FormContext } from "context/FormContext";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
    hideForm,
    resetAllInputErrors,
    setInputErrors,
    setSubmitting,
} from "stores/actions/formActions";
import { pageScrollOn } from "stores/actions/uiActions";
// Components
import FormButtonsContainer from "components/layout/FormButtonsContainer";
import SaveButton from "components/buttons/formButtons/SaveButton";
import CancelButton from "components/buttons/formButtons/CancelButton";
import { getFormInputs } from "stores/selectors/formInputSelectors";

const EditInvoiceFormButton = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { validateInputs, validateErrors } = useContext(FormContext);

    const { invoiceId } = router.query;
    const formInputs = useSelector((state) => getFormInputs(state));

    const cancelHandler = () => {
        dispatch(hideForm());
        dispatch(pageScrollOn());
        dispatch(resetAllInputErrors());
    };

    const saveHandler = async (e) => {
        e.preventDefault();
        dispatch(setSubmitting(true));

        // Validate input fields
        const inputErrors = validateInputs(formInputs);
        const errors = validateErrors(inputErrors);
        dispatch(setInputErrors(inputErrors));

        // Set form status based on errors
        let status;
        // Leave status as paid if already set to paid
        if (formInputs.status === "paid") {
            status = "paid";
        }
        // Else if there are no errors, set status to pending
        else if (Object.keys(errors).length === 0) {
            status = "pending";
        }
        // Else set status as draft if there are errors
        else {
            status = "draft";
        }

        // Submit form
        try {
            const response = await fetch(
                `${BASE_URL}/api/invoices/${invoiceId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...formInputs, status }),
                }
            );
        } catch (error) {
            console.log(error);
        }

        dispatch(setSubmitting(false));
        router.reload(window.location.pathname);
    };

    return (
        <FormButtonsContainer>
            <CancelButton text="Cancel" onClick={cancelHandler} />
            <SaveButton text="Save Changes" onClick={saveHandler} />
        </FormButtonsContainer>
    );
};

export default EditInvoiceFormButton;
