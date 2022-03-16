import styled from "styled-components";
import FilterOptionsItem from "./FilterOptionsItem";
// Redux Actions
import {
    FILTER_PAID,
    FILTER_PENDING,
    FILTER_DRAFT,
} from "actions/filterActions";

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
                <FilterOptionsItem
                    id="draft"
                    label="Draft"
                    checkAction={FILTER_DRAFT}
                />
                <FilterOptionsItem
                    id="pending"
                    label="Pending"
                    checkAction={FILTER_PENDING}
                />
                <FilterOptionsItem
                    id="paid"
                    label="Paid"
                    checkAction={FILTER_PAID}
                />
            </FilterOptionsList>
        </Container>
    );
};

export default FilterOptionsDropdown;
