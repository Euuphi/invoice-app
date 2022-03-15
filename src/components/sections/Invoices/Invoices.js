import FlexContainer from "components/layout/FlexContainer";
import InvoiceItem from "./InvoiceItem/";
// Data
import data from "data/data.json";

const Invoices = () => {
    // Extract invoice data from json file intro an array of objects
    const invoiceData = JSON.parse(JSON.stringify(data));

    return (
        <FlexContainer flexDirection="column" gap="2rem">
            {invoiceData.map((invoice) => {
                return (
                    <InvoiceItem
                        id={invoice.id}
                        dueDate={invoice.paymentDue}
                        clientName={invoice.clientName}
                        key={invoice.id}
                        total={invoice.total}
                        status={invoice.status}
                    />
                );
            })}
        </FlexContainer>
    );
};

export default Invoices;
