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
