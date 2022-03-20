import { useDispatch } from "react-redux";
import styled from "styled-components";
// Font
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";

const ListItem = styled.li`
    display: flex;
    gap: 1.2rem;
`;

const Label = styled.label`
    ${H3SecondaryStyle}

    width: 100%;
`;

const FilterOptionsItem = ({ id, label, checkAction }) => {
    const dispatch = useDispatch();

    // Dispatch action from checkAction prop
    const checkHandler = () => {
        dispatch({ type: checkAction });
    };

    return (
        <ListItem>
            <input
                type="checkbox"
                defaultChecked
                id={id}
                name={id}
                value={label}
                onChange={checkHandler}
            />
            <Label htmlFor={id}>{label}</Label>
        </ListItem>
    );
};

export default FilterOptionsItem;
