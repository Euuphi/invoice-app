import FlexContainer from "components/layout/FlexContainer";
import InvoiceItem from "./InvoiceItem";
// Data
import data from "data/data.json";

const Invoices = () => {
    const invoiceData = JSON.parse(JSON.stringify(data))[0];

    console.log(invoiceData);

    return (
        <FlexContainer flexDirection="column" gap="2rem">
            <InvoiceItem
                id={invoiceData.id}
                dueDate={invoiceData.paymentDue}
                clientName={invoiceData.clientName}
                total={invoiceData.total}
            />
        </FlexContainer>
    );
};

export default Invoices;
