import { useState } from "react";
import styled from "styled-components";
// Components
import FilterOptionsButton from "./FilterOptionsButton";
import FilterOptionsDropdown from "./FilterOptionsDropdown";

const Container = styled.div`
    position: relative;
`;

const FilterOptions = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const clickHandler = () => {
        // Toggle menu open state
        setMenuOpen((prevState) => !prevState);
    };

    // TODO: Add filter functionality for viewing invoices
    return (
        <Container>
            <FilterOptionsButton onClick={clickHandler} menuOpen={menuOpen} />
            {menuOpen && <FilterOptionsDropdown />}
        </Container>
    );
};

export default FilterOptions;
