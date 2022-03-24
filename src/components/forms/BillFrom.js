// Components
import FormGroup from "./FormGroup";
import FormGroupTitle from "./FormGroupTitle";
import TextInput from "./TextInput";

const BillFrom = () => {
    return (
        <FormGroup>
            <FormGroupTitle>Bill From</FormGroupTitle>
            <TextInput
                name="streetAddress"
                label="Street Address"
                fullGridColumn
            />
            <TextInput name="city" label="City" />
            <TextInput name="postCode" label="Post Code" />
            <TextInput name="country" label="Country" />
        </FormGroup>
    );
};

export default BillFrom;
