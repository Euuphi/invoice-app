// Components
import BillFrom from "components/forms/BillFrom";
import BillTo from "./BillTo";

const InvoiceForm = () => {
    return (
        <form>
            <BillFrom />
            <BillTo />
        </form>
    );
};

export default InvoiceForm;
