// Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceFormDetails from "./InvoiceFormDetails";
import ItemList from "./ItemList";

const InvoiceForm = () => {
    return (
        <form>
            <BillFrom />
            <BillTo />
            <InvoiceFormDetails />
            <ItemList />
        </form>
    );
};

export default InvoiceForm;
