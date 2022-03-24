// Components
import FormGroup from "./FormGroup";
import FormGroupTitle from "./FormGroupTitle";
import TextInput from "./TextInput";

const BillTo = () => {
    return (
        <FormGroup>
            <FormGroupTitle>Bill To</FormGroupTitle>
            <TextInput name="clientName" label="Client's Name" fullGridColumn />
            <TextInput
                name="clientEmail"
                label="Client's Email"
                fullGridColumn
            />
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

export default BillTo;
