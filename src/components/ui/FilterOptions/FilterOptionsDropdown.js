import styled from "styled-components";
import FilterOptionsItem from "./FilterOptionsItem";

const Container = styled.div`
    position: absolute;
    bottom: 0;

    background-color: #fff;
    border-radius: 1.2rem;
    box-shadow: 0 1rem 2rem rgba(72, 84, 159, 0.15);
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
