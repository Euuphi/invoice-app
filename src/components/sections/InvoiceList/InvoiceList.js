import FlexContainer from "components/layout/FlexContainer";
import InvoiceItem from "./InvoiceItem";
// Data
import data from "data/data.json";
// Illustration
import IllustrationIcon from "./NoInvoices";

const InvoiceList = () => {
    // Extract invoice data from json file intro an array of objects
    // TODO: Uncomment data after adding screen for no invoices
    const invoiceData = []; //JSON.parse(JSON.stringify(data));

    return (
        <FlexContainer flexDirection="column" gap="2rem" alignItems="center">
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
            <IllustrationIcon />
        </FlexContainer>
    );
};

export default InvoiceList;
