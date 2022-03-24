// Components
import FormGroup from "./FormGroup";
import FormGroupTitle from "./FormGroupTitle";
import InputField from "./InputField";

const BillFrom = () => {
    return (
        <FormGroup>
            <FormGroupTitle>Bill From</FormGroupTitle>
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

export default BillFrom;
