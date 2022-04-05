import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "stores/actions/formInputActions";
import addDays from "functions/addDays";
import InputField from "../InputField";
import FormGroup from "../FormGroup";
import SelectField from "../SelectField";

const InvoiceFormDetails = () => {
    const dispatch = useDispatch();
    // Selectors
    const paymentTerm = useSelector((state) => state.formInput.paymentTerms);
    const dateCreated = useSelector((state) => state.formInput.createdAt);

    // Update payment due date when there are changes to payment date inputs
    useEffect(() => {
        // Error handler
        if (!dateCreated || !paymentTerm) {
            return;
        } else {
            // Calculate due day with created date + payment term
            const paymentDue = addDays(
                dateCreated,
                Number(paymentTerm)
            ).toISOString();

            // Update payment due date within form state
            dispatch(updateInput("paymentDue", paymentDue));
            return paymentDue;
        }
    }, [dateCreated, paymentTerm, dispatch]);

    return (
        <FormGroup columns="1fr 1fr">
            <InputField
                inputType="date"
                name="createdAt"
                label="Invoice Date"
            />
            <SelectField name="paymentTerms" label="Payment Terms" />
            <InputField
                inputType="text"
                name="description"
                label="Project Description"
                fullGridColumn
            />
        </FormGroup>
    );
};

export default InvoiceFormDetails;
