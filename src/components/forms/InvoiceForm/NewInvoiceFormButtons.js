import { useRouter } from "next/router";
import { useContext } from "react";
import { FormContext } from "context/FormContext";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { pageScrollOn } from "stores/actions/uiActions";
import { hideForm, resetErrors, setErrors } from "stores/actions/formActions";
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
    const { validate } = useContext(FormContext);
    const formInputs = useSelector((state) => getFormInputs(state));

    const discardClickHandler = () => {
        dispatch(hideForm());
        dispatch(pageScrollOn());
        dispatch(resetInputs());
        dispatch(resetErrors());
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // Validate input fields
        const errors = validate(formInputs);
        dispatch(setErrors(errors));

        // Submit form if there are no input errors
        if (!errors) {
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

    return (
        <FormButtonsContainer>
            <CancelButton
                onClick={discardClickHandler}
                text="Discard"
                margin="0 auto 0 0"
            />
            <SaveAsDraftButton />
            <SaveButton onClick={submitHandler} text="Save & Send" />
        </FormButtonsContainer>
    );
};

export default NewInvoiceFormButtons;
