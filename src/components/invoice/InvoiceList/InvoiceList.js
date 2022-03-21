import { useSelector } from "react-redux";
// Components
import FlexContainer from "components/layout/FlexContainer";
import InvoiceItem from "../InvoiceItem";
import NoInvoices from "./NoInvoices";

const InvoiceList = ({ invoices }) => {
    // Filter invoices based on filter options
    const filterOptions = useSelector((state) => state.filterOptions);

    const invoiceData = invoices.filter(
        (invoice) =>
            invoice.status === filterOptions.paid ||
            invoice.status === filterOptions.pending ||
            invoice.status === filterOptions.draft
    );

    return (
        <FlexContainer flexDirection="column" gap="2rem" alignItems="center">
            {invoiceData.length === 0 ? (
                <NoInvoices />
            ) : (
                invoiceData.map((invoice) => {
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
                })
            )}
        </FlexContainer>
    );
};

export default InvoiceList;
