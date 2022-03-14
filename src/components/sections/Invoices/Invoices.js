import FlexContainer from "components/layout/FlexContainer";
import InvoiceItem from "./InvoiceItem";

const Invoices = () => {
    return (
        <FlexContainer flexDirection="column" gap="2rem">
            <InvoiceItem />
        </FlexContainer>
    );
};

export default Invoices;
