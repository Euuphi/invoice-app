import InputField from "../InputField";
import FormGroup from "../FormGroup";
import SelectField from "../SelectField";

const InvoiceFormDetails = () => {
    return (
        <FormGroup columns="1fr 1fr">
            <InputField
                inputType="date"
                name="createdAt"
                label="Invoice Date"
            />
            <SelectField name="paymentTerms" label="Payment Terms" />
        </FormGroup>
    );
};

export default InvoiceFormDetails;
