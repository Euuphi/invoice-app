// Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InputField from "../InputField";

const InvoiceForm = () => {
    return (
        <form>
            <BillFrom />
            <BillTo />
            <InputField
                inputType="date"
                name="createdAt"
                label="Invoice Date"
            />
        </form>
    );
};

export default InvoiceForm;
