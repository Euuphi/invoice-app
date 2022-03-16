import { useSelector } from "react-redux";
// Components
import FlexContainer from "components/layout/FlexContainer";
import InvoiceItem from "./InvoiceItem";
import NoInvoices from "./NoInvoices";
// Data
import data from "data/data.json";

const InvoiceList = () => {
    let invoiceData = [];

    // Extract invoice data from json file intro an array of objects
    invoiceData = JSON.parse(JSON.stringify(data));

    const filterOptions = useSelector((state) => state.filterOptions);

    console.log(filterOptions);

    return (
        <FlexContainer flexDirection="column" gap="2rem" alignItems="center">
            {invoiceData.length === 0 && <NoInvoices />}
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

export default InvoiceList;
