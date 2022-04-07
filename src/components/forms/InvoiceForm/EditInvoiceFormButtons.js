import { useDispatch } from "react-redux";
import { hideForm } from "stores/actions/formActions";
import { pageScrollOn } from "stores/actions/uiActions";
// Components
import FormButtonsContainer from "components/layout/FormButtonsContainer";
import SaveButton from "components/buttons/formButtons/SaveButton";
import CancelButton from "components/buttons/formButtons/CancelButton";

const EditInvoiceFormButton = () => {
    const dispatch = useDispatch();

    const cancelHandler = () => {
        dispatch(hideForm());
        dispatch(pageScrollOn());
    };

    const saveHandler = () => {
        console.log("Save");
    };

    return (
        <FormButtonsContainer>
            <CancelButton text="Cancel" onClick={cancelHandler} />
            <SaveButton text="Save Changes" onClick={saveHandler} />
        </FormButtonsContainer>
    );
};

export default EditInvoiceFormButton;
