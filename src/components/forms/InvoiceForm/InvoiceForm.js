import { useContext } from "react";
import { FormContext } from "context/FormContext";
import { useSelector } from "react-redux";
import styled from "styled-components";
// Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import NewInvoiceFormButtons from "./NewInvoiceFormButtons";
import InvoiceFormDetails from "./InvoiceFormDetails";
import ItemList from "./ItemList";
import EditInvoiceFormButton from "./EditInvoiceFormButtons";
import ErrorText from "./ErrorText";

const ErrorContainer = styled.div`
    margin-bottom: 3rem;
`;

/**
 * Create new invoice form by default
 *
 * @param {string} formStyle - String to specify style of form eg. "edit"
 * @return {JSX} - Invoice form component
 */
const InvoiceForm = ({ formStyle }) => {
    const { validateErrors } = useContext(FormContext);
    // Check form input errors
    const inputErrors = useSelector((state) => state.form.errors);
    const errors = validateErrors(inputErrors);

    return (
        <form>
            <BillFrom />
            <BillTo />
            <InvoiceFormDetails />
            <ItemList formGroup="items" />
            {Object.keys(errors).length > 0 && (
                <ErrorContainer>
                    <ErrorText>- Please fill required fields</ErrorText>
                    {errors.items === "no items" && (
                        <ErrorText>- An item must be added</ErrorText>
                    )}
                </ErrorContainer>
            )}
            {formStyle === "edit" ? (
                <EditInvoiceFormButton />
            ) : (
                <NewInvoiceFormButtons />
            )}
        </form>
    );
};

export default InvoiceForm;
