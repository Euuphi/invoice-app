// Components
import FormGroup from "../FormGroup";
import FormGroupTitle from "../FormGroupTitle";
import InputField from "../InputField";

const BillTo = () => {
    return (
        <FormGroup>
            <FormGroupTitle>Bill To</FormGroupTitle>
            <InputField
                inputType="text"
                name="clientName"
                label="Client's Name"
                fullGridColumn
            />
            <InputField
                inputType="text"
                name="clientEmail"
                label="Client's Email"
                fullGridColumn
            />
            <InputField
                inputType="text"
                name="streetAddress"
                label="Street Address"
                fullGridColumn
            />
            <InputField inputType="text" name="city" label="City" />
            <InputField inputType="text" name="postCode" label="Post Code" />
            <InputField inputType="text" name="country" label="Country" />
        </FormGroup>
    );
};

export default BillTo;
