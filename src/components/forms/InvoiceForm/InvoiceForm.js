// Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import NewInvoiceFormButtons from "./NewInvoiceFormButtons";
import InvoiceFormDetails from "./InvoiceFormDetails";
import ItemList from "./ItemList";

const InvoiceForm = () => {
    return (
        <form>
            <BillFrom />
            <BillTo />
            <InvoiceFormDetails />
            <ItemList formGroup="items" />
            <NewInvoiceFormButtons />
        </form>
    );
};

export default InvoiceForm;
