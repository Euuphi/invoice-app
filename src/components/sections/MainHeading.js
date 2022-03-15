import styled from "styled-components";
// Components
import H1 from "../headings/H1";
import ParagraphMd from "../text/ParagraphMd";
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
                <ParagraphMd>There are 0 total invoices</ParagraphMd>
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
