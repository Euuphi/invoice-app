// Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InputField from "../InputField";
import InvoiceFormDetails from "./InvoiceFormDetails";

const InvoiceForm = () => {
    return (
        <form>
            <BillFrom />
            <BillTo />
            <InvoiceFormDetails />
        </form>
    );
};

export default InvoiceForm;
