import styled from "styled-components";
// Components
import FilterOptionsButton from "./FilterOptionsButton";
import FilterOptionsDropdown from "./FilterOptionsDropdown";

const Container = styled.div`
    position: relative;
`;

const FilterOptions = () => {
    // TODO: Add filter functionality for viewing invoices
    return (
        <Container>
            <FilterOptionsButton />
            <FilterOptionsDropdown />
        </Container>
    );
};

export default FilterOptions;
