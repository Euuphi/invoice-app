import styled from "styled-components";
// Components
import H1 from "./headings/H1";
import Text12 from "./text/Text12";
import NewInvoiceButton from "components/buttons/NewInvoiceButton";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Heading = styled(H1)`
    margin-bottom: 1.2rem;
`;

const MainHeading = () => {
    return (
        <Container>
            <div>
                <Heading>Invoices</Heading>
                <Text12>There are 0 total invoices</Text12>
            </div>
            <div>
                <NewInvoiceButton />
            </div>
        </Container>
    );
};

export default MainHeading;
