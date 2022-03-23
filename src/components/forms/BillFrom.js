// Components
import FormSection from "./FormSection";
import FormSectionTitle from "./FormSectionTitle";
import TextInput from "./TextInput";

const BillFrom = () => {
    return (
        <FormSection>
            <FormSectionTitle>Bill From</FormSectionTitle>
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

export default BillFrom;
