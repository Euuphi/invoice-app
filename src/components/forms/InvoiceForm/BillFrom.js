// Components
import FormGroup from "components/forms/FormGroup";
import FormGroupTitle from "components/forms/FormGroupTitle";
import InputField from "components/forms/InputField";

const BillFrom = () => {
    return (
        <FormGroup columns="1fr 1fr 1fr">
            <FormGroupTitle>Bill From</FormGroupTitle>
            <InputField
                inputType="text"
                name="street"
                label="Street Address"
                formGroup="senderAddress"
                Group="senderAddress"
                fullGridColumn
            />
            <InputField
                inputType="text"
                name="city"
                label="City"
                formGroup="senderAddress"
            />
            <InputField
                inputType="text"
                name="postCode"
                label="Post Code"
                formGroup="senderAddress"
            />
            <InputField
                inputType="text"
                name="country"
                label="Country"
                formGroup="senderAddress"
            />
        </FormGroup>
    );
};

export default BillFrom;
