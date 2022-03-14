import styled from "styled-components";
// Font
import { H3SecondaryStyle } from "components/headings/H3Secondary";

const ListItem = styled.li`
    display: flex;
    gap: 1.2rem;
`;

const Label = styled.label`
    ${H3SecondaryStyle}

    color: ${({ theme }) => theme.text.primary};
    width: 100%;
`;

const FilterOptionsItem = ({ id, label }) => {
    return (
        <ListItem>
            <input type="checkbox" id={id} name={id} value={label} />
            <Label htmlFor={id}>{label}</Label>
        </ListItem>
    );
};

export default FilterOptionsItem;
