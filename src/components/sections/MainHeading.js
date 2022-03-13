import styled from "styled-components";
// Components
import H1 from "../headings/H1";
import Text12 from "../text/Text12";
import FlexContainer from "components/layout/FlexContainer";
import NewInvoiceButton from "components/buttons/NewInvoiceButton";
import FilterOptions from "components/ui/FilterOptions/";

const Heading = styled(H1)`
    margin-bottom: 1.2rem;
`;

const Container = styled(FlexContainer)`
    margin-bottom: 6.5rem;
`;

const MainHeading = () => {
    return (
        <Container alignItems="center" justifyContent="space-between">
            <div>
                <Heading>Invoices</Heading>
                <Text12>There are 0 total invoices</Text12>
            </div>
            <FlexContainer
                alignItems="center"
                justifyContent="center"
                gap="3rem">
                <FilterOptions />
                <NewInvoiceButton />
            </FlexContainer>
        </Container>
    );
};

export default MainHeading;
