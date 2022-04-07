// Components
import FormButtonsContainer from "components/layout/FormButtonsContainer";
import SaveButton from "components/buttons/formButtons/SaveButton";
import CancelButton from "components/buttons/formButtons/CancelButton";

const EditInvoiceFormButton = () => {
    const cancelHandler = () => {
        console.log("Cancel");
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
