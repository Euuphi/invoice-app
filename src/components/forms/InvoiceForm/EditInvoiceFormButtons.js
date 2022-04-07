import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { hideForm } from "stores/actions/formActions";
import { pageScrollOn } from "stores/actions/uiActions";
// Components
import FormButtonsContainer from "components/layout/FormButtonsContainer";
import SaveButton from "components/buttons/formButtons/SaveButton";
import CancelButton from "components/buttons/formButtons/CancelButton";
import { getFormInputs } from "stores/selectors/formInputSelectors";

const EditInvoiceFormButton = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { invoiceId } = router.query;
    const formInputs = useSelector((state) => getFormInputs(state));

    const cancelHandler = () => {
        dispatch(hideForm());
        dispatch(pageScrollOn());
    };

    const saveHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `http://localhost:3000/api/invoices/${invoiceId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formInputs),
                }
            );
        } catch (error) {
            console.log(error);
        }

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
