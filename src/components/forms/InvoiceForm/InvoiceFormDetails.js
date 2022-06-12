import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "stores/actions/formInputActions";
import addDays from "functions/addDays";
import InputField from "../InputField";
import FormGroup from "../FormGroup";
import SelectField from "../SelectField";
// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";

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

    const tabletSmallScreen = useMediaQuery(screen.tabletS);

    return (
        <FormGroup columns="1fr 1fr">
            <InputField
                inputType="date"
                name="createdAt"
                label="Invoice Date"
                fullGridColumn={tabletSmallScreen}
            />
            <SelectField
                name="paymentTerms"
                label="Payment Terms"
                fullGridColumn={tabletSmallScreen}
            />
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
