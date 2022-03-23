// Components
import FormSection from "./FormSection";
import FormSectionTitle from "./FormSectionTitle";
import TextInput from "./TextInput";

const BillTo = () => {
    return (
        <FormSection>
            <FormSectionTitle>Bill To</FormSectionTitle>
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
        </FormSection>
    );
};

export default BillTo;
