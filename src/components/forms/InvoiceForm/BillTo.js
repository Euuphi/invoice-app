// Components
import FormGroup from "../FormGroup";
import FormGroupTitle from "../FormGroupTitle";
import InputField from "../InputField";

const BillTo = () => {
    return (
        <FormGroup columns="1fr 1fr 1fr">
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
                name="street"
                label="Street Address"
                formGroup="clientAddress"
                fullGridColumn
            />
            <InputField
                inputType="text"
                name="city"
                label="City"
                formGroup="clientAddress"
            />
            <InputField
                inputType="text"
                name="postCode"
                label="Post Code"
                formGroup="clientAddress"
            />
            <InputField
                inputType="text"
                name="country"
                label="Country"
                formGroup="clientAddress"
            />
        </FormGroup>
    );
};

export default BillTo;
