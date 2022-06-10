import styled from "styled-components";
// Media Query
import screen from "styles/mediaQuery/screens";
import { useMediaQuery } from "@mui/material";
// Components
import H1 from "../headings/H1";
import ParagraphMd from "../text/ParagraphMd";
import FlexContainer from "components/layout/FlexContainer";
import NewInvoiceButton from "components/buttons/NewInvoiceButton";
import FilterOptions from "components/ui/FilterOptions/";

const Heading = styled(H1)`
    margin-bottom: 1.2rem;

    @media ${screen.tabletS} {
        font-size: 2.5rem;
        margin-bottom: 0.3rem;
    }
`;

const Container = styled(FlexContainer)`
    margin-bottom: 6.5rem;
`;

const MainHeading = ({ numberOfInvoices }) => {
    const tabletSmallScreen = useMediaQuery(screen.tabletS);

    return (
        <Container alignItems="center" justifyContent="space-between">
            <div>
                <Heading>Invoices</Heading>
                <ParagraphMd>
                    {!tabletSmallScreen
                        ? `There are ${numberOfInvoices} total invoices`
                        : `${numberOfInvoices} invoices`}
                </ParagraphMd>
            </div>
            <FlexContainer
                alignItems="center"
                justifyContent="center"
                gap={!tabletSmallScreen ? "3rem" : "1.8rem"}>
                <FilterOptions />
                <NewInvoiceButton />
            </FlexContainer>
        </Container>
    );
};

export default MainHeading;
