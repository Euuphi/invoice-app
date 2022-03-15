import styled from "styled-components";
import FilterOptionsItem from "./FilterOptionsItem";

const Container = styled.div`
    position: absolute;
    bottom: 0;

    background-color: ${({ theme }) => theme.background.tertiary};
    border-radius: 1.2rem;
    box-shadow: 0 1rem 2rem ${({ theme }) => theme.shadow.medium};
    padding: 2.4rem;
    width: 130%;
    transform: translate(-12.5%, 110%);
`;

const FilterOptionsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    list-style: none;
`;

const FilterOptionsDropdown = () => {
    //TODO: Create custom checkboxes
    return (
        <Container>
            <FilterOptionsList>
                <FilterOptionsItem id="draft" label="Draft" />
                <FilterOptionsItem id="pending" label="Pending" />
                <FilterOptionsItem id="paid" label="Paid" />
            </FilterOptionsList>
        </Container>
    );
};

export default FilterOptionsDropdown;
