// Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import NewInvoiceFormButtons from "./NewInvoiceFormButtons";
import InvoiceFormDetails from "./InvoiceFormDetails";
import ItemList from "./ItemList";
import EditInvoiceFormButton from "./EditInvoiceFormButtons";

/**
 * Create new invoice form by default
 *
 * @param {string} formStyle - String to specify style of form eg. "edit"
 * @return {JSX} - Invoice form component
 */
const InvoiceForm = ({ formStyle }) => {
    return (
        <form>
            <BillFrom />
            <BillTo />
            <InvoiceFormDetails />
            <ItemList formGroup="items" />
            {formStyle === "edit" ? (
                <EditInvoiceFormButton />
            ) : (
                <NewInvoiceFormButtons />
            )}
        </form>
    );
};

export default InvoiceForm;
