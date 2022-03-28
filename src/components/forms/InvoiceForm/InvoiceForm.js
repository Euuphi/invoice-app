// Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import FormButtons from "./FormButtons";
import InvoiceFormDetails from "./InvoiceFormDetails";
import ItemList from "./ItemList";

const InvoiceForm = () => {
    return (
        <form>
            <BillFrom />
            <BillTo />
            <InvoiceFormDetails />
            <ItemList />
            <FormButtons />
        </form>
    );
};

export default InvoiceForm;
