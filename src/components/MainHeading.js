import styled from "styled-components";
// Components
import H1 from "./headings/H1";
import Text12 from "./text/Text12";
import FlexContainer from "./layout/FlexContainer";
import NewInvoiceButton from "components/buttons/NewInvoiceButton";

const Heading = styled(H1)`
    margin-bottom: 1.2rem;
`;

const MainHeading = () => {
    return (
        <FlexContainer alignItem="center" justifyContent="space-between">
            <div>
                <Heading>Invoices</Heading>
                <Text12>There are 0 total invoices</Text12>
            </div>
            <div>
                <NewInvoiceButton />
            </div>
        </FlexContainer>
    );
};

export default MainHeading;
